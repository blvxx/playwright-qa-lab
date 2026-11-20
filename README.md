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

## QA scope
This project is being documented and tested. Planned coverage includes:
- Functional testing of adding, completing, deleting and clearing tasks
- Input validation (empty and whitespace-only input)
- Persistence after page reload
- Counter and empty-state behavior
- Keyboard interaction (Enter)
- Boundary and repeated-action checks

## Test documentation
See [test cases](docs/test-cases.md) for the manual test checklist and cases.

## Tech stack
HTML, CSS, JavaScript, browser localStorage.

> Portfolio practice project. Test documentation and automation will be added incrementally; no automated test suite is claimed yet.
