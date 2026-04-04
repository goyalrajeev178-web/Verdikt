const mockAssignments = [
  { id: 'asgn-001', title: 'Binary Search Implementation', description: 'Implement a binary search algorithm that returns the index of a target element in a sorted array. Return -1 if not found. O(log n) required.', languages: ['python','javascript','java','cpp'], deadline: '2026-04-10T23:59:00Z', status: 'active',  totalSubmissions: 27, flaggedSubmissions: 3 },
  { id: 'asgn-002', title: 'Linked List Reversal',         description: 'Write a function to reverse a singly linked list in-place with O(1) extra memory.', languages: ['python','javascript','typescript','java','cpp','c'], deadline: '2026-04-12T23:59:00Z', status: 'active', totalSubmissions: 18, flaggedSubmissions: 1 },
  { id: 'asgn-003', title: 'FizzBuzz with Twist',          description: 'Implement FizzBuzz from 1 to N, but replace multiples of 7 with "Buzz" and multiples of both 3 and 7 with "FizzBuzz".', languages: ['python','javascript','c'], deadline: '2026-04-05T23:59:00Z', status: 'active', totalSubmissions: 42, flaggedSubmissions: 5 },
  { id: 'asgn-004', title: 'Stack Using Queues',           description: 'Implement a stack using only two queues. Support push, pop, top, and isEmpty operations.', languages: ['python','java','cpp'], deadline: '2026-04-15T23:59:00Z', status: 'draft', totalSubmissions: 0, flaggedSubmissions: 0 },
  { id: 'asgn-005', title: 'Matrix Spiral Traversal',      description: 'Given an M x N matrix, return all elements in spiral order starting from the top-left corner.', languages: ['python','javascript','typescript','java'], deadline: '2026-03-28T23:59:00Z', status: 'closed', totalSubmissions: 35, flaggedSubmissions: 4 },
];

const mockSubmissions = [
  { id: 'sub-001', assignmentId: 'asgn-001', studentName: 'Alex Rivera',      language: 'python',     status: 'passed',  score: 95,  plagiarismScore: 8,  timeSpentMinutes: 22, behaviorFlags: [] },
  { id: 'sub-002', assignmentId: 'asgn-001', studentName: 'Maya Patel',       language: 'javascript', status: 'passed',  score: 100, plagiarismScore: 5,  timeSpentMinutes: 18, behaviorFlags: [] },
  { id: 'sub-003', assignmentId: 'asgn-001', studentName: 'James Okonkwo',    language: 'python',     status: 'flagged', score: 90,  plagiarismScore: 72, timeSpentMinutes: 8,  behaviorFlags: ['f1','f2','f3','f4'] },
  { id: 'sub-004', assignmentId: 'asgn-001', studentName: 'Lina Zhang',       language: 'java',       status: 'passed',  score: 100, plagiarismScore: 12, timeSpentMinutes: 35, behaviorFlags: ['f5'] },
  { id: 'sub-005', assignmentId: 'asgn-001', studentName: 'Ethan Kowalski',   language: 'cpp',        status: 'flagged', score: 85,  plagiarismScore: 65, timeSpentMinutes: 12, behaviorFlags: ['f1','f2','f3'] },
  { id: 'sub-006', assignmentId: 'asgn-002', studentName: 'Alex Rivera',      language: 'python',     status: 'passed',  score: 100, plagiarismScore: 3,  timeSpentMinutes: 15, behaviorFlags: [] },
  { id: 'sub-007', assignmentId: 'asgn-003', studentName: 'Priya Sharma',     language: 'python',     status: 'passed',  score: 100, plagiarismScore: 2,  timeSpentMinutes: 10, behaviorFlags: [] },
  { id: 'sub-008', assignmentId: 'asgn-003', studentName: 'Daniel Kim',       language: 'javascript', status: 'flagged', score: 75,  plagiarismScore: 58, timeSpentMinutes: 6,  behaviorFlags: ['f1','f2'] },
  { id: 'sub-009', assignmentId: 'asgn-001', studentName: 'Amara Osei',       language: 'python',     status: 'failed',  score: 25,  plagiarismScore: 15, timeSpentMinutes: 40, behaviorFlags: ['f6'] },
  { id: 'sub-010', assignmentId: 'asgn-002', studentName: 'Lucas Fernandez',  language: 'javascript', status: 'pending', score: 0,   plagiarismScore: 0,  timeSpentMinutes: 25, behaviorFlags: [] },
];

const mockPlagiarismLogs = [
  { id: 'plog-001', submissionId: 'sub-003', studentName: 'James Okonkwo',   assignmentTitle: 'Binary Search Implementation', flags: [ {type:'tab_switch'},{type:'copy_paste'},{type:'typing_anomaly'},{type:'rapid_paste'} ], overallRisk: 'critical', detectedAt: '2026-04-01T16:50:00Z' },
  { id: 'plog-002', submissionId: 'sub-005', studentName: 'Ethan Kowalski',  assignmentTitle: 'Binary Search Implementation', flags: [ {type:'tab_switch'},{type:'copy_paste'},{type:'typing_anomaly'} ],                  overallRisk: 'high',     detectedAt: '2026-04-01T18:10:00Z' },
  { id: 'plog-003', submissionId: 'sub-008', studentName: 'Daniel Kim',      assignmentTitle: 'FizzBuzz with Twist',          flags: [ {type:'tab_switch'},{type:'copy_paste'} ],                                          overallRisk: 'high',     detectedAt: '2026-04-01T13:35:00Z' },
  { id: 'plog-004', submissionId: 'sub-004', studentName: 'Lina Zhang',      assignmentTitle: 'Binary Search Implementation', flags: [ {type:'right_click'} ],                                                             overallRisk: 'low',      detectedAt: '2026-04-01T17:25:00Z' },
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

