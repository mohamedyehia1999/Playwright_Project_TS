import { expect , type Locator,type Page } from '@playwright/test';


export class MyAccountPage{
    page:Page;
    changePasswordLink : Locator;
    oldPasswordField : Locator;
    newPasswordField : Locator;
    confirmNewPasswordField : Locator;
    changePasswordBtn : Locator;
    successMsg : Locator;

    constructor(page:any){
        this.page=page;
        this.changePasswordLink=page.locator("//a[normalize-space()='Change password']");
        this.oldPasswordField=page.locator("#OldPassword");
        this.newPasswordField=page.locator("#NewPassword");
        this.confirmNewPasswordField=page.locator("#ConfirmNewPassword");
        this.changePasswordBtn=page.locator(".change-password-button");
        this.successMsg=page.locator(".content");
    
    }
    async EnterChangePasswordInformation(OldPassword:any , NewPassword:any){
        await  this.changePasswordLink.click();
        await  this.oldPasswordField.fill(OldPassword);
        await  this.newPasswordField.fill(NewPassword);
        await  this.confirmNewPasswordField.fill(NewPassword);
        await this.changePasswordBtn.click();
    }
    
    async ValidateOnChangePasswordSuccess(){
        await expect(this.successMsg).toContainText("Password was changed");
    }
    }
    
