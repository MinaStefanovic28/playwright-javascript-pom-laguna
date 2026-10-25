import BasePage from './BasePage.js';

class SearchResultsPage extends BasePage {
    constructor(page){
        super(page);

    this.searchHeading = page.getByRole('heading', { level: 1 });
    this.bookTitles = page.locator('picture[class="first"]');
  
  }

      async clickOnBookByTitle(title) {
      await this.page.getByText(title).first().click();
      }
      
     async clickFirstBook() {
  await this.page.locator('img').first().click();
  }
  
}

export default SearchResultsPage;
    
    
