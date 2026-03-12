import { test, expect } from '@playwright/test';
import * as allure from "allure-js-commons";

test('Prueba de Login con Allure', async ({ page }) => {
  // Metadatos para el reporte
  await allure.description("Valida que el usuario pueda loguearse con credenciales válidas.");
  await allure.owner("Bernardo Pérez");
  await allure.tags("Regresión", "Autenticación");
  await allure.severity("critical");

  await test.step("Navegar a la URL", async () => {
    await page.goto('https://example.com/login');
  });

  await test.step("Ingresar credenciales", async () => {
    await page.fill('#user', 'qa_admin');
    await page.fill('#pass', 'password123');
    await page.click('#submit');
  });

  await expect(page).toHaveURL(/dashboard/);
});