const fs = require('fs');
const vm = require('vm');
const prototypePath = fs.existsSync('Trainr_Clickable_Prototype.html') ? 'Trainr_Clickable_Prototype.html' : 'index.html';
const html = fs.readFileSync(prototypePath, 'utf8');
const css = fs.readFileSync('styles/final-uat.css', 'utf8');
const data = fs.readFileSync('scripts/data.js', 'utf8');
const inline = [...html.matchAll(/<script(?:[^>]*)>([\s\S]*?)<\/script>/g)].map(match => match[1]).filter(Boolean).join('\n');

new Function(data);
new Function(inline);
const context = { window: {} };
vm.runInNewContext(data, context);
const sampleWeek = context.window.TRAINR_SAMPLE_WEEK;
const stages = context.window.TRAINR_WORKOUT_STRUCTURE;
const byDate = Object.fromEntries(sampleWeek.map(item => [item.date, item]));

const checks = {
  externalData: html.includes('scripts/data.js'),
  externalCss: html.includes('styles/final-uat.css'),
  fiveSports: html.includes("['Netball','Football','Rugby Union','Rugby League','Basketball']"),
  balancedBasketball: css.includes('grid-column:1/-1;justify-self:center;width:calc((100% - var(--sport-card-gap))/2);transform:none'),
  noBasketballTransformHack: !css.includes('translateX(50%)'),
  equalSportGeometry: css.includes('.sport-card{width:100%;height:auto;min-height:0;aspect-ratio:.92/1'),
  canonicalSchedule: inline.includes('function calendarEvent(key)') && inline.includes('renderPlanWeek()'),
  sixSections: inline.includes('workoutStructure.length'),
  warmup: inline.includes('warmupPlayer'),
  power: inline.includes('powerPlayer'),
  supersetAlternates: inline.includes("if(currentExercise===2){currentExercise=3"),
  supersetFinalRest: inline.includes("{type:'superset-finish'}"),
  e2momShowsBoth: inline.includes('conditioning.movements.map'),
  e2momRequiresBoth: inline.includes('Complete both movements or choose Skip round'),
  cooldown: inline.includes('cooldownPlayer'),
  completionAfterCooldown: inline.includes("name==='complete-cooldown-step'"),
  substitutionPreservesRound: inline.includes('preservedRound=currentSet'),
  zoomEnabled: !html.includes('maximum-scale') && !html.includes('user-scalable=no'),
  reducedMotion: css.includes('prefers-reduced-motion'),
  touchTargets: css.includes('min-height:44px')
  ,sharedScheduleDates: byDate['2026-07-14'].title === 'Lower Body Strength' && byDate['2026-07-16'].title === 'Court Training' && byDate['2026-07-17'].title === 'Freshen Up' && byDate['2026-07-18'].type === 'FIXTURE'
  ,stageOrder: stages.map(stage => stage.id).join('>') === 'warmup>power>strength>superset-a>conditioning>cooldown'
  ,dialogSemantics: inline.includes("setAttribute('role','dialog')") && inline.includes("event.key==='Escape'")
  ,selectionSemantics: inline.includes('aria-pressed')
  ,timerNotLive: !html.includes('id="app" aria-live')
  ,designFreezeDocument: fs.existsSync('docs/TRAINR_V1_DESIGN_FREEZE.md')
};

for (const [name, passed] of Object.entries(checks)) console.log(`${passed ? 'PASS' : 'FAIL'} ${name}`);
if (Object.values(checks).some(value => !value)) process.exit(1);
