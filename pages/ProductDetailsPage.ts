import { expect , type Locator,type Page } from '@playwright/test';


export class ProductDetailsPage {
    page:Page;
    AddToCartBtn : Locator;
    AddToWishlistBtn : Locator;
    AddToCompareListBtn : Locator;
    EmailAFriendBtn : Locator;
    WishlistLink : Locator;
    CompareListLink : Locator;
    SuccessMsg : Locator;
    ShoppingCartLink : Locator;

    constructor(page:any) {
        
        this.AddToCartBtn = page.locator(".add-to-cart-button");
        this.AddToWishlistBtn = page.locator("#add-to-wishlist-button-4");
        this.AddToCompareListBtn = page.locator("//div[@class='compare-products']//button[@type='button'][normalize-space()='Add to compare list']");
        this.EmailAFriendBtn = page.locator("//button[normalize-space()='Email a friend']");
        this.WishlistLink = page.locator("//a[normalize-space()='wishlist']");
        this.CompareListLink = page.locator("//a[normalize-space()='product comparison']");
        this.SuccessMsg = page.locator(".content");
        this.ShoppingCartLink = page.locator("//a[normalize-space()='shopping cart']");
    }

    async ClickOnEmailAFriendButton() {
    
        await this.EmailAFriendBtn.click();
    }

    async ClickOnAddToWishlistButton() {
        await this.AddToWishlistBtn.click();
    }

    async ClickOnAddToCompareListButton() {
        await this.AddToCompareListBtn.click();
    }

    async ClickOnWishlistLink() {
        await this.WishlistLink.click();
    }

    async ClickOnCompareListLink() {
        await this.CompareListLink.click();
    }

    async ClickOnAddToCartButton() {
        await this.AddToCartBtn.click();
    }

    async ClickOnShoppingCartLink() {
        await this.ShoppingCartLink.click();
    }

    async ValidateThatProductIsAddedSuccessfully() {
        await expect(this.SuccessMsg).toBeVisible();
    }
}
