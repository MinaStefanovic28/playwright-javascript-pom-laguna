import BasePage from './BasePage.js';

class SingleProductPage extends BasePage {
  constructor(page) {
    super(page);

    this.bookTitle = page.locator('h1');
    this.productPrice = page.getByText('RSD');    
    this.addToCartButton = page.locator('a[href="/assets/CnLET0JH-sprite.svg#add-to-cart"]');
    this.cartButton = page.locator('[data-testid="header-open-cart"]');
    this.viewCartPopupButton = page.getByRole('link', { name: /Pregled korpe/i });
  }

    async addToCart() {
    await this.addToCartButton.click();
  }

  async openCart() {
    await this.cartHeaderButton.click();
    await this.viewCartPopupButton.click();
  }

 readBookTitle() {
  return this.page.locator('h1'); 
}

}

export default SingleProductPage;