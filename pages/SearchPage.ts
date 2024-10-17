import { expect , type Locator,type Page } from '@playwright/test';

export class SearchPage{

    page : Page;
    searchBoxTxt: Locator;
    searchBtn: Locator;
    searchResult: Locator;
    

    constructor(page:any){
        this.page=page;
        this.searchBoxTxt=page.locator("#small-searchterms");
        this.searchBtn=page.locator(".search-box-button");
        this.searchResult=page.locator("//h2[@class='product-title']//a[contains(text(),'Apple MacBook Pro 13-inch')]");
    }
    async SearchForProduct(productName:any){
        await this.searchBoxTxt.fill(productName);
        await this.searchBtn.click();
    }
    
    async ValidateThatSearchResultISSameAsSearchItem(){
        await expect(this.searchResult).toContainText("Apple MacBook Pro 13-inch");
    }
    async OpenProductDetails(){
       await this.searchResult.click();
    } 
}
