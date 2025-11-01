export class CheckoutOnePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // --- Seletores de Faturamento (Billings Information) ---
    this.firstNameInput = page.locator("#fname");
    this.lastNameInput = page.locator("#lname");
    this.companyNameInput = page.locator("#cname");
    this.emailInput = page.locator("#email");
    this.countrySelect = page.locator("#country");
    this.citySelect = page.locator("#city");
    this.zipCodeInput = page.locator("#zip");
    this.fullAddressInput = page.locator("#faddress");
    this.notesTextarea = page.locator("#messages");
    this.saveAddressCheckbox = page.locator("#materialUnchecked");
    this.placeOrderButton = page.locator("button.theme-btn-one.btn-black-overlay.btn_sm");


    // --- Seletores de Pagamento (Payment) ---
    this.paymentBankTransfer = page.getByLabel("Direct Bank Transfer");
    this.paymentMobileBanking = page.getByLabel("Mobile Banking");
    this.paymentPaypal = page.getByLabel("Paypal");

    // --- Botões de Ação ---
    this.placeOrderButton = page.getByRole("button", { name: "PLACE ORDER" });
    this.saveButton = page.getByRole("button", { name: "SAVE" }); // (Opcional)

    // --- SELETORES DE SUCESSO (Modal) ---
    this.successModalTitle = page.locator("div.modal-body h2", {
      hasText: "Order success!",
    });
    this.successModalMessage = page.locator("div.modal-body h3", {
      hasText: "Congrats! Your order was created with success!",
    });
  }

  // --- Ações (Métodos) ---

  /** Navega para a página de checkout */
  async goto() {
    // A URL na sua imagem é checkout-one
    await this.page.goto("https://automationpratice.com.br/checkout-one");
  }

  /** Preenche o formulário de faturamento completo */
  async fillBillingDetails(info) {
    await this.firstNameInput.fill(info.firstName);
    await this.lastNameInput.fill(info.lastName);
    await this.companyNameInput.fill(info.companyName);

    // Para campos <select>, usamos selectOption
    await this.countrySelect.selectOption(info.country);
    // Espera o <select> de cidade ser populado antes de clicar
    await this.citySelect.selectOption(info.city);

    await this.zipCodeInput.fill(info.zip);
    await this.fullAddressInput.fill(info.address);
    await this.notesTextarea.fill(info.notes);
  }

  /** Seleciona o método de pagamento e finaliza o pedido */
  async placeOrder(paymentMethod = "Paypal") {
    // Clica no método de pagamento
    if (paymentMethod === "Paypal") {
      await this.paymentPaypal.check();
    } else if (paymentMethod === "Mobile Banking") {
      await this.paymentMobileBanking.check();
    } else {
      await this.paymentBankTransfer.check();
    }

    // Clica no botão de finalizar
    await this.placeOrderButton.click();
  }
}
