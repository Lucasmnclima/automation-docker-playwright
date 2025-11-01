/*
 tests/login.spec.js
 npx playwright test
 npx playwright codegen https://automationpratice.com.br/ 
 */

import { test, expect } from "@playwright/test";
// import { faker } from "@faker-js/faker"; // <-- Não precisamos mais disto aqui!
import { LoginPage } from "./pages/LoginPage.js";
// 1. Importando a função específica do nosso utilitário!
import { createLoginUser } from "./utilis/fakeData.js";

test.describe("Funcionalidade de Login", () => {
  let user; 
  let loginPage; 

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);

    // 2. Gerando dados a partir do arquivo centralizado!
    // Muito mais limpo e sem lógica de 'faker' no teste
    user = createLoginUser();

    await loginPage.goto();
  });

  test("Deve exibir o título correto na página de login", async ({ page }) => {
    await expect(page).toHaveTitle(/QAZANDO Shop E-Commerce/);
  });

  test("Deve realizar login com sucesso", async ({ page }) => {
    await loginPage.login(user);
    await expect(page).toHaveURL(/.*my-account/);
  });

  test("Deve impedir login ao não preencher o e-mail", async ({ page }) => {
    await loginPage.passwordInput.fill(user.senha);
    await loginPage.submit();
    await expect(loginPage.errorEmail).toBeVisible();
  });

  test("Deve exibir mensagem de senha inválida ao deixar a senha em branco", async ({
    page,
  }) => {
    await loginPage.emailInput.fill(user.email);
    await loginPage.submit();
    await expect(loginPage.errorPassword).toBeVisible();
  });
});