class BasePage {
  constructor(page) {
    this.page = page; 

    this.acceptCookiesButton = page.getByRole('button', { name: 'PRIHVATI SVE' });
  }

  async navigate(path = '') {
    await this.page.goto(`https://www.laguna.rs${path}`);
  }

  async acceptCookies() {
    if (await this.acceptCookiesButton.isVisible()) {
      await this.acceptCookiesButton.click();
    }
  }
}

export default BasePage;