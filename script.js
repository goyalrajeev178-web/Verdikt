const mockAssignments = [
  { id: 'asgn-001', title: 'Binary Search Implementation', description: 'Implement a binary search algorithm that returns the index of a target element in a sorted array. Return -1 if not found. O(log n) required.', languages: ['python','javascript','java','cpp'], deadline: '2026-04-10T23:59:00Z', status: 'active',  totalSubmissions: 27, flaggedSubmissions: 3 },
  { id: 'asgn-002', title: 'Linked List Reversal',         description: 'Write a function to reverse a singly linked list in-place with O(1) extra memory.', languages: ['python','javascript','typescript','java','cpp','c'], deadline: '2026-04-12T23:59:00Z', status: 'active', totalSubmissions: 18, flaggedSubmissions: 1 },
  { id: 'asgn-003', title: 'FizzBuzz with Twist',          description: 'Implement FizzBuzz from 1 to N, but replace multiples of 7 with "Buzz" and multiples of both 3 and 7 with "FizzBuzz".', languages: ['python','javascript','c'], deadline: '2026-04-05T23:59:00Z', status: 'active', totalSubmissions: 42, flaggedSubmissions: 5 },
  { id: 'asgn-004', title: 'Stack Using Queues',           description: 'Implement a stack using only two queues. Support push, pop, top, and isEmpty operations.', languages: ['python','java','cpp'], deadline: '2026-04-15T23:59:00Z', status: 'draft', totalSubmissions: 0, flaggedSubmissions: 0 },
  { id: 'asgn-005', title: 'Matrix Spiral Traversal',      description: 'Given an M x N matrix, return all elements in spiral order starting from the top-left corner.', languages: ['python','javascript','typescript','java'], deadline: '2026-03-28T23:59:00Z', status: 'closed', totalSubmissions: 35, flaggedSubmissions: 4 },
];

const mockSubmissions = [
  { id: 'sub-001', assignmentId: 'asgn-001', studentName: 'Vinay garg',      language: 'python',     status: 'passed',  score: 95,  plagiarismScore: 8,  timeSpentMinutes: 22, behaviorFlags: [] },
  { id: 'sub-002', assignmentId: 'asgn-001', studentName: 'Rajeev k goyal',       language: 'javascript', status: 'passed',  score: 100, plagiarismScore: 5,  timeSpentMinutes: 18, behaviorFlags: [] },
  { id: 'sub-003', assignmentId: 'asgn-001', studentName: 'Yash k gupta',    language: 'python',     status: 'flagged', score: 90,  plagiarismScore: 72, timeSpentMinutes: 8,  behaviorFlags: ['f1','f2','f3','f4'] },
  { id: 'sub-004', assignmentId: 'asgn-001', studentName: 'Dogesh',       language: 'java',       status: 'passed',  score: 100, plagiarismScore: 12, timeSpentMinutes: 35, behaviorFlags: ['f5'] },
  { id: 'sub-005', assignmentId: 'asgn-001', studentName: 'Yash k sahu',   language: 'cpp',        status: 'flagged', score: 85,  plagiarismScore: 65, timeSpentMinutes: 12, behaviorFlags: ['f1','f2','f3'] },
  { id: 'sub-006', assignmentId: 'asgn-002', studentName: 'Tanmay',      language: 'python',     status: 'passed',  score: 100, plagiarismScore: 3,  timeSpentMinutes: 15, behaviorFlags: [] },
  { id: 'sub-007', assignmentId: 'asgn-003', studentName: 'vibha',     language: 'python',     status: 'passed',  score: 100, plagiarismScore: 2,  timeSpentMinutes: 10, behaviorFlags: [] },
  { id: 'sub-008', assignmentId: 'asgn-003', studentName: 'sapna',       language: 'javascript', status: 'flagged', score: 75,  plagiarismScore: 58, timeSpentMinutes: 6,  behaviorFlags: ['f1','f2'] },
  { id: 'sub-009', assignmentId: 'asgn-001', studentName: 'Vikas',       language: 'python',     status: 'failed',  score: 25,  plagiarismScore: 15, timeSpentMinutes: 40, behaviorFlags: ['f6'] },
  { id: 'sub-010', assignmentId: 'asgn-002', studentName: 'Utkarsh',  language: 'javascript', status: 'pending', score: 0,   plagiarismScore: 0,  timeSpentMinutes: 25, behaviorFlags: [] },
];

