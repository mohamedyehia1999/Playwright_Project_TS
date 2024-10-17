import{test} from '@playwright/test';
import {HomePage} from '../pages/HomePage';
import {ContactUsPage} from '../pages/ContactUsPage';

const contactData= JSON.parse(JSON.stringify(require("../utils/ContactUsData.json")));

test("User Can Add Your Contact Us Information Successfully",async({page})=>{
    const homePage = new HomePage(page);
    const contactUsPage = new ContactUsPage(page);

    await homePage.goto();
    await homePage.OpenContactUsPage();

    await contactUsPage.UserCanPutContactInformation(contactData.YourName,contactData.YourEmail,contactData.Enquiry);
    await contactUsPage.ValidateThatYourContactUsIsSubmittedSuccessfully();
});