// ── Mock Data ────────────────────────────────────────────────────────────

const mockAssignments = [
  { id: 'asgn-001', title: 'Binary Search Implementation', description: 'Implement a binary search algorithm that returns the index of a target element in a sorted array. Return -1 if not found. O(log n) required.', languages: ['python','javascript','java','cpp'], deadline: '2026-04-10T23:59:00Z', status: 'active',  totalSubmissions: 27, flaggedSubmissions: 3 },
  { id: 'asgn-002', title: 'Linked List Reversal',         description: 'Write a function to reverse a singly linked list in-place with O(1) extra memory.', languages: ['python','javascript','typescript','java','cpp','c'], deadline: '2026-04-12T23:59:00Z', status: 'active', totalSubmissions: 18, flaggedSubmissions: 1 },
  { id: 'asgn-003', title: 'FizzBuzz with Twist',          description: 'Implement FizzBuzz from 1 to N, but replace multiples of 7 with "Buzz" and multiples of both 3 and 7 with "FizzBuzz".', languages: ['python','javascript','c'], deadline: '2026-04-05T23:59:00Z', status: 'active', totalSubmissions: 42, flaggedSubmissions: 5 },
  { id: 'asgn-004', title: 'Stack Using Queues',           description: 'Implement a stack using only two queues. Support push, pop, top, and isEmpty operations.', languages: ['python','java','cpp'], deadline: '2026-04-15T23:59:00Z', status: 'draft', totalSubmissions: 0, flaggedSubmissions: 0 },
  { id: 'asgn-005', title: 'Matrix Spiral Traversal',      description: 'Given an M x N matrix, return all elements in spiral order starting from the top-left corner.', languages: ['python','javascript','typescript','java'], deadline: '2026-03-28T23:59:00Z', status: 'closed', totalSubmissions: 35, flaggedSubmissions: 4 },
];

const mockSubmissions = [
  { id: 'sub-001', assignmentId: 'asgn-001', studentName: 'Arjun Sharma',      language: 'python',     status: 'passed',  score: 95,  plagiarismScore: 8,  timeSpentMinutes: 22, behaviorFlags: [] },
  { id: 'sub-002', assignmentId: 'asgn-001', studentName: 'Priya Patel',       language: 'javascript', status: 'passed',  score: 100, plagiarismScore: 5,  timeSpentMinutes: 18, behaviorFlags: [] },
  { id: 'sub-003', assignmentId: 'asgn-001', studentName: 'Rohan Verma',       language: 'python',     status: 'flagged', score: 90,  plagiarismScore: 72, timeSpentMinutes: 8,  behaviorFlags: ['f1','f2','f3','f4'] },
  { id: 'sub-004', assignmentId: 'asgn-001', studentName: 'Ananya Singh',      language: 'java',       status: 'passed',  score: 100, plagiarismScore: 12, timeSpentMinutes: 35, behaviorFlags: ['f5'] },
  { id: 'sub-005', assignmentId: 'asgn-001', studentName: 'Vikram Nair',       language: 'cpp',        status: 'flagged', score: 85,  plagiarismScore: 65, timeSpentMinutes: 12, behaviorFlags: ['f1','f2','f3'] },
  { id: 'sub-006', assignmentId: 'asgn-002', studentName: 'Arjun Sharma',      language: 'python',     status: 'passed',  score: 100, plagiarismScore: 3,  timeSpentMinutes: 15, behaviorFlags: [] },
  { id: 'sub-007', assignmentId: 'asgn-003', studentName: 'Sneha Iyer',        language: 'python',     status: 'passed',  score: 100, plagiarismScore: 2,  timeSpentMinutes: 10, behaviorFlags: [] },
  { id: 'sub-008', assignmentId: 'asgn-003', studentName: 'Karan Mehta',       language: 'javascript', status: 'flagged', score: 75,  plagiarismScore: 58, timeSpentMinutes: 6,  behaviorFlags: ['f1','f2'] },
  { id: 'sub-009', assignmentId: 'asgn-001', studentName: 'Divya Krishnan',    language: 'python',     status: 'failed',  score: 25,  plagiarismScore: 15, timeSpentMinutes: 40, behaviorFlags: ['f6'] },
  { id: 'sub-010', assignmentId: 'asgn-002', studentName: 'Rahul Gupta',       language: 'javascript', status: 'pending', score: 0,   plagiarismScore: 0,  timeSpentMinutes: 25, behaviorFlags: [] },
];

