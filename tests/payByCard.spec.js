const { test } = require('@playwright/test');
const { faker } = require('@faker-js/faker');
const CheckoutPage = require('../pages/CheckoutPage');
const SearchPage = require('../pages/SearchPage');
const CartPage = require('../pages/CartPage');

test.describe("Online Sopping tests", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/')
    });
    
      test('Pay by card with generated credentials', async () => {

        const checkoutPage = new CheckoutPage(page);
        const searchPage = new SearchPage(page);
        const cartPage = new CartPage(page);

        await searchPage.searchForItem();
        await searchPage.searchForItem(randomItem);
     
        await cartPage.addToCart();
        await cartPage.openCartView();

        await checkoutPage.proceedToCheckout();

        const cardNumber = faker.finance.creditCardNumber('####-####-####-####');
        const expiryDate = faker.date.future();
        const cvc = faker.finance.creditCardCVV();


    
        await checkoutPage.enterCardDetails(cardNumber, expiryDate, cvc);
        await checkoutPage.completePayment();
        await checkoutPage.validateOrderCompletion();
      });
    });