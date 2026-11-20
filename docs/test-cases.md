# Manual Test Cases — Todo Test

**Project:** Todo Test  
**Test type:** Functional / UI / Persistence  
**Status:** Initial test design (not yet executed)

## Test environment
- Browser: Chromium-based browser (record exact version when executing)
- Storage: browser localStorage
- Setup: open `index.html`

## Test cases

| ID | Scenario | Steps | Expected result |
|---|---|---|---|
| TC-001 | Add a task using button | Enter a non-empty task; click Add | Task appears in list; input clears; active counter increases |
| TC-002 | Add a task using Enter | Enter a task; press Enter | Task appears; input clears |
| TC-003 | Reject empty input | Leave input empty; click Add | No task is created |
| TC-004 | Reject whitespace-only input | Enter spaces; click Add | No task is created |
| TC-005 | Complete task by checkbox | Add task; click checkbox | Task is marked completed; active counter decreases |
| TC-006 | Toggle task by clicking text | Add task; click task text | Completion state toggles |
| TC-007 | Delete task | Add task; click delete | Task disappears; counter and empty state update |
| TC-008 | Clear completed tasks | Add two tasks; complete one; click Clear Completed | Completed task is removed; active task remains |
| TC-009 | Persistence after reload | Add task; reload page | Task remains with its current state |
| TC-010 | Completed state persistence | Complete task; reload page | Task remains completed |
| TC-011 | Empty-state visibility | Remove all tasks | Empty-state message is visible; footer is hidden |
| TC-012 | Footer visibility | Add one task | Footer is visible |
| TC-013 | Active counter | Add two tasks; complete one | Counter shows one active task |
| TC-014 | Clear completed with none completed | Add active task(s); click Clear Completed | Active tasks remain unchanged |
| TC-015 | Delete last task | Add one task; delete it | Empty state appears; footer hides |
| TC-016 | Multiple tasks | Add several tasks | All tasks appear; actions affect only selected task |
| TC-017 | Duplicate task text | Add same text twice | Both entries are independently visible and manageable |

## Execution log
Not executed yet. Fill in actual results, defects, date, browser and build/version after testing.
