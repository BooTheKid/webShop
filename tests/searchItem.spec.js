import { test} from "@playwright/test";
const SearchPage = require('../pages/SearchPage');


test.describe("Online Sopping tests", () => {
  test.beforeEach(async ({ page }) => {
      await page.goto('/')
  });

  test("Search an Item", {
    tag: '@search',
  }, async ({ page }) => {

   const searchPage = new SearchPage(page);
   const randomItem = getRandomItem();

   await searchPage.searchForItem();
   await searchPage.searchForItem(randomItem);
   await searchPage.validateSearch(randomItem);

  });
});