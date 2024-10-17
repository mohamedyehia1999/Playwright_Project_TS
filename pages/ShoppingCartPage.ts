import { expect , type Locator,type Page } from '@playwright/test';

export class ShoppingCartPage{
    page : Page;
    ProductName: Locator;
    ProductQuantityField: Locator;
    ProductPrice: Locator;
    RemovedProductBtn: Locator;
    UpdateShoppingCartBtn: Locator;
    NoDataFoundInShoppingCart: Locator;
    TermConditionBtn: Locator;
    CheckoutBtn: Locator;

    constructor(page: any){
        this.page=page;
        this.ProductName=page.locator("//a[@class='product-name']");
        this.ProductQuantityField=page.locator("//input[@id='itemquantity11295']");
        this.ProductPrice=page.locator("//span[@class='product-subtotal']");
        this.RemovedProductBtn=page.locator("//button[@class='remove-btn']");
        this.UpdateShoppingCartBtn=page.locator("#updatecart");
        this.NoDataFoundInShoppingCart=page.locator("//div[@class='no-data']");
        this.TermConditionBtn=page.locator("#termsofservice");
        this.CheckoutBtn=page.locator("#checkout");
    }
    async ValidateProductFoundInShoppingCart(){
        await expect(this.ProductName).toBeVisible();
    }
    async UpdateTheProductQuantity(Quantity:any){
       await this.ProductQuantityField.clear();
       await this.ProductQuantityField.fill(Quantity);
       await this.UpdateShoppingCartBtn.click();
    }
    async ValidateThatTheProductQuantityIsUpdated(ExpectedResult:any){
        await expect(this.ProductPrice).toContainText(ExpectedResult);
    }
    async  RemoveProductFromShoppingCart(){
        await this.RemovedProductBtn.click();
    }
    async  ValidateThatProductIsRemovedFromShoppingCart(ExpectedResult:any){
        await expect(this.NoDataFoundInShoppingCart).toHaveText(ExpectedResult);
    }

    async OpenCheckoutPage(){
        await this.TermConditionBtn.click();
        await this.CheckoutBtn.click();
    }
}