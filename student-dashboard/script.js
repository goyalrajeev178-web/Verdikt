// ── Mock Data (inlined from mockData.ts) ──────────────────────

const mockAssignments = [
  {
    id: 'asgn-001',
    title: 'Binary Search Implementation',
    description: 'Implement a binary search algorithm that returns the index of a target element in a sorted array. Return -1 if the element is not found. Your solution must have O(log n) time complexity.',
    languages: ['python', 'javascript', 'java', 'cpp'],
    deadline: '2026-04-10T23:59:00Z',
    timeLimitMinutes: 45,
    status: 'active',
  },
  {
    id: 'asgn-002',
    title: 'Linked List Reversal',
    description: 'Write a function to reverse a singly linked list. You must do this in-place with O(1) extra memory. Return the new head of the reversed list.',
    languages: ['python', 'javascript', 'typescript', 'java', 'cpp', 'c'],
    deadline: '2026-04-12T23:59:00Z',
    timeLimitMinutes: 30,
    status: 'active',
  },
  {
    id: 'asgn-003',
    title: 'FizzBuzz with Twist',
    description: 'Implement FizzBuzz from 1 to N, but replace multiples of 7 with "Buzz" and multiples of both 3 and 7 with "FizzBuzz". Print each result on a new line.',
    languages: ['python', 'javascript', 'c'],
    deadline: '2026-04-05T23:59:00Z',
    timeLimitMinutes: 20,
    status: 'active',
  },
];

const mockSubmissions = [
  {
    id: 'sub-001', assignmentId: 'asgn-001', studentId: 'stu-001',
    language: 'python', submittedAt: '2026-04-01T14:32:00Z',
    status: 'passed', score: 95,
    testResults: [
      { passed: true }, { passed: true }, { passed: true }, { passed: true },
    ],
    behaviorFlags: [], timeSpentMinutes: 22,
  },
  {
    id: 'sub-006', assignmentId: 'asgn-002', studentId: 'stu-001',
    language: 'python', submittedAt: '2026-04-02T09:15:00Z',
    status: 'passed', score: 100,
    testResults: [
      { passed: true }, { passed: true }, { passed: true },
    ],
    behaviorFlags: [], timeSpentMinutes: 15,
  },
  {
    id: 'sub-003-ref', assignmentId: 'asgn-003', studentId: 'stu-001',
    language: 'javascript', submittedAt: '2026-04-01T16:45:00Z',
    status: 'flagged', score: 70,
    testResults: [
      { passed: true }, { passed: true }, { passed: false }, { passed: false },
    ],
    behaviorFlags: ['flag-1', 'flag-2'], timeSpentMinutes: 8,
  },
];

// Filter only student stu-001 submissions
const mySubmissions = mockSubmissions.filter(s => s.studentId === 'stu-001');
const activeAssignments = mockAssignments.filter(a => a.status === 'active');

// ── Utilities ────────────────────────────────────────────────

function daysLeft(deadlineStr) {
  const diff = new Date(deadlineStr).getTime() - Date.now();
  return Math.ceil(diff / 86400000);
}

function scoreClass(score) {
  if (score >= 80) return 'score-high';
  if (score >= 50) return 'score-mid';
  return 'score-low';
}

function statusBadgeHTML(status) {
  const icons = {
    passed:  'check-circle',
    failed:  'x-circle',
    flagged: 'shield',
    pending: 'clock',
  };
  const cls = `status-${status}`;
  const icon = icons[status] || 'help-circle';
  return `<span class="status-badge ${cls}">
    <i data-lucide="${icon}"></i> ${status}
  </span>`;
}

function assignmentTitle(assignmentId) {
  const a = mockAssignments.find(x => x.id === assignmentId);
  return a ? a.title : assignmentId;
}

// ── Render: Active Assignments ────────────────────────────────

