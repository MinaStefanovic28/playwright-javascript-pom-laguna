import BasePage from './BasePage.js';

class HomePage extends BasePage {
  constructor(page) {
    super(page); 

    this.searchInput = page.getByRole('searchbox');
    this.userProfileButton = page.locator('button[class="cursor-pointer"]');
    this.favoritesButton = page.getByRole('button', { name: 'Moji omiljeni artikli' });
  }

  async searchBook(title) {
    await this.searchInput.fill(title);
    await this.searchInput.press('Enter');
}



}

export default HomePage;