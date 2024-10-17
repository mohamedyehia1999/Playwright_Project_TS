import { expect , type Locator,type Page } from '@playwright/test';

export class ContactUsPage{
    page : Page;
    YourNameField: Locator;
    YourEmailField: Locator;
    EnquiryField: Locator;
    SubmitBtn: Locator;
    ContactUsResult: Locator;

    constructor(page:any){
        this.page=page;
        this.YourNameField=page.locator("#FullName");
        this.YourEmailField=page.locator("#Email");
        this.EnquiryField=page.locator("#Enquiry");
        this.SubmitBtn=page.locator(".button-1.contact-us-button");
        this.ContactUsResult=page.locator("div.result");
    }

    async UserCanPutContactInformation(YourName:any,YourEmail:any,Enquiry:any)
    {
        await this.YourNameField.fill(YourName);
        await this.YourEmailField.fill(YourEmail);
        await this.EnquiryField.fill(Enquiry);
        await this.SubmitBtn.click();
    }
    async ValidateThatYourContactUsIsSubmittedSuccessfully(){
        await expect(this.ContactUsResult).toBeVisible();
    }
}