function renderAssignments() {
  const container = document.getElementById('assignments-list');
  if (!activeAssignments.length) {
    container.innerHTML = `<div style="text-align:center;padding:3rem;color:var(--color-mist);">No active assignments.</div>`;
    return;
  }

  container.innerHTML = activeAssignments.map(a => {
    const dl = daysLeft(a.deadline);
    const isUrgent = dl <= 2;
    const pillClass = isUrgent ? 'urgent' : 'upcoming';
    const pillLabel = dl > 0 ? `${dl}d left` : 'Due today';

    return `
      <div class="assignment-item">
        <div class="assignment-top">
          <div style="flex:1;">
            <h4 class="assignment-title">${a.title}</h4>
            <p class="assignment-desc">${a.description}</p>
            <div class="assignment-meta">
              <span class="meta-pill">
                <i data-lucide="clock"></i> ${a.timeLimitMinutes} min
              </span>
              <span class="meta-pill">
                <i data-lucide="code-2"></i> ${a.languages.join(', ')}
              </span>
              <span class="meta-pill ${pillClass}">
                <i data-lucide="calendar"></i> ${pillLabel}
              </span>
            </div>
          </div>
          <button class="start-btn" onclick="alert('Opening editor for: ${a.title}')">
            Start <i data-lucide="arrow-right"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');

  lucide.createIcons();
}

// ── Render: Recent Submissions ────────────────────────────────

function renderRecentSubmissions() {
  const container = document.getElementById('recent-submissions-list');
  const recent = mySubmissions.slice(0, 4);

  container.innerHTML = recent.map(sub => {
    const flags = sub.behaviorFlags.length;
    const flagHTML = flags === 0
      ? `<div class="flag-badge flag-clean"><i data-lucide="shield"></i> Clean</div>`
      : `<div class="flag-badge flag-warn"><i data-lucide="shield"></i> ${flags} flags</div>`;

    return `
      <div class="submission-item">
        <div>
          <p class="sub-title">${assignmentTitle(sub.assignmentId)}</p>
          <p class="sub-meta">${sub.language} — ${sub.timeSpentMinutes}m</p>
        </div>
        <div style="text-align:right;">
          <p class="sub-score ${scoreClass(sub.score)}">${sub.score}%</p>
          ${flagHTML}
        </div>
      </div>
    `;
  }).join('');

  lucide.createIcons();
}

// ── Render: Submission History ────────────────────────────────

function renderHistory() {
  const container = document.getElementById('history-list');

  if (!mySubmissions.length) {
    container.innerHTML = `
      <div style="text-align:center;padding:4rem;color:var(--color-mist);">
        <i data-lucide="code-2" style="width:3rem;height:3rem;opacity:0.3;display:block;margin:0 auto 1rem;"></i>
        No submissions yet. Start solving assignments!
      </div>
    `;
    lucide.createIcons();
    return;
  }

  container.innerHTML = mySubmissions.map((sub, i) => {
    const passedTests = sub.testResults.filter(t => t.passed).length;
    const totalTests  = sub.testResults.length;

    const dots = sub.testResults.map(t =>
      `<div class="test-dot ${t.passed ? 'dot-pass' : 'dot-fail'}"></div>`
    ).join('');

    const dateStr = new Date(sub.submittedAt).toLocaleDateString('en-US', {
      month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit',
    });

    const flags = sub.behaviorFlags.length;
    const flagHTML = flags === 0
      ? `<span class="flag-badge flag-clean" style="margin-top:0.25rem;"><i data-lucide="shield"></i> Clean</span>`
      : `<span class="flag-badge flag-warn"  style="margin-top:0.25rem;"><i data-lucide="shield"></i> ${flags} flags</span>`;

    return `
      <div class="history-card" style="animation-delay:${i * 0.06}s;">
        <div style="flex:1;min-width:0;">
          <div class="history-title-row">
            <h3 class="history-title">${assignmentTitle(sub.assignmentId)}</h3>
            ${statusBadgeHTML(sub.status)}
          </div>
          <div class="history-metas">
            <span><i data-lucide="code-2"></i>${sub.language}</span>
            <span><i data-lucide="clock"></i>${sub.timeSpentMinutes}m</span>
            <span>Tests: ${passedTests}/${totalTests}</span>
            <span>${dateStr}</span>
          </div>
          ${totalTests > 0 ? `<div class="test-dots">${dots}</div>` : ''}
        </div>
        <div class="history-right">
          <div>
            <div class="history-score ${scoreClass(sub.score)}">${sub.score}%</div>
            ${flagHTML}
          </div>
          <button class="view-btn" title="View submission" onclick="alert('Viewing submission: ${sub.id}')">
            <i data-lucide="eye"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');

  lucide.createIcons();
}

// ── Gauge Animation ──────────────────────────────────────────

function animateGauges() {
  // CSS custom property --pct drives the arc via calc(). Nothing extra needed.
}

// ── Render: Assignments Page ──────────────────────────────────

function renderAssignmentsPage() {
  const active = mockAssignments.filter(a => a.status === 'active');
  const closed = mockAssignments.filter(a => a.status === 'closed');
  const submittedIds = new Set(mySubmissions.map(s => s.assignmentId));

  document.getElementById('active-count').textContent = active.length;
  document.getElementById('closed-count').textContent = closed.length;

  document.getElementById('active-assignments-list').innerHTML = active.map((a, i) => {
    const dl = daysLeft(a.deadline);
    const isUrgent = dl <= 2;
    const dlColor = isUrgent ? 'color:var(--color-crimson)' : 'color:var(--color-amber)';
    const dlLabel = dl > 0 ? `${dl}d left` : 'Due today';
    const submitted = submittedIds.has(a.id);
    const submittedBadge = submitted
      ? `<span class="submitted-badge"><i data-lucide="check-circle"></i> Submitted</span>`
      : '';

    return `
      <div class="asgn-row" style="animation-delay:${i * 0.05}s;">
        <div style="flex:1;">
          <div class="asgn-row-title-row">
            <span class="asgn-row-title">${a.title}</span>
            ${submittedBadge}
          </div>
          <p class="asgn-row-desc">${a.description}</p>
          <div class="asgn-row-metas">
            <span><i data-lucide="clock"></i>${a.timeLimitMinutes} min</span>
            <span><i data-lucide="code-2"></i>${a.languages.join(', ')}</span>
            <span style="${dlColor}"><i data-lucide="calendar"></i>${dlLabel}</span>
          </div>
        </div>
        <button class="asgn-start-btn" onclick="openEditor('${a.id}')">
          ${submitted ? 'Try Again' : 'Start'} <i data-lucide="arrow-right"></i>
        </button>
      </div>
    `;
  }).join('');

  document.getElementById('closed-assignments-list').innerHTML = closed.map(a => `
    <div class="asgn-row">
      <div>
        <p class="asgn-row-title">${a.title}</p>
        <p class="asgn-row-desc">${a.languages.join(', ')} — Deadline passed</p>
      </div>
    </div>
  `).join('') || '<p style="color:var(--color-mist);font-size:0.875rem;">No closed assignments.</p>';

  lucide.createIcons();
}

// ── Code Editor ───────────────────────────────────────────────

const defaultCode = {
  python:     '# Write your solution here\ndef solution():\n    pass\n',
  javascript: '// Write your solution here\nfunction solution() {\n  \n}\n',
  typescript: '// Write your solution here\nfunction solution(): void {\n  \n}\n',
  java:       '// Write your solution here\npublic class Solution {\n    public static void main(String[] args) {\n        \n    }\n}\n',
  cpp:        '// Write your solution here\n#include <iostream>\nusing namespace std;\n\nint main() {\n    \n    return 0;\n}\n',
  c:          '// Write your solution here\n#include <stdio.h>\n\nint main() {\n    \n    return 0;\n}\n',
};

let monacoEditor = null;
let monacoReady  = false;
let currentLang  = 'python';
let editorDark   = true;
let timerSecs    = 45 * 60;
let timerInterval = null;
let descVisible  = true;
let xAntiCheat   = { tabs: 0, pastes: 0, flags: 0, status: 'clean' };
let currentEditorAssignment = mockAssignments[0];
let testResults  = [];

function initMonaco() {
  if (monacoReady) return;
  require.config({ paths: { vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs' } });
  require(['vs/editor/editor.main'], () => {
    monacoReady = true;
    const container = document.getElementById('monaco-container');
    monacoEditor = monaco.editor.create(container, {
      value: defaultCode[currentLang],
      language: currentLang,
      theme: 'vs',
      fontSize: 14,
      fontFamily: '"Geist Mono", "JetBrains Mono", monospace',
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      padding: { top: 12, bottom: 12 },
      lineHeight: 22,
      renderLineHighlight: 'line',
      cursorBlinking: 'phase',
      smoothScrolling: true,
      bracketPairColorization: { enabled: true },
      autoClosingBrackets: 'always',
      tabSize: 2,
      wordWrap: 'on',
    });
  });
}

function openEditor(assignmentId) {
  currentEditorAssignment = mockAssignments.find(a => a.id === assignmentId) || mockAssignments[0];
  currentLang = currentEditorAssignment.languages[0];
  showPage('editor');
  setupEditorPage();
}

function setupEditorPage() {
  if (!currentEditorAssignment) return;

  // Title
  document.getElementById('editor-assignment-title').textContent = currentEditorAssignment.title;

  // Description panel
  document.getElementById('desc-title').textContent = currentEditorAssignment.title;
  document.getElementById('desc-text').textContent  = currentEditorAssignment.description;
  document.getElementById('desc-constraints').innerHTML = `
    Time Limit: ${currentEditorAssignment.timeLimitMinutes} minutes<br>
    Languages: ${currentEditorAssignment.languages.join(', ')}
  `;

  // Sample test cases (show 2 placeholders)
  document.getElementById('desc-testcases').innerHTML = `
    <div class="tc-sample">
      <p class="tc-label">Test #1</p>
      <p class="tc-io-label">Input:</p>
      <pre class="tc-code">[1, 3, 5, 7, 9], 5</pre>
      <p class="tc-io-label">Output:</p>
      <pre class="tc-code">2</pre>
    </div>
    <div class="tc-sample">
      <p class="tc-label">Test #2</p>
      <p class="tc-io-label">Input:</p>
      <pre class="tc-code">[2, 4, 6, 8], 3</pre>
      <p class="tc-io-label">Output:</p>
      <pre class="tc-code">-1</pre>
    </div>
  `;

  // Language dropdown
  buildLangDropdown();

  // Reset timer
  clearInterval(timerInterval);
  timerSecs = currentEditorAssignment.timeLimitMinutes * 60;
  updateTimerDisplay();
  timerInterval = setInterval(tickTimer, 1000);

  // Reset anti-cheat
  xAntiCheat = { tabs: 0, pastes: 0, flags: 0, status: 'clean' };
  updateIntegrityBar();

  // Output
  document.getElementById('output-pre').textContent = 'Click "Run" to test your code, or "Submit" to submit.';
  document.getElementById('output-stats').classList.add('hidden');
  document.getElementById('output-body').innerHTML = `<pre class="output-pre" id="output-pre">Click "Run" to test your code, or "Submit" to submit.</pre>`;

  // Monaco
  initMonaco();

  // Update editor code/lang when already ready
  if (monacoReady && monacoEditor) {
    monacoEditor.setValue(defaultCode[currentLang]);
    const model = monacoEditor.getModel();
    if (model) monaco.editor.setModelLanguage(model, currentLang === 'cpp' ? 'cpp' : currentLang);
  }

  lucide.createIcons();
}

function buildLangDropdown() {
  const dropdown = document.getElementById('lang-dropdown');
  const langs = currentEditorAssignment ? currentEditorAssignment.languages : Object.keys(defaultCode);
  document.getElementById('current-lang').textContent = currentLang;

  dropdown.innerHTML = langs.map(l => `
    <button class="lang-option ${l === currentLang ? 'active' : ''}" onclick="selectLang('${l}')">${l}</button>
  `).join('');
}

function selectLang(lang) {
  currentLang = lang;
  document.getElementById('current-lang').textContent = lang;
  document.getElementById('lang-dropdown').classList.add('hidden');
  buildLangDropdown();
  if (monacoReady && monacoEditor) {
    monacoEditor.setValue(defaultCode[lang] || '');
    const model = monacoEditor.getModel();
    if (model) monaco.editor.setModelLanguage(model, lang === 'cpp' ? 'cpp' : lang);
  }
}

function tickTimer() {
  timerSecs = Math.max(0, timerSecs - 1);
  updateTimerDisplay();
  if (timerSecs === 0) clearInterval(timerInterval);
}

function updateTimerDisplay() {
  const m = String(Math.floor(timerSecs / 60)).padStart(2, '0');
  const s = String(timerSecs % 60).padStart(2, '0');
  const el = document.getElementById('timer-badge');
  const display = document.getElementById('timer-display');
  if (!el || !display) return;
  display.textContent = `${m}:${s}`;
  const pct = timerSecs / (currentEditorAssignment.timeLimitMinutes * 60);
  el.className = 'timer-badge' + (pct < 0.1 ? ' danger' : pct < 0.25 ? ' warn' : '');
}

function updateIntegrityBar() {
  const bar    = document.getElementById('integrity-bar');
  const dot    = document.getElementById('integrity-bar-dot') || document.querySelector('.integrity-bar-dot');
  const status = document.getElementById('bar-status');
  if (bar) bar.className = 'integrity-bar' + (xAntiCheat.status === 'danger' ? ' danger' : xAntiCheat.status === 'warning' ? ' warn' : '');
  if (status) status.textContent = xAntiCheat.status.toUpperCase();
  const tabs   = document.getElementById('bar-tabs');
  const paste  = document.getElementById('bar-paste');
  const flags  = document.getElementById('bar-flags');
  const badge  = document.getElementById('flag-count');
  if (tabs)  tabs.textContent  = xAntiCheat.tabs;
  if (paste) paste.textContent = xAntiCheat.pastes;
  if (flags) flags.textContent = xAntiCheat.flags;
  if (badge) badge.textContent = xAntiCheat.flags > 0 ? xAntiCheat.flags : '';
}

function handleRun() {
  const runBtn = document.getElementById('run-btn');
  runBtn.disabled = true;
  runBtn.textContent = 'Running...';

  const body = document.getElementById('output-body');
  body.innerHTML = `<pre class="output-pre">Running tests...</pre>`;

  setTimeout(() => {
    const total  = 4;
    const passed = Math.floor(Math.random() * 2) + 2;
    const failed = total - passed;
    testResults = Array.from({ length: total }, (_, i) => ({
      idx: i + 1, passed: i < passed, timeMs: Math.floor(Math.random() * 50) + 5
    }));

    document.getElementById('output-stats').classList.remove('hidden');
    document.getElementById('stat-pass').textContent = `${passed} passed`;
    document.getElementById('stat-fail').textContent = `${failed} failed`;

    body.innerHTML = testResults.map(r => `
      <div class="test-result-row ${r.passed ? 'pass' : 'fail'}">
        <i data-lucide="${r.passed ? 'check-circle' : 'x-circle'}"></i>
        <span>Test #${r.idx}</span>
        <span class="test-result-time">${r.timeMs}ms</span>
      </div>
    `).join('');

    lucide.createIcons();
    runBtn.disabled = false;
    runBtn.innerHTML = '<i data-lucide="play" class="icon-xs"></i> Run';
    lucide.createIcons();
  }, 1200);
}

function handleSubmitEditor() {
  const btn = document.getElementById('submit-editor-btn');
  btn.disabled = true;
  btn.textContent = 'Submitting...';
  setTimeout(() => {
    btn.disabled = false;
    btn.innerHTML = '<i data-lucide="send" class="icon-xs"></i> Submit';
    lucide.createIcons();
    clearInterval(timerInterval);
    alert('Submission recorded! Redirecting to history...');
    showPage('history');
  }, 1500);
}

function initEditorControls() {
  // Language dropdown toggle
  document.getElementById('lang-selector-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    document.getElementById('lang-dropdown').classList.toggle('hidden');
  });

  document.addEventListener('click', () => {
    document.getElementById('lang-dropdown')?.classList.add('hidden');
  });

  // Description toggle
  document.getElementById('desc-toggle-btn').addEventListener('click', () => {
    descVisible = !descVisible;
    const panel = document.getElementById('desc-panel');
    panel.classList.toggle('hidden', !descVisible);
    const icon = document.querySelector('#desc-toggle-btn i');
    icon.setAttribute('data-lucide', descVisible ? 'eye-off' : 'eye');
    lucide.createIcons();
    monacoEditor?.layout();
  });

  // Theme toggle
  document.getElementById('theme-toggle-btn').addEventListener('click', () => {
    editorDark = !editorDark;
    if (monacoReady && monacoEditor) {
      monaco.editor.setTheme(editorDark ? 'vs-dark' : 'vs');
    }
    const icon = document.getElementById('theme-icon');
    icon.setAttribute('data-lucide', editorDark ? 'moon' : 'sun');
    lucide.createIcons();
  });

  // Reset
  document.getElementById('reset-btn').addEventListener('click', () => {
    if (monacoReady && monacoEditor) monacoEditor.setValue(defaultCode[currentLang] || '');
    testResults = [];
    document.getElementById('output-body').innerHTML = `<pre class="output-pre">Code reset.</pre>`;
    document.getElementById('output-stats').classList.add('hidden');
  });

  // Run / Submit
  document.getElementById('run-btn').addEventListener('click', handleRun);
  document.getElementById('submit-editor-btn').addEventListener('click', handleSubmitEditor);

  // Anti-cheat tracking
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && document.getElementById('page-editor') && !document.getElementById('page-editor').classList.contains('hidden')) {
      xAntiCheat.tabs++;
      xAntiCheat.flags++;
      xAntiCheat.status = xAntiCheat.flags >= 3 ? 'danger' : 'warning';
      updateIntegrityBar();
    }
  });

  document.addEventListener('paste', () => {
    xAntiCheat.pastes++;
    xAntiCheat.flags++;
    xAntiCheat.status = xAntiCheat.flags >= 3 ? 'danger' : 'warning';
    updateIntegrityBar();
  });
}

// ── Page Navigation ──────────────────────────────────────────

function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll('.content').forEach(el => el.classList.add('hidden'));
  // Show target page
  const target = document.getElementById(`page-${pageId}`);
  if (target) target.classList.remove('hidden');

  // Update active nav link
  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.toggle('active', el.getAttribute('data-page') === pageId);
  });

  // Update header
  const titles = {
    dashboard:   ['Dashboard',          'Your assignments and progress'],
    assignments: ['Assignments',         'Available coding challenges'],
    editor:      ['Code Editor',         'Write and run your code'],
    history:     ['Submission History',  'Your past attempts and grades'],
  };
  const [title, subtitle] = titles[pageId] || ['Verdikt', ''];
  document.querySelector('.header-title').textContent  = title;
  document.querySelector('.header-subtitle').textContent = subtitle;

  // Lazy renders
  if (pageId === 'assignments') renderAssignmentsPage();
  if (pageId === 'editor' && !monacoEditor) {
    currentEditorAssignment = mockAssignments[0];
    currentLang = currentEditorAssignment.languages[0];
    setupEditorPage();
  }

  // Re-layout monaco when editor becomes visible
  if (pageId === 'editor' && monacoReady && monacoEditor) {
    setTimeout(() => monacoEditor.layout(), 50);
  }
}

// ── Sidebar Collapse ─────────────────────────────────────────

function initSidebar() {
  const sidebar = document.getElementById('sidebar');
  const btn     = document.getElementById('collapse-btn');
  const icon    = document.getElementById('collapse-icon');
  let collapsed = false;

  btn.addEventListener('click', () => {
    collapsed = !collapsed;
    sidebar.classList.toggle('collapsed', collapsed);
    icon.setAttribute('data-lucide', collapsed ? 'chevron-right' : 'chevron-left');
    lucide.createIcons();
    if (monacoReady && monacoEditor) setTimeout(() => monacoEditor.layout(), 320);
  });
}

// ── Wire Nav Links ────────────────────────────────────────────

function initNav() {
  document.querySelectorAll('[data-page]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      showPage(el.getAttribute('data-page'));
    });
  });
}

// ── Boot ─────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();

  renderAssignments();
  renderRecentSubmissions();
  renderHistory();
  animateGauges();
  initSidebar();
  initNav();
  initEditorControls();

  showPage('dashboard');
});

