# Sample Bug Reports — Todo Test

These reports document two accessibility defects found by reviewing the initial implementation. They are portfolio examples based on this project's code, not defects reported by external users or found in a production service.

## BUG-001 — Icon-only controls have no accessible names

- **Status:** Fixed
- **Severity:** Minor
- **Priority:** P2
- **Area:** Accessibility / keyboard and screen-reader use
- **Finding method:** Source review, then regression coverage

### Preconditions
Open the Todo Test application with no tasks.

### Steps to reproduce
1. Inspect the Add button using the accessibility tree.
2. Add a task.
3. Inspect the Delete button in the rendered task row.

### Expected result
The textbox and both icon-only buttons expose meaningful accessible names, so assistive technology can identify their purpose.

### Initial behavior
The input relied only on a placeholder. Add and Delete buttons contained icons but had no explicit accessible name.

### Correction
- Added `aria-label="Новая задача"` to the task input.
- Added `aria-label="Добавить задачу"` to the Add button.
- Added `aria-label="Удалить задачу"` to each Delete button.
- Marked decorative icons with `aria-hidden="true"`.

### Regression coverage
- Playwright: accessible-name regression test.
- Manual: TC-018.

## BUG-002 — Task text is a non-semantic click target

- **Status:** Fixed
- **Severity:** Minor
- **Priority:** P2
- **Area:** Accessibility / interaction semantics
- **Finding method:** Source review, then regression coverage

### Preconditions
At least one task is visible.

### Steps to reproduce
1. Navigate to a task row.
2. Try to activate its text using keyboard navigation.
3. Compare that interaction with clicking the checkbox.

### Expected result
The task text is programmatically associated with its checkbox. Pointer and assistive-technology users can activate the same native control.

### Initial behavior
A clickable `span` changed task state through a JavaScript click handler. It was not itself a semantic control and did not provide a native label association.

### Correction
- Replaced the clickable wrapper with a native `label`.
- Associated the label with the checkbox through a stable per-render ID.
- Moved state changes to the checkbox `change` event.

### Regression coverage
- Playwright: label/checkbox interaction regression test.
- Manual: TC-019.

## Verification note

The fixes are implemented in the current source. The linked automated workflow and manual test execution report provide the available verification evidence. These cases are included to show defect documentation and resolution discipline; they are not claims of production incidents.