const mockPlagiarismLogs = [
  { id: 'plog-001', submissionId: 'sub-003', studentName: 'Rohan Verma',     assignmentTitle: 'Binary Search Implementation', flags: [ {type:'tab_switch'},{type:'copy_paste'},{type:'typing_anomaly'},{type:'rapid_paste'} ], overallRisk: 'critical', detectedAt: '2026-04-01T16:50:00Z' },
  { id: 'plog-002', submissionId: 'sub-005', studentName: 'Vikram Nair',     assignmentTitle: 'Binary Search Implementation', flags: [ {type:'tab_switch'},{type:'copy_paste'},{type:'typing_anomaly'} ],                  overallRisk: 'high',     detectedAt: '2026-04-01T18:10:00Z' },
  { id: 'plog-003', submissionId: 'sub-008', studentName: 'Karan Mehta',     assignmentTitle: 'FizzBuzz with Twist',          flags: [ {type:'tab_switch'},{type:'copy_paste'} ],                                          overallRisk: 'high',     detectedAt: '2026-04-01T13:35:00Z' },
  { id: 'plog-004', submissionId: 'sub-004', studentName: 'Ananya Singh',    assignmentTitle: 'Binary Search Implementation', flags: [ {type:'right_click'} ],                                                             overallRisk: 'low',      detectedAt: '2026-04-01T17:25:00Z' },
];

const submissionTrend = [
  { date: '03/27', count: 8 }, { date: '03/28', count: 15 }, { date: '03/29', count: 12 },
  { date: '03/30', count: 22 },{ date: '03/31', count: 18 }, { date: '04/01', count: 30 },
  { date: '04/02', count: 14 },
];

const languageDistribution = [
  { language: 'Python',     count: 38, color: '#06B6D4' },
  { language: 'JavaScript', count: 24, color: '#F59E0B' },
  { language: 'Java',       count: 15, color: '#EF4444' },
  { language: 'C++',        count: 7,  color: '#8B5CF6' },
  { language: 'TypeScript', count: 3,  color: '#3B82F6' },
];

const flagTypeLabels = {
  tab_switch:     'Tab Switch',
  copy_paste:     'Copy/Paste',
  typing_anomaly: 'Typing Anomaly',
  rapid_paste:    'Rapid Paste',
  right_click:    'Right Click',
  idle_period:    'Idle Period',
};

// ── Utilities ────────────────────────────────────────────────────────────

function scoreClass(score) {
  if (score >= 80) return 'color: var(--color-emerald)';
  if (score >= 50) return 'color: var(--color-amber)';
  return 'color: var(--color-crimson)';
}

function assignmentTitle(id) {
  const a = mockAssignments.find(x => x.id === id);
  return a ? a.title : id;
}

function statusBadgeHTML(status) {
  const map = { passed: 'check-circle', failed: 'x-circle', flagged: 'shield', pending: 'clock' };
  return `<span class="status-badge badge-${status}">
    <i data-lucide="${map[status] || 'help-circle'}"></i> ${status}
  </span>`;
}

// FIX #1: was missing backticks — caused a plain string concatenation, not a template literal
function riskBadgeHTML(risk) {
  return `<span class="status-badge badge-${risk}">${risk}</span>`;
}

// ── Render: Submission Trend Chart ────────────────────────────────────────

function renderTrendChart() {
  const max = Math.max(...submissionTrend.map(d => d.count));
  document.getElementById('trend-chart').innerHTML = submissionTrend.map(d => {
    const pct = (d.count / max) * 100;
    return `
      <div class="bar-item">
        <span class="bar-count">${d.count}</span>
        <div class="bar-fill" style="height:${pct}%;"></div>
        <span class="bar-label">${d.date}</span>
      </div>
    `;
  }).join('');
}

// ── Render: Language Distribution Chart ────────────────────────────────────

function renderLangChart() {
  const max = Math.max(...languageDistribution.map(d => d.count));
  document.getElementById('lang-chart').innerHTML = languageDistribution.map(d => `
    <div class="lang-row">
      <span class="lang-name">${d.language}</span>
      <div class="lang-bar-bg">
        <div class="lang-bar-fill" style="width:${(d.count/max)*100}%; background:${d.color};"></div>
      </div>
      <span class="lang-count">${d.count}</span>
    </div>
  `).join('');
}

// ── Render: Recent Assignments (Dashboard) ────────────────────────────────

