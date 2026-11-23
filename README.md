# Todo Test — Playwright UI Automation

[![Playwright](https://img.shields.io/badge/Playwright-UI%20Automation-2EAD33?logo=playwright&logoColor=white)](https://playwright.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A lightweight browser-based task tracker used as a QA portfolio project. The repository combines a small testable web app, documented manual scenarios, and end-to-end automation.

## Application under test

- Create tasks with a button or Enter
- Reject empty and whitespace-only input
- Mark tasks as completed and update the active counter
- Delete individual tasks
- Clear completed tasks without removing active ones
- Persist task data using browser localStorage
- Display empty state when there are no tasks

## Automated coverage

Playwright scenarios cover:

| Scenario | What is verified |
|---|---|
| Initial state | Empty-state message and hidden footer |
| Create task | Task appears, input clears, active counter updates |
| Keyboard | Enter submits a task |
| Validation | Empty and whitespace-only values are rejected |
| Completion | Checkbox updates completed styling and active count |
| Delete | Task removal and empty-state restoration |
| Clear completed | Completed items removed, active items preserved |
| Persistence | Task survives page reload |

**8 end-to-end scenarios** are authored in `tests/todo.spec.js`. The latest reviewed GitHub Actions run on 22 November 2026 completed with **8 passed**: [view the successful run](https://github.com/blvxx/playwright-qa-lab/actions/runs/44979710284). This is CI evidence, not a claim about a separate local execution.

## Manual QA documentation

- [17 designed manual test cases](docs/test-cases.md) — execution status is currently **not executed**; the document is a test-design artifact.
- [Test execution report template](docs/test-execution-report.md)
- [Bug report template](docs/bug-report-template.md)

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

## Project status

The application and eight automated browser scenarios are available for inspection. Check the [Actions history](https://github.com/blvxx/playwright-qa-lab/actions) for runs newer than the linked evidence above.

Independent portfolio practice project. It is not a commercial client delivery.
