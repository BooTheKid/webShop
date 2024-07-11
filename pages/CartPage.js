class CartPage {
  constructor(page) {
    this.page = page;
    this.deleteFromCart = this.page.getByRole("button", {name: "Delete from the Cart"});
    this.viewCart = this.page.getByRole("button", {name: "Cart"});
    this.itemDetail = this.page.locator("div.item").first();
    this.addToCart = this.page.getByRole("button", {name: "Add to the Cart"});
  }

  async addToCart() {
    await this.itemDetail.click();
    await this.addToCart.waitFor("visible");
    await this.addToCart.click();
  } 
  
  async openCartView() {
   await this.viewCart.click()
  }

  getCartItemsCount = async () => {
    await this.cartProductsCount.waitFor("visible");
    const countProd = await this.cartProductsCount.textContent();
    return parseInt(countProd.trim(), 10);
  };
  
  async deleteFromCart(){
    await this.deleteFromCart();
  }


}
module.exports = CartPage;
