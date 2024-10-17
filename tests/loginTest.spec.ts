import{test} from '@playwright/test';
import {HomePage} from '../pages/HomePage';
import {LoginPage} from '../pages/LoginPage';

const loginData= JSON.parse(JSON.stringify(require("../utils/LoginData.json")));

test('User Can Login Successfully',async({page})=>{
    const homePage= new HomePage(page);
    const loginPage= new LoginPage(page);
    await homePage.goto();
    await homePage.OpenLoginPage();
    await loginPage.EnterLoginInformation(loginData.Email,loginData.Password);
    await loginPage.ValidateOnLoginSuccessfully();
});