const { test, expect } = require('@playwright/test');
const path = require('path');
const { pathToFileURL } = require('url');

const appUrl = pathToFileURL(path.join(__dirname, '..', 'index.html')).href;

test.beforeEach(async ({ page }) => {
  await page.goto(appUrl);
  await page.evaluate(() => localStorage.clear());
  await page.reload();
});

test('shows empty state on first launch', async ({ page }) => {
  await expect(page.locator('#emptyState')).toBeVisible();
  await expect(page.locator('#footer')).toBeHidden();
});

test('adds task with button and clears input', async ({ page }) => {
  await page.locator('#taskInput').fill('Buy milk');
  await page.locator('#addBtn').click();
  await expect(page.locator('#taskList li')).toHaveCount(1);
  await expect(page.locator('#taskList')).toContainText('Buy milk');
  await expect(page.locator('#taskInput')).toHaveValue('');
  await expect(page.locator('#taskCount')).toContainText('1');
});

test('adds task with Enter key', async ({ page }) => {
  await page.locator('#taskInput').fill('Call dentist');
  await page.locator('#taskInput').press('Enter');
  await expect(page.locator('#taskList li')).toHaveCount(1);
});

test('does not add blank or whitespace-only tasks', async ({ page }) => {
  await page.locator('#addBtn').click();
  await page.locator('#taskInput').fill('   ');
  await page.locator('#addBtn').click();
  await expect(page.locator('#taskList li')).toHaveCount(0);
});

test('toggles completion and updates active counter', async ({ page }) => {
  await page.locator('#taskInput').fill('Task one');
  await page.locator('#addBtn').click();
  await page.locator('#taskList input[type=checkbox]').check();
  await expect(page.locator('#taskList li')).toHaveClass(/completed/);
  await expect(page.locator('#taskCount')).toContainText('0');
});

test('deletes a task', async ({ page }) => {
  await page.locator('#taskInput').fill('Delete me');
  await page.locator('#addBtn').click();
  await page.locator('#taskList .delete-btn').click();
  await expect(page.locator('#taskList li')).toHaveCount(0);
  await expect(page.locator('#emptyState')).toBeVisible();
});

test('clears completed tasks but keeps active tasks', async ({ page }) => {
  await page.locator('#taskInput').fill('Active');
  await page.locator('#addBtn').click();
  await page.locator('#taskInput').fill('Done');
  await page.locator('#addBtn').click();
  await page.locator('#taskList input[type=checkbox]').nth(1).check();
  await page.locator('#clearCompletedBtn').click();
  await expect(page.locator('#taskList li')).toHaveCount(1);
  await expect(page.locator('#taskList')).toContainText('Active');
});

test('persists tasks after reload', async ({ page }) => {
  await page.locator('#taskInput').fill('Persist me');
  await page.locator('#addBtn').click();
  await page.reload();
  await expect(page.locator('#taskList')).toContainText('Persist me');
});

test('exposes accessible names for the input and icon-only controls', async ({ page }) => {
  await expect(page.getByRole('textbox', { name: 'Новая задача' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Добавить задачу' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Новая задача' }).fill('Accessible task');
  await page.getByRole('button', { name: 'Добавить задачу' }).click();
  await expect(page.getByRole('button', { name: 'Удалить задачу' })).toBeVisible();
});

test('toggles a task when its associated label text is clicked', async ({ page }) => {
  await page.locator('#taskInput').fill('Label toggles checkbox');
  await page.locator('#addBtn').click();
  const checkbox = page.locator('#taskList input[type=checkbox]');
  await page.getByText('Label toggles checkbox').click();
  await expect(checkbox).toBeChecked();
  await expect(page.locator('#taskList li')).toHaveClass(/completed/);
});

test('recovers safely from malformed saved task data', async ({ page }) => {
  await page.evaluate(() => localStorage.setItem('tasks', '{not-valid-json'));
  await page.reload();
  await expect(page.locator('#emptyState')).toBeVisible();
  await expect(page.locator('#taskList li')).toHaveCount(0);
});
