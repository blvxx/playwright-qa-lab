# Test Execution Report

**Build / source revision:** Accessibility fixes and defensive storage handling committed on 2026-11-23  
**Execution date:** 2026-11-23  
**Tester:** Artem Kalinin — manual functional QA with Playwright-driven Chromium interactions  
**Browser:** Chromium 144.0.7559.96  
**Main viewport:** 1365 × 900  
**Exploratory viewport:** 320 × 700  
**Test data:** Synthetic task labels only

## Execution results

| Test ID | Result | Notes |
|---|---|---|
| TC-001 | Pass | Button adds a task, clears input and updates counter |
| TC-002 | Pass | Enter submits a task |
| TC-003 | Pass | Empty input is ignored |
| TC-004 | Pass | Whitespace-only input is ignored |
| TC-005 | Pass | Checkbox completes task and updates counter |
| TC-006 | Pass | Semantic label text toggles the checkbox |
| TC-007 | Pass | Delete removes the selected task |
| TC-008 | Pass | Clear completed preserves active tasks |
| TC-009 | Pass | Task data is restored after document reinitialisation using isolated storage shim |
| TC-010 | Pass | Completed state is restored after document reinitialisation using isolated storage shim |
| TC-011 | Pass | Empty state is visible and footer hidden when list is empty |
| TC-012 | Pass | Footer appears when a task exists |
| TC-013 | Pass | Active counter is correct with mixed task states |
| TC-014 | Pass | Clearing with no completed tasks preserves active tasks |
| TC-015 | Pass | Deleting the final task restores the empty state |
| TC-016 | Pass | Deleting a middle task does not affect neighbouring tasks |
| TC-017 | Pass | Duplicate task labels remain independently manageable |
| TC-018 | Pass | Textbox, Add and Delete controls expose accessible names |
| TC-019 | Pass | Native label association toggles the checkbox |
| TC-020 | Pass | Malformed persisted JSON is handled without an application crash |
| EXP-001 | Pass | 320px viewport: scrollWidth 320px, clientWidth 320px |

## Summary

- **Passed:** 21 (20 planned cases + 1 exploratory check)
- **Failed:** 0
- **Blocked:** 0
- **Cleanup:** Confirmed; synthetic task data was cleared after the session
- **Known functional defects:** None observed in this session
- **Accessibility fixes:** BUG-001 and BUG-002 were identified by source review and fixed; regression checks pass.

## Environment limitation

The container's browser policy blocked navigation to local files and localhost. To exercise the current markup and application logic, the isolated Chromium harness loaded the repository HTML/JavaScript directly and used a localStorage-compatible shim. Reinitialisation checks verify the application's read/write contract with that shim. Native browser localStorage persistence remains covered by the repository's automated Playwright CI test, which runs against the actual file-based app.

This report is a local isolated QA session, not a claim that the hosted public site was accessed through a real end-user browser session. Re-run the suite on a normal workstation or in GitHub Actions if a native-browser confirmation is needed after deployment.

## Recommendation

The tested task flows and accessibility labels are behaving as expected in the isolated session. Keep the automated regression suite enabled and repeat native-browser checks when making storage or interaction changes.
