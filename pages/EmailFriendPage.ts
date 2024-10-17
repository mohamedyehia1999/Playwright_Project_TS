import { expect , type Locator,type Page } from '@playwright/test';


export class EmailFriendPage{
    page : Page;
    FriendEmailField: Locator;
    YourEmailAddressField: Locator;
    PersonalMessageField: Locator;
    SendEmailBtn: Locator;
    sendResult: Locator;
   

    constructor(page:any){
        this.page=page;
        this.FriendEmailField=page.locator("#FriendEmail");
        this.YourEmailAddressField=page.locator("#YourEmailAddress");
        this.PersonalMessageField=page.locator("#PersonalMessage");
        this.SendEmailBtn=page.locator(".send-email-a-friend-button");
        this.sendResult=page.locator(".result");
    }

    async UserCanSendMessageForFriendEmail(FriendEmail:any,PersonalMessage:any){
        await this.FriendEmailField.fill(FriendEmail);
        await this.PersonalMessageField.fill(PersonalMessage);
        await this.SendEmailBtn.click();
    }
    async ValidateThatMessageIsSentSuccessfully(){
        await expect (this.sendResult).toBeVisible();
    }
}
