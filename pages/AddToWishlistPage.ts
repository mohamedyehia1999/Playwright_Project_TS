import { expect , type Locator,type Page } from '@playwright/test';
export class AddToWishlistPage{
    page : Page;
    UpdateCartBtn: Locator;
    RemoveFromCartBtn: Locator;
    ProductInWishlistName: Locator;
    NoDataFoundInWishlist: Locator;
    

    constructor(page: any){
        this.page=page;
        this.UpdateCartBtn=page.locator("#updatecart");
        this.RemoveFromCartBtn=page.locator("//button[@class='remove-btn']");
        this.ProductInWishlistName=page.locator("//a[@class='product-name']");
        this.NoDataFoundInWishlist=page.locator("div.no-data");
    }
    async ValidateProductIsExistInWishlist(){
        await expect (this.ProductInWishlistName).toBeVisible();
    }
    async RemoveProductFromWishlist(){
        await this.RemoveFromCartBtn.click();
    }
    async ValidateProductIsRemovedFromWishlist(ExpectedResult: any){
    
        await expect(this.NoDataFoundInWishlist).toContainText(ExpectedResult);
    }
}
