import { test, expect } from '@playwright/test';

test('Mi primera automatización profesional', async ({ page }) => {
  // 1. Navegar
  await page.goto('https://demo.playwright.dev/todomvc/');

  // 2. Interactuar
  const input = page.getByPlaceholder('What needs to be done?');
  await input.fill('Aprender Playwright');
  await input.press('Enter');

  // 3. Validar
  await expect(page.getByTestId('todo-title')).toHaveText(['Aprender Playwright']);
});