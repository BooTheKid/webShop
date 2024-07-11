const { expect } = require("@playwright/test");
const fs = require('fs');

 class SearchPage {
    constructor(page) {
      this.page = page;
      this.searchInput = this.page.getByRole("combobox", {name: "Search"});
      this.itemTitle = this.page.locator("span.product-name").first();
    }  
  
    async searchForItem(itemName) {
      await this.searchInput.click();
      await this.searchInput.fill(itemName);
      await this.page.keyboard.press("Enter");
    }

    async getRandomItem() {
      const items = JSON.parse(fs.readFileSync('items.json'));
      const randomIndex = Math.floor(Math.random() * items.length);
      return items[randomIndex];
    }

    async validateSearch(itemName) {
      try {
        await expect(this.page.locator(this.itemTitle)).toContainText(itemName);
        console.log("Search test passed");
      } catch (error) {
        throw new Error(`Item ${itemName} not found`);
      }
    }
}
  module.exports = SearchPage;
  