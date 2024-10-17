import{test} from '@playwright/test';
import {HomePage} from '../pages/HomePage';
import {RegisterPage} from '../pages/RegisterPage';


const registerData=JSON.parse(JSON.stringify(require("../utils/RegisterData.json")));
test('User Can Register Successfully',async({page})=>{
    const homePage= new HomePage(page);
    const registerPage=new RegisterPage(page);
    await homePage.goto();
    await homePage.OpenReisterPage();
    await registerPage
    .EnterRegisterationInformation(registerData.Firstname,registerData.Lastname,registerData.day,registerData.month,registerData.year,registerData.Email,registerData.Password,registerData.Password);
    await registerPage.VerifyThatRegisterIsDoneSuccessfully();
   
});