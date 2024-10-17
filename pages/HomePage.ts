import { type Locator,type Page } from '@playwright/test';
export class HomePage{
    page:Page;
    RegisterLink : Locator;
    LoginLink : Locator;
    ContactLink : Locator;
    capatchaBtn : Locator
    constructor(page:any){
        this.page=page;
        this.capatchaBtn=page.locator("//input[@type='checkbox']");
        this.RegisterLink=page.locator("//a[@class='ico-register']");
        this.LoginLink=page.locator("//a[@class='ico-login']");
        this.ContactLink=page.locator("//a[normalize-space()='Contact us']");
}
async goto(){
    await this.page.goto("https://demo.nopcommerce.com/");
    await this.capatchaBtn.check();
    return this;
}
async OpenReisterPage(){
    await  this.RegisterLink.click();
}

async OpenLoginPage(){
    await this.LoginLink.click();
}
async OpenContactUsPage(){
    await this.ContactLink.click();
}
}
