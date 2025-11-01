// Este arquivo guarda todos os seletores e ações da página de Login
export class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // --- Seletores da Página ---
    // Inputs
    this.emailInput = page.locator("#user");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator("#btnLogin");

    // Mensagens de Validação
    this.errorEmail = page.getByText("E-mail inválido.");
    this.errorPassword = page.getByText("Senha inválida.");
  }

  // --- Ações (Métodos) ---

  /** Navega para a página de login */
  async goto() {
    await this.page.goto("https://automationpratice.com.br/login");
  }

  /** Preenche o formulário e submete */
  async login(user) {
    await this.emailInput.fill(user.email);
    await this.passwordInput.fill(user.senha);
    await this.loginButton.click();
  }

  /** Ação de submeter o formulário (para testes negativos) */
  async submit() {
    await this.loginButton.click();
  }
}
