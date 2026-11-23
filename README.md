# Todo Test — Playwright UI Automation

[![Playwright](https://img.shields.io/badge/Playwright-UI%20Automation-2EAD33?logo=playwright&logoColor=white)](https://playwright.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A small browser-based task tracker used as a QA case study. The repository contains the application, automated regression checks, manual test design, a recorded execution report and resolved accessibility bug examples.

**[Live application](https://blvxx.github.io/playwright-qa-lab/)** · **[Latest CI runs](https://github.com/blvxx/playwright-qa-lab/actions)** · **[Manual test report](docs/test-execution-report.md)**

## Application behavior

- Add tasks with the button or Enter.
- Ignore empty and whitespace-only input.
- Mark tasks complete and update the active counter.
- Delete individual tasks and clear completed items.
- Persist task state through browser `localStorage`.
- Recover safely from malformed stored JSON.
- Use native checkbox/label interaction and accessible names for icon-only controls.
- Adapt to narrow mobile viewports and retain visible keyboard focus.

## Automated coverage

Playwright currently contains **11 end-to-end scenarios**:

| Area | Coverage |
|---|---|
| Initial state | Empty state and footer visibility |
| Creation | Button, Enter and input reset |
| Validation | Empty and whitespace-only values |
| Completion | Checkbox state and active counter |
| Removal | Delete and clear-completed behavior |
| Persistence | State after page reload |
| Accessibility | Accessible names and semantic label interaction |
| Storage resilience | Recovery from malformed saved data |

The last completed pre-accessibility baseline run passed 8 tests on 23 November 2026: [view baseline CI run](https://github.com/blvxx/playwright-qa-lab/actions/runs/45100286227). The updated 11-test run is triggered by the latest source changes; check [Actions](https://github.com/blvxx/playwright-qa-lab/actions) for its completed result.

## Manual QA evidence

The manual suite contains **20 planned cases** covering functional behavior, persistence, accessibility and corrupted storage.

On 23 November 2026, an isolated Chromium session recorded **20/20 planned cases passed**, plus **1 exploratory 320px mobile-overflow check passed**. Synthetic task data was cleared after execution.

- [Manual test cases](docs/test-cases.md)
- [Test execution report and environment limitations](docs/test-execution-report.md)
- [Resolved accessibility bug reports](docs/sample-bug-reports.md)
- [Bug report template](docs/bug-report-template.md)

**Test environment note:** the container's browser policy blocked navigation to local files and localhost. The isolated Chromium harness loaded the current HTML/JavaScript behavior directly and used a localStorage-compatible shim for reinitialisation checks. Native browser localStorage reload is also covered by the repository's automated Playwright CI suite. The report distinguishes these environments.

## Run locally

Requirements: Node.js and npm.

```bash
npm install
npx playwright install chromium
npm test
```

View the HTML report:

```bash
npm run test:report
```

## Tech stack

JavaScript · HTML · CSS · localStorage · Playwright · GitHub Actions

## Project boundaries

This is an independent portfolio practice project, not a commercial client delivery. It demonstrates test design, accessibility improvements, browser automation and reporting; it is not presented as a production task-management service.