function renderRecentAssignmentsDash() {
  const el = document.getElementById('recent-assignments-list');
  el.innerHTML = mockAssignments.slice(0, 4).map(a => {
    const dotClass = a.status === 'active' ? 'dot-active' : a.status === 'draft' ? 'dot-draft' : 'dot-closed';
    const pillClass = a.status === 'active' ? 'pill-active' : a.status === 'draft' ? 'pill-draft' : 'pill-closed';
    return `
      <div class="list-row">
        <div class="list-row-left">
          <div class="status-dot ${dotClass}"></div>
          <div>
            <p class="row-title">${a.title}</p>
            <p class="row-meta">${a.languages.join(', ')} – ${a.totalSubmissions} submissions</p>
          </div>
        </div>
        <span class="status-pill ${pillClass}">${a.status}</span>
      </div>
    `;
  }).join('');
}

// ── Render: Plagiarism Alerts (Dashboard) ────────────────────────────────

function renderPlagiarismAlertsDash() {
  const el = document.getElementById('plagiarism-alerts-list');
  el.innerHTML = mockPlagiarismLogs.slice(0, 4).map(log => {
    const iconClass = log.overallRisk === 'critical' ? 'risk-critical' : log.overallRisk === 'high' ? 'risk-high' : log.overallRisk === 'medium' ? 'risk-medium' : 'risk-low';
    // FIX #2: was `badge-${log.overallRisk}` without backticks — evaluated as subtraction
    const badgeClass = `badge-${log.overallRisk}`;
    return `
      <div class="plag-row">
        <div class="list-row-left">
          <div class="plag-icon ${iconClass}">
            <i data-lucide="shield" class="icon-sm"></i>
          </div>
          <div>
            <p class="plag-name">${log.studentName}</p>
            <p class="plag-assignment">${log.assignmentTitle}</p>
          </div>
        </div>
        <div style="text-align:right;">
          <span class="status-badge ${badgeClass}">${log.overallRisk}</span>
          <p class="plag-flag-count">${log.flags.length} flags detected</p>
        </div>
      </div>
    `;
  }).join('');
  // FIX #3: was missing backticks on the textContent assignment
  document.getElementById('alert-count').textContent = `${mockPlagiarismLogs.length} flagged`;
}

// ── Render: Assignments Page ──────────────────────────────────────────────