const mockPlagiarismLogs = [
  {
    id: 'plog-001',
    submissionId: 'sub-003',
    studentName: 'Yash k gupta',
    assignmentTitle: 'Assignment 1',
    flags: [
      { type: 'tab_switch' },
      { type: 'copy_paste' },
      { type: 'typing_anomaly' },
      { type: 'rapid_paste' }
    ],
    overallRisk: 'critical',
    detectedAt: '2026-04-01T16:50:00Z'
  },
  {
    id: 'plog-002',
    submissionId: 'sub-005',
    studentName: 'Yash k sahu',
    assignmentTitle: 'Assignment 1',
    flags: [
      { type: 'tab_switch' },
      { type: 'copy_paste' },
      { type: 'typing_anomaly' }
    ],
    overallRisk: 'high',
    detectedAt: '2026-04-01T18:10:00Z'
  },
  {
    id: 'plog-003',
    submissionId: 'sub-008',
    studentName: 'sapna',
    assignmentTitle: 'Assignment 3',
    flags: [
      { type: 'tab_switch' },
      { type: 'copy_paste' }
    ],
    overallRisk: 'high',
    detectedAt: '2026-04-01T13:35:00Z'
  },
  {
    id: 'plog-004',
    submissionId: 'sub-004',
    studentName: 'Dogesh',
    assignmentTitle: 'Assignment 1',
    flags: [
      { type: 'right_click' }
    ],
    overallRisk: 'low',
    detectedAt: '2026-04-01T17:25:00Z'
  }
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

function riskBadgeHTML(risk) {
  return <span class="status-badge badge-${risk}">${risk}</span>;
}

// â”€â”€ Render: Submission Trend Chart â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

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

// ───────── Render: Language Chart ─────────

function renderLangChart() {
  const max = Math.max(...languageDistribution.map(d => d.count));

  document.getElementById('lang-chart').innerHTML =
    languageDistribution.map(d => `
      <div class="lang-row">
        <span class="lang-name">${d.language}</span>
        <div class="lang-bar-bg">
          <div class="lang-bar-fill"
               style="width:${(d.count / max) * 100}%; background:${d.color};">
          </div>
        </div>
        <span class="lang-count">${d.count}</span>
      </div>
    `).join('');
}


// ───────── Render: Recent Assignments (Dashboard) ─────────

function renderRecentAssignmentsDash() {
  const el = document.getElementById('recent-assignments-list');

  el.innerHTML = mockAssignments.slice(0, 4).map(a => {
    const dotClass =
      a.status === 'active' ? 'dot-active' :
      a.status === 'draft' ? 'dot-draft' : 'dot-closed';

    const pillClass =
      a.status === 'active' ? 'pill-active' :
      a.status === 'draft' ? 'pill-draft' : 'pill-closed';

    return `
      <div class="list-row">
        <div class="list-row-left">
          <div class="status-dot ${dotClass}"></div>
          <div>
            <p class="row-title">${a.title}</p>
            <p class="row-meta">
              ${a.languages.join(', ')} — ${a.totalSubmissions} submissions
            </p>
          </div>
        </div>
        <span class="status-pill ${pillClass}">${a.status}</span>
      </div>
    `;
  }).join('');
}


// ───────── Render: Plagiarism Alerts (Dashboard) ─────────

function renderPlagiarismAlertsDash() {
  const el = document.getElementById('plagiarism-alerts-list');

  el.innerHTML = mockPlagiarismLogs.slice(0, 4).map(log => {
    const iconClass =
      log.overallRisk === 'critical' ? 'risk-critical' :
      log.overallRisk === 'high' ? 'risk-high' :
      log.overallRisk === 'medium' ? 'risk-medium' :
      'risk-low';

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
          <span class="status-badge ${badgeClass}">
            ${log.overallRisk}
          </span>
          <p class="plag-flag-count">
            ${log.flags.length} flags detected
          </p>
        </div>
      </div>
    `;
  }).join('');

  document.getElementById('alert-count').textContent =
    `${mockPlagiarismLogs.length} flagged`;

  lucide.createIcons();
}


// ───────── Render: Assignments Page ─────────

function renderAssignmentsPage() {
  const el = document.getElementById('assignments-grid');

  el.innerHTML = mockAssignments.map((a, i) => {
    const isPast = new Date(a.deadline) < new Date();

    const iconBg =
      a.status === 'active' ? 'background:var(--color-teal-glow)' :
      a.status === 'draft' ? 'background:var(--color-amber-glow)' :
      'background:var(--color-layer)';

    const iconColor =
      a.status === 'active' ? 'var(--color-teal)' :
      a.status === 'draft' ? 'var(--color-amber)' :
      'var(--color-mist)';

    const pillClass =
      a.status === 'active' ? 'pill-active' :
      a.status === 'draft' ? 'pill-draft' : 'pill-closed';

    const deadlineStr = isPast
      ? 'Closed'
      : new Date(a.deadline).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric'
        });

    const deadlineColor = isPast ? 'color:var(--color-crimson)' : '';

    return `
      <div class="asgn-card"
           style="animation-delay:${i * 0.05}s;"
           onclick="openAssignmentDetail('${a.id}')">

        <div class="asgn-card-top">
          <div class="asgn-icon" style="${iconBg}">
            <i data-lucide="file-code-2"
               style="color:${iconColor}; width:1.25rem; height:1.25rem;">
            </i>
          </div>
          <span class="status-pill ${pillClass}">${a.status}</span>
        </div>

        <h3 class="asgn-title">${a.title}</h3>
        <p class="asgn-desc">${a.description}</p>

        <div class="lang-tags">
          ${a.languages.map(l => `<span class="lang-tag">${l}</span>`).join('')}
        </div>

        <div class="asgn-footer">
          <span><i data-lucide="users"></i> ${a.totalSubmissions}</span>

          <span style="${a.flaggedSubmissions > 0 ? 'color:var(--color-crimson)' : ''}">
            <i data-lucide="shield"></i> ${a.flaggedSubmissions} flagged
          </span>

          <span style="${deadlineColor}">
            <i data-lucide="clock"></i> ${deadlineStr}
          </span>
        </div>

      </div>
    `;
  }).join('');

  lucide.createIcons();
}
