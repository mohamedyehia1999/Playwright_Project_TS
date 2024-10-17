import { expect , type Locator,type Page } from '@playwright/test';

export class RegisterPage{

    page:Page;
    genderMale : Locator;
    firstName : Locator;
    lastName : Locator;
    dayOfBirthday : Locator;
    monthOfBirthday : Locator;
    yearOfBirthday : Locator;
    email : Locator;
    password : Locator;
    confirmPassword : Locator;
    registerBtn : Locator;
    registerMsg : Locator;

    constructor(page: any){
        this.page=page;
        this.genderMale=page.locator("span.male");
        this.firstName=page.locator("#FirstName");
        this.lastName=page.locator("#LastName");
        this.dayOfBirthday=page.locator("//select[@name='DateOfBirthDay']");
        this.monthOfBirthday=page.locator("//select[@name='DateOfBirthMonth']");
        this.yearOfBirthday=page.locator("//select[@name='DateOfBirthYear']");
        this.email=page.locator("#Email");
        this.password=page.locator("#Password");
        this.confirmPassword=page.locator("#ConfirmPassword");
        this.registerBtn=page.locator("#register-button");
        this.registerMsg=page.locator(".result");
    }
    async EnterRegisterationInformation(firstname:any,lastname:any,Day:any,Month:any,Year:any,Email:any,Password:any,ConfirmtionPassword:any)
    {
       await this.genderMale.click();
       await this.firstName.fill(firstname);
       await this.lastName.fill(lastname);
       await this.dayOfBirthday.selectOption(Day);
       await this.monthOfBirthday.selectOption(Month);
       await this.yearOfBirthday.selectOption(Year);
       await this.email.fill(Email);
       await this.password.fill(Password);
       await this.confirmPassword.fill(ConfirmtionPassword);
       await this.registerBtn.click();
    }
    async VerifyThatRegisterIsDoneSuccessfully(){
        await expect(this.registerMsg).toContainText("Your registration completed");
    }
}
