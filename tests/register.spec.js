/*
 tests/login.spec.js
 npx playwright test
 npx playwright codegen https://automationpratice.com.br/ 
 */

import { test, expect } from "@playwright/test";
// import { faker } from "@faker-js/faker"; // <-- 1. Não precisamos mais disto!
import { RegisterPage } from "./pages/RegisterPage.js";
// 2. Importando a função específica do nosso utilitário!
import { createRegisterUser } from "./utilis/fakeData.js";

test.describe("Funcionalidade de registro", () => {
  let user;
  let registerPage; 

  test.beforeEach(async ({ page }) => {
    registerPage = new RegisterPage(page); 

    // 3. Gerando dados a partir do arquivo centralizado!
    // Muito mais limpo e sem lógica de 'faker' no teste
    user = createRegisterUser();
    
    await registerPage.goto(); 
  }, 60000);

  test("Deve exibir o título correto na página de registro", async ({ page }) => {
    await expect(page).toHaveTitle(/QAZANDO Shop E-Commerce/);
  }, 60000);

  test("Deve fazer o registro com sucesso", async ({ page }) => {
    await registerPage.registerNewUser(user);

    await expect(registerPage.successModal).toBeVisible();
    await registerPage.okButton.click();
  }, 60000);

  test("Deve impedir o registro ao não preencher o nome", async ({ page }) => {
    await registerPage.emailInput.fill(user.email);
    await registerPage.passwordInput.fill(user.senha);
    await registerPage.submit();

    await expect(registerPage.errorName).toBeVisible();
  }, 60000);

  test("Deve impedir o registro ao não preencher o email", async ({ page }) => {
    await registerPage.nameInput.fill(user.nome);
    await registerPage.passwordInput.fill(user.senha);
    await registerPage.submit();

    await expect(registerPage.errorEmail).toBeVisible();
  }, 60000);

  test("Deve impedir o registro ao não preencher a senha", async ({ page }) => {
    await registerPage.nameInput.fill(user.nome);
    await registerPage.emailInput.fill(user.email);
    await registerPage.submit();

    await expect(registerPage.errorPassword).toBeVisible();
  }, 60000);
});