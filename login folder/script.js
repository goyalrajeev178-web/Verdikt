// ── Firebase Imports ────────────────────────────────────────────────────────
import { initializeApp }                       from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

// ── Firebase Config ──────────────────────────────────────────────────────────
const firebaseConfig = {
    apiKey:            "AIzaSyAYsk43RoGS6A6RD-msN2nok8VK_lEojo4",
    authDomain:        "verdikt-bf386.firebaseapp.com",
    projectId:         "verdikt-bf386",
    storageBucket:     "verdikt-bf386.firebasestorage.app",
    messagingSenderId: "171269655808",
    appId:             "1:171269655808:web:1cfcf89551dcd2d23a37e5",
    measurementId:     "G-JW8T0XDVXL"
};

const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ── Allowed accounts ─────────────────────────────────────────────────────────
// These must match exactly what you created in Firebase Console → Authentication
const ALLOWED_ACCOUNTS = {
    student: "student@verdikt.com",   // ← change to your student's email
    teacher: "teacher@verdikt.com"    // ← change to your teacher's email
};

// ── Init Lucide ───────────────────────────────────────────────────────────────
lucide.createIcons();

document.addEventListener('DOMContentLoaded', () => {

    // ── Role Toggle ──────────────────────────────────────────────────────────
    const roleButtons   = document.querySelectorAll('.tab-btn');
    const roleContainer = document.getElementById('role-toggle');
    let   currentRole   = 'student';

    roleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            roleButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentRole = btn.getAttribute('data-role');
            roleContainer.classList.toggle('teacher-active', currentRole === 'teacher');
        });
    });

    // ── Password Toggle ──────────────────────────────────────────────────────
    const togglePasswordBtn = document.getElementById('toggle-password');
    const passwordInput     = document.getElementById('password');
    let   showPassword      = false;

    togglePasswordBtn.addEventListener('click', () => {
        showPassword       = !showPassword;
        passwordInput.type = showPassword ? 'text' : 'password';
        togglePasswordBtn.innerHTML = showPassword
            ? '<i data-lucide="eye-off" class="icon-small"></i>'
            : '<i data-lucide="eye"     class="icon-small"></i>';
        lucide.createIcons();
    });

    // ── Form Submission ──────────────────────────────────────────────────────
    const loginForm  = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const submitBtn  = document.getElementById('submit-btn');
    const btnText    = document.getElementById('btn-text');
    const loader     = document.getElementById('loader');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email    = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!email || !password) {
            showError('Please enter both email and password.');
            return;
        }

        // ── Guard: email must match the selected role ─────────────────────────
        const expectedEmail = ALLOWED_ACCOUNTS[currentRole];
        if (email.toLowerCase() !== expectedEmail.toLowerCase()) {
            showError(
                `This email is not registered as a ${currentRole}. ` +
                `Please select the correct role or use the right account.`
            );
            return;
        }

        // ── Loading state ─────────────────────────────────────────────────────
        submitBtn.disabled = true;
        btnText.classList.add('hidden');
        loader.classList.remove('hidden');
        clearError();

        try {
            // ── Firebase sign-in ──────────────────────────────────────────────
            await signInWithEmailAndPassword(auth, email, password);

            // ── Success → redirect ────────────────────────────────────────────
            if (currentRole === 'teacher') {
                window.location.href = '../teacher-dashboard.html';
            } else {
                window.location.href = '../student-dashboard/index.html';
            }

        } catch (err) {
            // ── Map Firebase error codes to friendly messages ─────────────────
            showError(getFriendlyError(err.code));

            submitBtn.disabled = false;
            btnText.classList.remove('hidden');
            loader.classList.add('hidden');
        }
    });

});

// ── Helpers ───────────────────────────────────────────────────────────────────

function getFriendlyError(code) {
    switch (code) {
        case 'auth/user-not-found':
        case 'auth/wrong-password':
        case 'auth/invalid-credential':
            return 'Incorrect email or password. Please try again.';
        case 'auth/invalid-email':
            return 'Please enter a valid email address.';
        case 'auth/user-disabled':
            return 'This account has been disabled. Contact your administrator.';
        case 'auth/too-many-requests':
            return 'Too many failed attempts. Please wait a moment and try again.';
        case 'auth/network-request-failed':
            return 'Network error. Please check your connection.';
        default:
            return 'Something went wrong. Please try again.';
    }
}

function showError(message) {
    let el = document.getElementById('auth-error');
    if (!el) {
        el = document.createElement('p');
        el.id = 'auth-error';
        el.style.cssText = `
            margin-top: 0.75rem;
            font-size: 0.8rem;
            color: #DC2626;
            background: #FEF2F2;
            border: 1px solid #FECACA;
            border-radius: 0.5rem;
            padding: 0.6rem 0.875rem;
            text-align: center;
        `;
        document.getElementById('login-form').appendChild(el);
    }
    el.textContent = message;
    el.style.display = 'block';
}

function clearError() {
    const el = document.getElementById('auth-error');
    if (el) el.style.display = 'none';
}