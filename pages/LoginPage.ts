import { expect , type Locator,type Page } from '@playwright/test';

export class LoginPage{

    page:Page;
    email : Locator;
    password : Locator;
    loginBtn : Locator;
    myAccountLink : Locator;

    constructor(page:any){
        this.page=page;
        this.email=page.locator("#Email");
        this.password=page.locator("#Password");
        this.loginBtn=page.locator(".login-button");
        this.myAccountLink=page.locator(".ico-account");
    }

    async EnterLoginInformation(Email:any,Password:any){
        await this.email.fill(Email);
        await this.password.fill(Password);
        await this.loginBtn.click();
    }

    async ValidateOnLoginSuccessfully(){
        await expect(this.myAccountLink).toBeVisible() ;
    }

    async OpenMyAccountPage(){
        await this.myAccountLink.click();
    }
}
