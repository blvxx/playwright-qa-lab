# Todo Test — QA Practice Project

A small browser-based task tracker used as a practical QA portfolio project.

## Features
- Add tasks (button or Enter key)
- Mark tasks as completed using the checkbox or task text
- Delete individual tasks
- Clear all completed tasks
- Persist task list in browser localStorage
- Empty-state message and active-task counter

## Run locally
1. Clone this repository.
2. Open `index.html` in a browser.
3. Use the task input to add items and test the interactions.

No build step is required.

## QA documentation
- [Manual test cases](docs/test-cases.md) — 17 initial scenarios
- [Test execution report](docs/test-execution-report.md) — record results after execution
- [Bug report template](docs/bug-report-template.md) — standard defect format

## Automated tests
Initial end-to-end tests are written using Playwright:
- Initial empty state
- Adding tasks by button and Enter
- Empty/whitespace input validation
- Completing tasks and counter update
- Deleting a task
- Clearing completed tasks
- Persistence after reload

### Run tests
Install dependencies and Chromium:
```bash
npm install
npx playwright install chromium
npm test
```

Open the HTML report:
```bash
npm run test:report
```

> Automation has been authored but not yet executed/verified in a local browser. Results should not be described as passing until the suite is run.

## Tech stack
HTML, CSS, JavaScript, localStorage, Playwright.

Portfolio practice project; it is not presented as a commercial client delivery.
