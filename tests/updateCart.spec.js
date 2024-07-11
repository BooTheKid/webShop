import { test, expect} from "@playwright/test";


const CartPage = require('../pages/CartPage');
const SearchPage = require('../pages/SearchPage');


test.describe("Online Sopping tests", () => {
  test.beforeEach(async ({ page }) => {
      await page.goto('/')
  });

  test("Update the Cart", {
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

   await searchPage.searchForItem();
   await searchPage.searchForItem(randomItem);

   await cartPage.addToCart();
   await cartPage.openCartView();

   const itemUpdate = await cartPage.getCartItemsCount();
   expect(itemUpdate).toBeGreaterThan(1);

   await cartPage.deleteFromCart();
   expect(itemUpdate).toBeLessThan(1);

  });
  });