import { test, expect} from "@playwright/test";
const NavigationPage = require('../pages/NavigationPage');
const categories = require('../data/categories.json');


test.describe("Online Sopping tests", () => {
  test.beforeEach(async ({ page }) => {
      await page.goto('/')
  });

  test('Browse items in multiple categories',{
    tag: '@browse',
  }, async ({page}) => {

    const navigationPage = new NavigationPage(page);

    for (let i = 0; i < categories.length; i++) {
      const category = categories[i];
      await navigationPage.navigateToCategory(category.name);
      await navigationPage.validateCategory(category.name);
    }
  });
});