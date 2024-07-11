
class NavigationPage {
  constructor(page) {
    this.page = page;
    this.categoryMenu = this.page.getByRole("button", {name: "Menu"});
    this.categoryButton = this.page.locator("a.product")
    this.itemTitle = this.page.locator("span.category");
  }

  async navigateToCategory(category) {
    await this.categoryMenu.hover();
    const CategoryButton = await this.categoryButton.hasText(category.name);
    CategoryButton.click();
  }
async validateCategory(category){
    try {
        await expect(categoryTitle).toBe(category.name);
        console.log("Category test passed");
      } catch (error) {
        throw new Error(`Category ${category.name} not found`);
      }
}
}

module.exports = NavigationPage;