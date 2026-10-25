import BasePage from './BasePage.js';

class CheckoutPage extends BasePage {
  constructor(page) {
    super(page);

   
    this.sectionTitle = page.getByRole('heading', { name: 'Lični podaci i adresa' });

    this.emailInput = page.getByLabel('E-mail adresa*');
    this.fullNameInput = page.getByLabel('Ime i prezime*');
    this.phoneInput = page.getByLabel('Broj telefona*');
    this.addressInput = page.getByLabel('Adresa*');
    this.cityInput = page.getByLabel('Mesto*');
    this.postalCodeInput = page.getByLabel('Poštanski broj*');

    this.orderSummaryContainer = page.locator('div').filter({ hasText: 'Stavke korpe' });
  }


  async fillCustomerDetails(customer) {
    await this.emailInput.fill(customer.email);
    await this.fullNameInput.fill(customer.fullName);
    await this.phoneInput.fill(customer.phone);
    await this.addressInput.fill(customer.address);
    await this.cityInput.fill(customer.city);
    await this.postalCodeInput.fill(customer.postalCode);
  }
}

export default CheckoutPage;