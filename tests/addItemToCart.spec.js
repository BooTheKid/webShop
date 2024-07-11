import { test, expect} from "@playwright/test";


const CartPage = require('../pages/CartPage');
const SearchPage = require('../pages/SearchPage');


test.describe("Online Sopping tests", () => {
  test.beforeEach(async ({ page }) => {
      await page.goto('/')
  });

  test("Add an item to the Cart", {
    tag: '@cart',
  }, async ({ page }) => {

   const searchPage = new SearchPage(page);
   const cartPage = new CartPage(page)
   const randomItem = getRandomItem();

   await searchPage.searchForItem();
   await searchPage.searchForItem(randomItem);

   await cartPage.addToCart();
   await cartPage.openCartView();


   const itemCount = await cartPage.getCartItemsCount();
   expect(itemCount).toBeGreaterThan(0);

   await cartPage.deleteFromCart();

  });


});