window.TRAINR_SAMPLE_WEEK = [
  { id:'SESSION-LOWER-01', date:'2026-07-14', type:'STRENGTH', classification:'FULL_SESSION', title:'Lower Body Strength', durationMinutes:55, status:'AVAILABLE', objective:'Build lower-body force while remaining fresh for Saturday.' },
  { id:'REST-01', date:'2026-07-15', type:'REST', title:'Rest day', status:'AVAILABLE' },
  { id:'TEAM-01', date:'2026-07-16', type:'TEAM_TRAINING', title:'Court Training', startTime:'19:00', status:'AVAILABLE' },
  { id:'RECOVERY-01', date:'2026-07-17', type:'RECOVERY', title:'Freshen Up', durationMinutes:20, status:'AVAILABLE' },
  { id:'FIXTURE-01', date:'2026-07-18', type:'FIXTURE', title:'Trafford vs Leeds', startTime:'11:30', venue:'Trafford Sports Centre', status:'AVAILABLE' },
  { id:'REST-02', date:'2026-07-19', type:'REST', title:'Rest day', status:'AVAILABLE' },
  { id:'SESSION-FULL-02', date:'2026-07-20', type:'STRENGTH', classification:'FULL_SESSION', title:'Full Body Strength', durationMinutes:55, status:'AVAILABLE', objective:'Maintain whole-body strength after the fixture.' },
  { id:'TEAM-02', date:'2026-07-21', type:'TEAM_TRAINING', title:'Court Training', startTime:'19:00', status:'AVAILABLE' },
  { id:'TEAM-03', date:'2026-07-23', type:'TEAM_TRAINING', title:'Court Training', startTime:'19:00', status:'AVAILABLE' },
  { id:'FIXTURE-02', date:'2026-07-25', type:'FIXTURE', title:'Oldham vs Trafford', startTime:'14:00', status:'AVAILABLE' },
  { id:'RECOVERY-02', date:'2026-07-26', type:'RECOVERY', title:'Recovery', durationMinutes:20, status:'AVAILABLE' },
  { id:'FIXTURE-03', date:'2026-08-01', type:'FIXTURE', title:'Trafford vs Stockport', startTime:'12:15', status:'AVAILABLE' }
];

window.TRAINR_WORKOUT_STRUCTURE = [
  { id:'warmup', title:'Warm-up', kind:'SEQUENCE' },
  { id:'power', title:'Power', kind:'STRAIGHT_SET' },
  { id:'strength', title:'Primary strength', kind:'STRAIGHT_SET' },
  { id:'superset-a', title:'Superset A', kind:'SUPERSET' },
  { id:'conditioning', title:'Conditioning', kind:'E2MOM' },
  { id:'cooldown', title:'Cooldown', kind:'SEQUENCE' }
];
