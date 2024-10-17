import{test} from '@playwright/test';
import {HomePage} from '../pages/HomePage';
import {LoginPage} from '../pages/LoginPage';
import {SearchPage} from '../pages/SearchPage';
import {ProductDetailsPage} from '../pages/ProductDetailsPage';
import {ReviewPage} from '../pages/ReviewPage';


const loginData= JSON.parse(JSON.stringify(require("../utils/LoginData.json")));
const searchData= JSON.parse(JSON.stringify(require("../utils/SearchData.json")));
const reviewData= JSON.parse(JSON.stringify(require("../utils/ReviewData.json")));

test("User can Add Your Review On Product",async({page})=>{

    const homePage=new HomePage(page);
    const loginPage=new LoginPage(page);
    const searchPage=new SearchPage(page);
    const productDetailsPage=new ProductDetailsPage(page);
    const reviewPage=new ReviewPage(page);

    await homePage.goto();
    await homePage.OpenLoginPage();
    await loginPage.EnterLoginInformation(loginData.Email,loginData.Password);

    await searchPage.SearchForProduct(searchData.SearchItem);
    await searchPage.OpenProductDetails();

    await reviewPage.UserCanAddYourReview(reviewData.ReviewTitle,reviewData.ReviewText);
    await reviewPage.ValidateThatReviewIsAddSuccessfully();

});