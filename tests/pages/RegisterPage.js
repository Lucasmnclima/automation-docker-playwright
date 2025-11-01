// Este arquivo guarda todos os seletores e ações da página de Registro
export class RegisterPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // Seletores (privados para esta classe)
    this.nameInput = page.locator("#user");
    this.emailInput = page.locator("#email");
    this.passwordInput = page.locator("#password");
    this.registerButton = page.locator("#btnRegister");

    // Seletores de Validação
    this.successModal = page.getByText("Cadastro realizado!");
    this.okButton = page.getByRole("button", { name: "OK" });
    this.errorName = page.getByText("O campo nome deve ser prenchido");
    this.errorEmail = page.getByText(
      "O campo e-mail deve ser prenchido corretamente"
    );
    this.errorPassword = page.getByText(
      "O campo senha deve ter pelo menos 6 dígitos"
    );
  }

  // Ações (métodos que os testes vão chamar)

  /** Navega para a página de registro */
  async goto() {
    await this.page.goto("https://automationpratice.com.br/register");
  }

  /** Preenche o formulário e submete */
  async registerNewUser(user) {
    await this.nameInput.fill(user.nome);
    await this.emailInput.fill(user.email);
    await this.passwordInput.fill(user.senha);
    await this.registerButton.click();
  }

  /** Ação de submeter o formulário (para testes negativos) */
  async submit() {
    await this.registerButton.click();
  }
}
