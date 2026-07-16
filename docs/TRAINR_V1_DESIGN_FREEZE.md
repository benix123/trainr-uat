# Trainr V1 Design Freeze

Status: **Approved for V1 production implementation**  
Authoritative reference: `v1-design-freeze`  
Approved implementation commit: `TO_BE_RECORDED`  
Deployed reference: https://benix123.github.io/trainr-uat/

This document is the design source of truth for Trainr V1. The deployed coded prototype, this specification and the tagged repository state together define the approved interface.

## Brand foundations

- Background: near-black `#050608`; primary product background `#0F1115`.
- Surfaces: charcoal `#171A21`, with darker transparent surfaces where photography remains visible.
- Accent: Trainr red `#ED1730`/`#FF4655`. Use for primary actions, active states and small emphasis only.
- Text: white for primary content, light grey for supporting content, muted grey for metadata. Essential information must retain WCAG AA contrast.
- Borders: one-pixel, low-contrast neutral borders. Avoid stacked outlines and decorative separators.
- Typography: SF Pro on Apple platforms or Inter as the cross-platform fallback. Large editorial headings, readable 14px-or-larger body copy and compact uppercase labels no smaller than 12px.
- Spacing: 6, 10, 16, 24 and 32px scale. Screen insets are responsive and never less than 16px on supported phones.
- Radii: 8px compact controls, 12–18px product surfaces, and larger editorial hero radii only where already approved.
- Photography: cinematic team-sport athletes in black/red kit, believable anatomy and sport action. Protect text with strong dark gradients. Do not stretch images. Decorative images use empty alt text.
- Icons: simple single-colour outline icons with consistent stroke weight. Icons never replace an essential visible label.
- Buttons: one filled-red primary action per decision group; outlined/dark secondary actions; text actions only for low-emphasis utilities. Minimum target is 44×44px.
- Motion: short, purposeful state transitions. No looping decorative motion. Respect `prefers-reduced-motion`.

## Approved V1 screens

### Entry and onboarding

Splash; Welcome; Signup; Sport selection; Sport DNA; Team search; Fixture confirmation; Athlete background; Team-training schedule; Gym frequency and availability; Session duration and equipment; Training goal; Coaching-profile review; Programme generation; Generation success; Generation failure.

### Main application

Today; Weekly calendar; Monthly calendar; Plan; Fixture detail; Progress; Learn; Profile; Programme settings; Availability settings; Plan-change preview.

### Workout experience

Workout overview; Warm-up player; Power player; Primary-strength player; Superset player; Exercise guidance; Exercise substitution; Rest timer; Conditioning overview; E2MOM player; Cooldown player; Pause state; Abandon state; Session completion.

## Core components

- **Header:** Trainr wordmark on primary screens; contextual title and 44px back action on nested screens.
- **Bottom navigation:** Today, Plan, Progress, Learn and Profile. Fixed on portrait phones with safe-area padding.
- **Athlete hero:** editorial photography, protected copy zone and one clear narrative.
- **Selection card:** equal geometry across peers, clear selected state and `aria-pressed` semantics.
- **Fixture row:** date, opponent, home/away status, time, optional venue and explicit edit control.
- **Calendar:** one-week default, expandable month, selectable dates, text-plus-colour event meaning.
- **Plan row:** date rail, event marker, classification, duration/time and wrapping title.
- **Session card:** session title, duration, section count, objective and status-aware CTA.
- **Workout section:** numbered section header with prescription and ordered movements.
- **Exercise logger:** labelled load and rep inputs, RPE, previous performance and correct set/round association.
- **Superset group:** current round, A1/A2 position, next movement and rest only after A2.
- **Conditioning player:** interval clock, both E2MOM movements, movement completion, recovery and round controls.
- **Rest timer:** calm timer, current context, continue, add-time and skip controls. It does not announce every second.
- **Modal:** labelled dialog, initial focus, Escape close where safe and trigger-focus restoration.
- **Result state:** editorial success or calm recoverable failure with one primary next action.
- **Empty state:** concise explanation and a recovery action only where useful.
- **Settings section:** grouped fields, helper text, selected states and a clearly positioned save/preview action.

## Responsive behaviour

- Supported widths: 320, 340, 375, 390, 430 and the 520px prototype shell.
- The sport grid remains two equal columns. The fifth card spans the grid placement area but uses the exact calculated single-column width and is centred with `justify-self`; its aspect ratio never changes.
- Text and control containers use `min-width: 0` and safe wrapping for long team, fixture, goal and session names.
- Calendars retain seven columns and accessible date buttons without horizontal scrolling.
- Plan rows, workout sections, conditioning controls and completion metrics stack or wrap at narrow breakpoints.
- Bottom navigation includes safe-area padding. Screens reserve enough bottom space that actions are not obscured.
- Forms remain in normal document flow. Focused fields scroll into view and modals use a bounded, scrollable mobile height for keyboard use.
- Short-height and landscape layouts reduce vertical decoration while retaining every action.

## Accessibility requirements

- Zoom remains enabled; never add `maximum-scale=1` or disable user scaling.
- Every interactive control has a visible keyboard focus indicator.
- Touch targets are at least 44×44px.
- Inputs have persistent programmatic labels. Selection controls expose `aria-pressed`; calendar dates expose selected state.
- Modal dialogs are labelled, keyboard operable and close with Escape where appropriate.
- Status messages use a polite status region; timer text is deliberately outside a live region.
- Information is not communicated by colour alone.
- Motion honours reduced-motion preferences.
- Decorative photography uses `alt=""`; informative imagery uses concise, movement-specific descriptions.

## Locked product behaviour

Today, Calendar and Plan render from the shared programme data. The workout order is Warm-up → Power → Primary strength → Superset A → Conditioning → Cooldown → Complete. Superset A follows A1 → A2 → rest for each round. Every E2MOM round contains Bike sprint and Lateral bound in the same interval. Completion occurs only after cooldown.

## Change control

After the V1 design freeze, visual changes require evidence of a usability defect, accessibility requirement, dynamic-data failure or repeated beta-user problem. Personal preference or availability of an alternative layout is not sufficient to reopen the design.

Engine integration may replace sample data and prototype-only actions, but it must preserve the documented hierarchy, components, states and interaction contracts unless change control is satisfied.
