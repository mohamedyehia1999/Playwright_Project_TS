import{test} from '@playwright/test';
import {HomePage} from '../pages/HomePage';
import {LoginPage} from '../pages/LoginPage';
import {SearchPage} from '../pages/SearchPage';
import {ProductDetailsPage} from '../pages/ProductDetailsPage';
import {EmailFriendPage} from '../pages/EmailFriendPage';


const loginData= JSON.parse(JSON.stringify(require("../utils/LoginData.json")));
const searchData= JSON.parse(JSON.stringify(require("../utils/SearchData.json")));
const emailData= JSON.parse(JSON.stringify(require("../utils/EmailAFriendData.json")));

test("User can Send Message For Email A Friend",async({page})=>{
    const homePage=new HomePage(page);
    const loginPage=new LoginPage(page);
    const searchPage=new SearchPage(page);
    const productDetailsPage=new ProductDetailsPage(page);
    const emailFriendPage=new EmailFriendPage(page);
    await  homePage.goto();
    await  homePage.OpenLoginPage();
    await loginPage.EnterLoginInformation(loginData.Email,loginData.Password);
    await searchPage.SearchForProduct(searchData.SearchItem);
    await searchPage.OpenProductDetails();
    await productDetailsPage.ClickOnEmailAFriendButton();
    await  emailFriendPage.UserCanSendMessageForFriendEmail(emailData.FriendEmail,emailData.PersonalMessage);
    await emailFriendPage.ValidateThatMessageIsSentSuccessfully();
});