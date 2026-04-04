// Initialize Lucide Icons
lucide.createIcons();

document.addEventListener('DOMContentLoaded', () => {
    // Role Toggle Logic
    const roleButtons = document.querySelectorAll('.tab-btn');
    const roleContainer = document.getElementById('role-toggle');
    let currentRole = 'student';

    roleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Reset all buttons to inactive state
            roleButtons.forEach(b => {
                b.classList.remove('active');
            });

            // Set clicked button to active state
            btn.classList.add('active');
            
            currentRole = btn.getAttribute('data-role');
            if (currentRole === 'teacher') {
            roleContainer.classList.add('teacher-active');
        } else {
            roleContainer.classList.remove('teacher-active');
        }
        });
    });

    // Password Toggle Logic
    const togglePasswordBtn = document.getElementById('toggle-password');
    const passwordInput = document.getElementById('password');
    let showPassword = false;

    togglePasswordBtn.addEventListener('click', () => {
        showPassword = !showPassword;
        passwordInput.type = showPassword ? 'text' : 'password';
        
        // Update icon based on state
        // Re-creating the icon replaces the element, so we update the innerHTML with the new icon
        togglePasswordBtn.innerHTML = showPassword 
            ? '<i data-lucide="eye-off" class="icon-small"></i>'
            : '<i data-lucide="eye" class="icon-small"></i>';
            
        // Re-initialize new icon
        lucide.createIcons();
    });

    // Form Submission Logic
    const loginForm = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInputEl = document.getElementById('password');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = document.getElementById('btn-text');
    const loader = document.getElementById('loader');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = emailInput.value;
        const password = passwordInputEl.value;
        
        // Validation check
        if (!email || !password) {
            alert('Please enter both email and password.');
            return;
        }

        // Show loading state
        submitBtn.disabled = true;
        btnText.classList.add('hidden');
        loader.classList.remove('hidden');

        // Simulate API call (800ms)
        await new Promise(r => setTimeout(r, 800));

        // Restore original state
        submitBtn.disabled = false;
        btnText.classList.remove('hidden');
        loader.classList.add('hidden');

        // Redirect logic based on role
        if (currentRole === 'teacher') {
            alert('Login successful! Redirecting to Teacher Dashboard...');
            // window.location.href = '/teacher-dashboard.html';
        } else {
            alert('Login successful! Redirecting to Student Dashboard...');
            // window.location.href = '/student-dashboard.html';
        }
    });
});