function renderAssignmentsPage() {
  const el = document.getElementById('assignments-grid');
  el.innerHTML = mockAssignments.map((a, i) => {
    const isPast = new Date(a.deadline) < new Date();
    const iconBg = a.status === 'active' ? 'background:var(--color-teal-glow)' : a.status === 'draft' ? 'background:var(--color-amber-glow)' : 'background:var(--color-layer)';
    const iconColor = a.status === 'active' ? 'var(--color-teal)' : a.status === 'draft' ? 'var(--color-amber)' : 'var(--color-mist)';
    const pillClass = a.status === 'active' ? 'pill-active' : a.status === 'draft' ? 'pill-draft' : 'pill-closed';
    const deadlineStr = isPast ? 'Closed' : new Date(a.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const deadlineColor = isPast ? 'color:var(--color-crimson)' : '';
    return `
      <div class="asgn-card" style="animation-delay:${i * 0.05}s;" onclick="openAssignmentDetail('${a.id}')">
        <div class="asgn-card-top">
          <div class="asgn-icon" style="${iconBg}">
            <i data-lucide="file-code-2" style="color:${iconColor};width:1.25rem;height:1.25rem;"></i>
          </div>
          <span class="status-pill ${pillClass}">${a.status}</span>
        </div>
        <h3 class="asgn-title">${a.title}</h3>
        <p class="asgn-desc">${a.description}</p>
        <!-- FIX #4: lang tags were missing backticks in original map() -->
        <div class="lang-tags">${a.languages.map(l => `<span class="lang-tag">${l}</span>`).join('')}</div>
        <div class="asgn-footer">
          <span><i data-lucide="users"></i>${a.totalSubmissions}</span>
          <span style="${a.flaggedSubmissions > 0 ? 'color:var(--color-crimson)' : ''}">
            <i data-lucide="shield"></i>${a.flaggedSubmissions} flagged
          </span>
          <span style="${deadlineColor}"><i data-lucide="clock"></i>${deadlineStr}</span>
        </div>
      </div>
    `;
  }).join('');
  lucide.createIcons();
}

// ── Assignment Detail Page ────────────────────────────────────────────────

function openAssignmentDetail(assignmentId) {
  const a = mockAssignments.find(x => x.id === assignmentId);
  if (!a) return;

  const isPast = new Date(a.deadline) < new Date();
  const deadlineStr = isPast ? 'Closed' : new Date(a.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  const pillClass = a.status === 'active' ? 'pill-active' : a.status === 'draft' ? 'pill-draft' : 'pill-closed';

  document.getElementById('detail-info').innerHTML = `
    <p class="detail-desc">${a.description}</p>
    <div class="detail-meta-row">
      <span><i data-lucide="clock"></i>${a.timeLimitMinutes || 45} min</span>
      <span><i data-lucide="clipboard-list"></i>${a.totalSubmissions} submissions</span>
      <span style="${a.flaggedSubmissions > 0 ? 'color:var(--color-crimson)' : ''}">
        <i data-lucide="shield"></i>${a.flaggedSubmissions} flagged
      </span>
      <span class="status-pill ${pillClass}">${a.status}</span>
    </div>
    <!-- FIX #5: lang tags were missing backticks in original map() -->
    <div class="detail-lang-tags">
      ${a.languages.map(l => `<span class="detail-lang-tag">${l}</span>`).join('')}
    </div>
  `;

  const subs = mockSubmissions.filter(s => s.assignmentId === assignmentId);

  if (subs.length === 0) {
    document.getElementById('detail-sub-table').innerHTML = `
      <tr><td colspan="7" style="text-align:center;padding:3rem;color:var(--color-mist);">No submissions yet</td></tr>
    `;
  } else {
    document.getElementById('detail-sub-table').innerHTML = subs.map(sub => {
      const dateStr = new Date(sub.submittedAt || Date.now()).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
      const plagColor = sub.plagiarismScore >= 50 ? 'var(--color-crimson)' : sub.plagiarismScore >= 25 ? 'var(--color-amber)' : 'var(--color-emerald)';
      return `
        <tr style="cursor:pointer;" onclick="openReview('${sub.id}')">
          <td>
            <div style="display:flex;align-items:center;gap:0.625rem;">
              <div style="width:1.75rem;height:1.75rem;border-radius:0.375rem;background:var(--color-teal-glow);display:flex;align-items:center;justify-content:center;">
                <span style="font-size:0.75rem;font-weight:600;color:var(--color-teal);">${sub.studentName.charAt(0)}</span>
              </div>
              <span style="font-size:0.875rem;font-weight:500;color:var(--color-frost);">${sub.studentName}</span>
            </div>
          </td>
          <td><span style="font-size:0.75rem;font-family:'Geist Mono',monospace;color:var(--color-mist-light);">${sub.language}</span></td>
          <td>${statusBadgeHTML(sub.status)}</td>
          <td><span style="font-size:0.875rem;font-family:'Geist Mono',monospace;${scoreClass(sub.score)}">${sub.score}%</span></td>
          <td>
            <div class="risk-bar-wrap">
              <div class="risk-bar-bg"><div class="risk-bar-fill" style="width:${sub.plagiarismScore}%;background:${plagColor};"></div></div>
              <span class="risk-num">${sub.plagiarismScore}%</span>
            </div>
          </td>
          <td><span style="font-size:0.75rem;font-family:'Geist Mono',monospace;color:var(--color-mist);">${sub.timeSpentMinutes}m</span></td>
          <td><span style="font-size:0.75rem;color:var(--color-mist);">${dateStr}</span></td>
        </tr>
      `;
    }).join('');
  }

  showPage('asgn-detail');
  document.getElementById('header-title').textContent = a.title;
  // FIX #6: was missing backticks on textContent assignment
  document.getElementById('header-subtitle').textContent = `${a.totalSubmissions} submissions`;
  lucide.createIcons();
}

// ── Submission Review Page ────────────────────────────────────────────────

const sampleCode = {
  python: `def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1`,
  javascript: `function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}`,
  java: `public static int binarySearch(int[] arr, int target) {
    int left = 0, right = arr.length - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}`,
};

const flagIcons = {
  tab_switch:     '🔀',
  copy_paste:     '📋',
  typing_anomaly: '⌨️',
  rapid_paste:    '⚡',
  right_click:    '🖱️',
  idle_period:    '💤',
};

const mockDetailedFlags = [
  { type: 'tab_switch',     severity: 'high',     description: 'Student switched tabs 4 times during the session.',           timestamp: '2026-04-01T14:12:00Z' },
  { type: 'copy_paste',     severity: 'critical',  description: 'Large code block (120+ chars) was pasted in under 0.5s.',     timestamp: '2026-04-01T14:18:00Z' },
  { type: 'typing_anomaly', severity: 'medium',    description: 'Typing speed jumped to 850 WPM briefly — automated input suspected.', timestamp: '2026-04-01T14:20:00Z' },
];

function openReview(submissionId) {
  const sub = mockSubmissions.find(s => s.id === submissionId);
  if (!sub) return;

  // Code panel
  const code = sampleCode[sub.language] || sampleCode.python;
  document.getElementById('review-lang-tag').textContent = sub.language;
  document.getElementById('review-code-pre').textContent = code;

  const lines = code.split('\n');
  // FIX #7: line number spans were missing backticks
  document.getElementById('review-line-nums').innerHTML = lines.map((_, i) =>
    `<span>${i + 1}</span>`
  ).join('');

  // Score section
  const scoreColor = sub.score >= 80 ? 'var(--color-emerald)' : sub.score >= 50 ? 'var(--color-amber)' : 'var(--color-crimson)';
  // FIX #8: badge class was missing backticks
  const badgeCls = `badge-${sub.status}`;
  const dateStr = new Date(sub.submittedAt || Date.now()).toLocaleString('en-US', { month:'short', day:'numeric', hour:'2-digit', minute:'2-digit' });
  document.getElementById('review-score-section').innerHTML = `
    <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1rem;">
      <div class="review-score-num" style="color:${scoreColor};">${sub.score}%</div>
      <span class="status-badge ${badgeCls}">${sub.status.toUpperCase()}</span>
    </div>
    <div class="review-meta-row"><span class="review-meta-key">Time Spent</span><span class="review-meta-value">${sub.timeSpentMinutes}m</span></div>
    <div class="review-meta-row"><span class="review-meta-key">Language</span><span class="review-meta-value">${sub.language}</span></div>
    <div class="review-meta-row"><span class="review-meta-key">Submitted</span><span class="review-meta-value">${dateStr}</span></div>
  `;

  // Test results (mock 4 tests)
  const testData = [
    { passed: true, ms: 12 }, { passed: true, ms: 8 },
    { passed: sub.score >= 80, ms: 15 }, { passed: sub.score >= 90, ms: 10 }
  ];
  document.getElementById('review-test-results').innerHTML = testData.map((t, i) => `
    <div class="review-test-row ${t.passed ? 'pass' : 'fail'}">
      <div class="review-test-label">
        <i data-lucide="${t.passed ? 'check-circle' : 'x-circle'}" style="color:${t.passed ? 'var(--color-emerald)' : 'var(--color-crimson)'}"></i>
        <span style="font-size:0.8125rem;font-weight:500;color:${t.passed ? 'var(--color-emerald)' : 'var(--color-crimson)'}">Test #${i+1}</span>
      </div>
      <span class="review-test-time">${t.ms}ms</span>
    </div>
  `).join('');

  // Plagiarism bar
  const ps = sub.plagiarismScore;
  const pColor = ps >= 50 ? 'var(--color-crimson)' : ps >= 25 ? 'var(--color-amber)' : 'var(--color-emerald)';
  const shieldIcon = document.getElementById('review-shield-icon');
  if (shieldIcon) shieldIcon.style.color = pColor;
  document.getElementById('review-integrity').innerHTML = `
    <div class="review-plag-bar-bg">
      <div class="review-plag-bar-fill" style="width:${ps}%;background:${pColor};"></div>
    </div>
    <div class="review-plag-score" style="color:${pColor};">${ps}% risk</div>
  `;

  // Behavior flags
  const hasFlags = sub.behaviorFlags && sub.behaviorFlags.length > 0;
  const flagCard = document.getElementById('review-flags-card');
  flagCard.style.display = hasFlags ? 'block' : 'none';
  if (hasFlags) {
    document.getElementById('review-flag-count').textContent = sub.behaviorFlags.length;
    document.getElementById('review-flags-list').innerHTML = mockDetailedFlags.slice(0, sub.behaviorFlags.length).map(f => {
      const sevColor = f.severity === 'critical' || f.severity === 'high'
        ? 'background:var(--color-crimson-glow);color:var(--color-crimson)'
        : f.severity === 'medium'
        ? 'background:var(--color-amber-glow);color:var(--color-amber)'
        : 'background:var(--color-layer);color:var(--color-mist)';
      return `
        <div class="flag-item">
          <div class="flag-item-header">
            <span class="flag-item-title">${flagIcons[f.type]} ${flagTypeLabels[f.type]}</span>
            <span class="flag-item-sev" style="${sevColor}">${f.severity}</span>
          </div>
          <p class="flag-item-desc">${f.description}</p>
          <p class="flag-item-time">🕐 ${new Date(f.timestamp).toLocaleTimeString('en-US', { hour:'2-digit', minute:'2-digit', second:'2-digit' })}</p>
        </div>
      `;
    }).join('');
  }

  showPage('sub-review');
  // FIX #9: header text assignments were missing backticks
  document.getElementById('header-title').textContent = `Review: ${sub.studentName}`;
  document.getElementById('header-subtitle').textContent = `Submission ${sub.id} – ${sub.language}`;
  lucide.createIcons();
}

// ── Render: Plagiarism Logs Page ──────────────────────────────────────────

let plagFilter = 'all';

function renderPlagPage() {
  const counts = {
    total:    mockPlagiarismLogs.length,
    critical: mockPlagiarismLogs.filter(l => l.overallRisk === 'critical').length,
    high:     mockPlagiarismLogs.filter(l => l.overallRisk === 'high').length,
    low:      mockPlagiarismLogs.filter(l => l.overallRisk === 'low').length,
  };

  const summaryCards = [
    { label: 'Total Flagged', value: counts.total,    icon: 'shield',         bg: 'background:var(--color-crimson-glow)', color: 'color:var(--color-crimson)' },
    { label: 'Critical',      value: counts.critical, icon: 'alert-triangle', bg: 'background:var(--color-crimson-glow)', color: 'color:var(--color-crimson)' },
    { label: 'High Risk',     value: counts.high,     icon: 'alert-triangle', bg: 'background:var(--color-amber-glow)',   color: 'color:var(--color-amber)' },
    { label: 'Low Risk',      value: counts.low,      icon: 'eye',            bg: 'background:var(--color-layer)',        color: 'color:var(--color-mist)' },
  ];

  document.getElementById('plag-summary').innerHTML = summaryCards.map(c => `
    <div class="plag-summary-card">
      <div class="plag-summary-icon" style="${c.bg}">
        <i data-lucide="${c.icon}" style="${c.color};width:1.125rem;height:1.125rem;"></i>
      </div>
      <p class="plag-summary-num">${c.value}</p>
      <p class="plag-summary-label">${c.label}</p>
    </div>
  `).join('');

  // FIX #10: filter icon HTML and filter buttons were missing backticks
  const filterEl = document.getElementById('plag-filters');
  filterEl.innerHTML = `<i data-lucide="filter" class="filter-icon"></i>` +
    ['all','critical','high','medium','low'].map(f => `
      <button class="filter-btn ${plagFilter === f ? 'active' : ''}" onclick="setPlagFilter('${f}')">
        ${f === 'all' ? 'All' : f.charAt(0).toUpperCase() + f.slice(1)}
      </button>
    `).join('');

  const filtered = plagFilter === 'all' ? mockPlagiarismLogs : mockPlagiarismLogs.filter(l => l.overallRisk === plagFilter);
  document.getElementById('plag-table-body').innerHTML = filtered.map(log => {
    const uniqueTypes = [...new Set(log.flags.map(f => f.type))];
    const dateStr = new Date(log.detectedAt).toLocaleDateString('en-US', { month:'short', day:'numeric', hour:'2-digit', minute:'2-digit' });
    return `
      <tr>
        <td>
          <div style="display:flex;align-items:center;gap:0.625rem;">
            <div style="width:1.75rem;height:1.75rem;border-radius:0.375rem;background:var(--color-crimson-glow);display:flex;align-items:center;justify-content:center;">
              <span style="font-size:0.75rem;font-weight:600;color:var(--color-crimson);">${log.studentName.charAt(0)}</span>
            </div>
            <span style="font-size:0.875rem;font-weight:500;color:var(--color-frost);">${log.studentName}</span>
          </div>
        </td>
        <td><span style="font-size:0.875rem;color:var(--color-mist-light);max-width:180px;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${log.assignmentTitle}</span></td>
        <td>${riskBadgeHTML(log.overallRisk)}</td>
        <td><span style="font-size:0.875rem;font-family:'Geist Mono',monospace;color:var(--color-frost);">${log.flags.length}</span></td>
        <!-- FIX #11: flag type tags were missing backticks in original map() -->
        <td><div style="display:flex;flex-wrap:wrap;gap:0.25rem;">${uniqueTypes.map(t => `<span class="flag-type-tag">${flagTypeLabels[t] || t}</span>`).join('')}</div></td>
        <td><span style="font-size:0.75rem;color:var(--color-mist);display:flex;align-items:center;gap:0.25rem;"><i data-lucide="clock" style="width:0.75rem;height:0.75rem;"></i>${dateStr}</span></td>
        <td>
          <button class="icon-btn" onclick="openReview('${log.submissionId}')">
            <i data-lucide="eye"></i> Review
          </button>
        </td>
      </tr>
    `;
  }).join('');

  lucide.createIcons();
}

function setPlagFilter(f) {
  plagFilter = f;
  renderPlagPage();
}

// ── Render: Submissions Page ──────────────────────────────────────────────

let subFilter = 'all';

function renderSubmissionsPage() {
  // FIX #12: filter buttons were missing backticks
  const filterEl = document.getElementById('sub-filters');
  filterEl.innerHTML = `<i data-lucide="filter" class="filter-icon"></i>` +
    ['all','passed','failed','flagged','pending'].map(f => `
      <button class="filter-btn ${subFilter === f ? 'active' : ''}" onclick="setSubFilter('${f}')">
        ${f === 'all' ? 'All' : f.charAt(0).toUpperCase() + f.slice(1)}
      </button>
    `).join('');

  const filtered = subFilter === 'all' ? mockSubmissions : mockSubmissions.filter(s => s.status === subFilter);

  document.getElementById('sub-table-body').innerHTML = filtered.map(sub => {
    const plagColor = sub.plagiarismScore >= 50 ? 'var(--color-crimson)' : sub.plagiarismScore >= 25 ? 'var(--color-amber)' : 'var(--color-emerald)';
    return `
      <tr style="cursor:pointer;" onclick="openReview('${sub.id}')">
        <td><span style="font-size:0.875rem;font-weight:500;color:var(--color-frost);">${sub.studentName}</span></td>
        <td><span style="font-size:0.875rem;color:var(--color-mist-light);max-width:160px;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${assignmentTitle(sub.assignmentId)}</span></td>
        <td><span style="font-size:0.75rem;font-family:'Geist Mono',monospace;color:var(--color-mist-light);">${sub.language}</span></td>
        <td>${statusBadgeHTML(sub.status)}</td>
        <td><span style="font-size:0.875rem;font-family:'Geist Mono',monospace;${scoreClass(sub.score)}">${sub.score}%</span></td>
        <td>
          <div class="risk-bar-wrap">
            <div class="risk-bar-bg"><div class="risk-bar-fill" style="width:${sub.plagiarismScore}%;background:${plagColor};"></div></div>
            <span class="risk-num">${sub.plagiarismScore}%</span>
          </div>
        </td>
        <td><span style="font-size:0.75rem;color:var(--color-mist);display:flex;align-items:center;gap:0.25rem;"><i data-lucide="clock" style="width:0.75rem;height:0.75rem;"></i>${sub.timeSpentMinutes}m</span></td>
        <td><i data-lucide="eye" style="width:0.875rem;height:0.875rem;color:var(--color-teal);"></i></td>
      </tr>
    `;
  }).join('');

  lucide.createIcons();
}

function setSubFilter(f) {
  subFilter = f;
  renderSubmissionsPage();
}

// ── Create Assignment ─────────────────────────────────────────────────────

let createStep = 1;
let createTestCases = [{ id: 1, input: '', output: '', hidden: false }];
let createSelectedLangs = ['python', 'javascript'];

const allLanguages = ['Python','JavaScript','TypeScript','Java','C++','C'];

function initCreatePage() {
  // Build step indicator
  const steps = ['Details', 'Languages & Limits', 'Test Cases'];
  document.getElementById('create-steps').innerHTML = steps.map((s, i) => {
    const cls = i + 1 === createStep ? 'current' : i + 1 < createStep ? 'done' : 'future';
    return `
      ${i > 0 ? '<div class="step-divider"></div>' : ''}
      <button class="create-step-btn ${cls}" onclick="createGoStep(${i+1})">
        <span class="step-num">${i+1}</span> ${s}
      </button>
    `;
  }).join('');

  // Build lang toggles (step 2)
  // FIX #13: lang toggle button was missing backticks
  document.getElementById('lang-toggles').innerHTML = allLanguages.map(l => {
    const key = l.toLowerCase().replace('+','').replace('+','').replace(' ', '');
    const active = createSelectedLangs.includes(key) || createSelectedLangs.includes(l.toLowerCase());
    return `<button class="lang-toggle ${active ? 'active' : ''}" onclick="toggleCreateLang(this, '${l}')">${l}</button>`;
  }).join('');

  // Build test case list (step 3)
  renderTestCases();

  lucide.createIcons();
}

function createGoStep(step) {
  createStep = step;
  [1, 2, 3].forEach(n => {
    // FIX #14: getElementById was missing backticks — evaluated as subtraction, always returned null
    const el = document.getElementById(`create-step-${n}`);
    el.classList.toggle('hidden', n !== step);
  });
  initCreatePage(); // re-render steps indicator
}

function toggleCreateLang(btn, lang) {
  btn.classList.toggle('active');
}

function addTestCase() {
  createTestCases.push({ id: Date.now(), input: '', output: '', hidden: false });
  renderTestCases();
}

function removeTestCase(id) {
  if (createTestCases.length <= 1) return;
  createTestCases = createTestCases.filter(tc => tc.id !== id);
  renderTestCases();
}

function toggleTcHidden(id) {
  const tc = createTestCases.find(t => t.id === id);
  if (tc) tc.hidden = !tc.hidden;
  renderTestCases();
}

function renderTestCases() {
  document.getElementById('test-cases-list').innerHTML = createTestCases.map((tc, idx) => `
    <div class="tc-card">
      <div class="tc-card-header">
        <span class="tc-card-title">Test #${idx + 1}</span>
        <div class="tc-card-actions">
          <button class="tc-vis-btn ${tc.hidden ? 'hidden-tc' : 'visible'}" onclick="toggleTcHidden(${tc.id})">
            <i data-lucide="${tc.hidden ? 'eye-off' : 'eye'}" style="width:0.75rem;height:0.75rem;"></i>
            ${tc.hidden ? 'Hidden' : 'Visible'}
          </button>
          ${createTestCases.length > 1 ? `
            <button class="tc-remove-btn" onclick="removeTestCase(${tc.id})">
              <i data-lucide="trash-2"></i>
            </button>
          ` : ''}
        </div>
      </div>
      <div class="tc-grid">
        <div>
          <p class="tc-input-label">Input</p>
          <textarea class="tc-textarea" rows="3" placeholder="[1, 3, 5, 7, 9], 5">${tc.input}</textarea>
        </div>
        <div>
          <p class="tc-input-label">Expected Output</p>
          <textarea class="tc-textarea" rows="3" placeholder="2">${tc.output}</textarea>
        </div>
      </div>
    </div>
  `).join('');
  lucide.createIcons();
}

function saveAssignment(status) {
  const title = document.getElementById('create-title').value || 'Untitled Assignment';
  // FIX #15: alert string was missing backticks
  alert(`Assignment "${title}" saved as ${status}!\n\nIn a real app this would call the backend API.`);
  showPage('assignments');
  // Reset form state
  createStep = 1;
  createTestCases = [{ id: 1, input: '', output: '', hidden: false }];
}

// ── Page Navigation ───────────────────────────────────────────────────────

const pageMeta = {
  dashboard:    ['Dashboard',       'Overview of your assignments and submissions'],
  assignments:  ['Assignments',     'Manage your coding challenges'],
  create:       ['Create New',      'Create a new assignment'],
  plagiarism:   ['Plagiarism Logs', 'Academic integrity monitoring'],
  submissions:  ['All Submissions', 'Review student submissions across assignments'],
  'asgn-detail': ['Assignment',    'Submission details'],
  'sub-review': ['Submission Review', ''],
};

function showPage(pageId) {
  document.querySelectorAll('.content').forEach(el => el.classList.add('hidden'));
  // FIX #16 (CRITICAL): getElementById was missing backticks — `page-${pageId}` without
  // backticks evaluates as arithmetic (page minus pageId) = NaN, so getElementById always
  // returned null and NO pages ever rendered
  const target = document.getElementById(`page-${pageId}`);
  if (target) target.classList.remove('hidden');

  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.toggle('active', el.getAttribute('data-page') === pageId);
  });

  const [title, subtitle] = pageMeta[pageId] || ['Verdikt', ''];
  document.getElementById('header-title').textContent = title;
  document.getElementById('header-subtitle').textContent = subtitle;

  // Lazy renders
  if (pageId === 'assignments') renderAssignmentsPage();
  if (pageId === 'plagiarism')  renderPlagPage();
  if (pageId === 'submissions') renderSubmissionsPage();
  if (pageId === 'create') {
    createStep = 1;
    // FIX #17: getElementById calls were missing backticks
    [1,2,3].forEach(n => document.getElementById(`create-step-${n}`).classList.toggle('hidden', n !== 1));
    initCreatePage();
  }
}

// ── Sidebar Collapse ──────────────────────────────────────────────────────

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
  });
}

// ── Wire Nav ──────────────────────────────────────────────────────────────

function initNav() {
  document.querySelectorAll('[data-page]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      showPage(el.getAttribute('data-page'));
    });
  });
}

// ── Boot ──────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();

  renderTrendChart();
  renderLangChart();
  renderRecentAssignmentsDash();
  renderPlagiarismAlertsDash();

  initSidebar();
  initNav();

  showPage('dashboard');
  lucide.createIcons();
});