# Manual Test Cases — Todo Test

**Project:** Todo Test / Playwright QA Lab  
**Test type:** Functional, UI, persistence, accessibility and responsive layout  
**Execution date:** 2026-11-23  
**Execution status:** Executed in an isolated Chromium browser harness; see [test execution report](test-execution-report.md).

## Environment and boundaries

- Browser: Chromium 144.0.7559.96
- Main viewport: 1365 × 900
- Responsive check: 320 × 700
- Test data: synthetic task labels only
- App source: current repository HTML, CSS and JavaScript behavior
- The container policy blocked browser navigation to local files and localhost. The isolated harness loaded the project markup and scripts directly; a localStorage-compatible shim preserved values across document re-renders. The CI suite separately verifies native browser localStorage behavior.

## Test cases

| ID | Scenario | Steps | Expected result |
|---|---|---|---|
| TC-001 | Add task using button | Enter a task and click Add | Task appears; input clears; active counter increases |
| TC-002 | Add task using Enter | Enter a task and press Enter | Task appears; input clears |
| TC-003 | Reject empty input | Leave input empty and click Add | No task is created |
| TC-004 | Reject whitespace-only input | Enter spaces and click Add | No task is created |
| TC-005 | Complete task using checkbox | Add a task and check it | Completed style appears; active counter decreases |
| TC-006 | Toggle task from its text label | Add a task and click its text | Associated checkbox toggles completion |
| TC-007 | Delete a task | Add a task and activate its Delete button | Task disappears; state and counter update |
| TC-008 | Clear completed tasks | Add active and completed tasks; clear completed | Completed task is removed; active task remains |
| TC-009 | Persist tasks after reload | Add a task and reload/reinitialize the page | Task remains visible |
| TC-010 | Persist completed state | Complete a task and reload/reinitialize | Task remains completed |
| TC-011 | Empty-state visibility | Open with no tasks | Empty-state message visible; footer hidden |
| TC-012 | Footer visibility | Add one task | Footer visible |
| TC-013 | Active counter | Add two tasks and complete one | Counter shows one active task |
| TC-014 | Clear when none completed | Add active task(s) and click Clear Completed | Active tasks remain unchanged |
| TC-015 | Delete final task | Add one task and delete it | Empty state returns; footer hides |
| TC-016 | Multiple tasks | Add three tasks; delete the middle item | Only the selected task is removed |
| TC-017 | Duplicate task text | Add the same text twice; delete one | Duplicate entries remain independently manageable |
| TC-018 | Accessible names for controls | Inspect textbox, Add and Delete buttons by role/name | Controls expose meaningful accessible names |
| TC-019 | Semantic label interaction | Activate task text using the associated label | Checkbox state changes without a non-semantic click handler |
| TC-020 | Corrupted persisted data | Set malformed JSON in the task storage key and reload | App recovers to empty state without a crash |

## Exploratory check

| ID | Scenario | Expected result |
|---|---|---|
| EXP-001 | 320px mobile viewport with a long task title | No horizontal page overflow; text wraps without hiding controls |

## Defect handling

Code review identified two accessibility defects in the initial implementation: icon-only controls lacked accessible names, and task text used a clickable span instead of a semantic label. Both were fixed in the current implementation and covered by TC-018 and TC-019. Details: [sample bug reports](sample-bug-reports.md).
