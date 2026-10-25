import BasePage from './BasePage.js';

class CartPage extends BasePage {
  constructor(page) {
    super(page);

    this.cartTitle = page.getByRole('heading', { name: 'Moja korpa' });
    this.checkoutButton = page.getByRole('button', { name: 'IDI NA PLAĆANJE' });
  }

  async getCartItemByTitle(title) {
    return this.page.getByRole('link', { name: title, exact: true });
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}

export default CartPage;