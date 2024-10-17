import{test} from '@playwright/test';
import {HomePage} from '../pages/HomePage';
import {LoginPage} from '../pages/LoginPage';
import {MyAccountPage} from '../pages/MyAccountPage';

const loginData= JSON.parse(JSON.stringify(require("../utils/LoginData.json")));
const changePasswordData= JSON.parse(JSON.stringify(require("../utils/MyAccountChangePasswordData.json")));

test('User Can Change Password Successfully',async({page})=>{
    const homePage= new HomePage(page);
    const loginPage= new LoginPage(page);
    const myAccountPage= new MyAccountPage(page);
    await homePage.goto();
    await homePage.OpenLoginPage();
    await loginPage.EnterLoginInformation(loginData.Email,loginData.Password);
    await loginPage.ValidateOnLoginSuccessfully();
    await loginPage.OpenMyAccountPage();
    await myAccountPage.EnterChangePasswordInformation(changePasswordData.OldPassword,changePasswordData.NewPassword);
    await myAccountPage.ValidateOnChangePasswordSuccess();
});