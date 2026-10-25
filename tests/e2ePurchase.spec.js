import { test, expect } from '@playwright/test';

import HomePage from '../pages/HomePage.js';
import SearchResultsPage from '../pages/SearchResultsPage.js';
import SingleProductPage from '../pages/SingleProductPage.js';
import CartPage from '../pages/CartPage.js';
import CheckoutPage from '../pages/CheckoutPage.js';

test.describe('Laguna E2E Flow', () => {
  let homePage;
  let searchResultsPage;
  let singleProductPage;
  let cartPage;
  let checkoutPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    searchResultsPage = new SearchResultsPage(page);
    singleProductPage = new SingleProductPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);

    await homePage.navigate();
    await homePage.acceptCookies();
  });

  test('Kupovina knjige Alhemičar', async ({ page }) => {
    await homePage.searchBook('Alhemičar');
    await searchResultsPage.clickOnBookByTitle('Alhemičar');

    await expect(singleProductPage.readBookTitle()).toContainText('Alhemičar');

    await singleProductPage.addToCart();
    await singleProductPage.openCart();

    const bookInCart = await cartPage.getCartItemByTitle('Alhemičar');
    await expect(bookInCart).toBeVisible();

    await cartPage.proceedToCheckout();

    await expect(checkoutPage.sectionTitle).toBeVisible();

    await checkoutPage.fillCustomerDetails({
      email: 'test@example.com',
      fullName: 'Petar Perić',
      phone: '0641234567',
      address: 'Knez Mihailova 10',
      city: 'Beograd',
      postalCode: '11000'
    });

    await checkoutPage.clickOnPayment();
  });
});