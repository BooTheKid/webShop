const { expect } = require('@playwright/test');

class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.cardNumberInput = this.page.locator('#cardNumber');
    this.cardExpiryInput = this.page.locator('#cardExpiry');
    this.cardCvcInput = this.page.locator('#cardCvc');
    this.payButton = this.page.locator('#payButton');
    this.orderConfirmationText = this.page.locator('#orderConfirmation');
  }

  async enterCardDetails(cardNumber, expiry, cvc) {
    await this.cardNumberInput.fill(cardNumber);
    await this.cardExpiryInput.fill(expiry);
    await this.cardCvcInput.fill(cvc);
  }

  async completePayment() {
    await this.payButton.click();
  }

  async validateOrderCompletion() {
    await expect(this.orderConfirmationText).toHaveText('Thank you for your order');
  }
}

module.exports = CheckoutPage;