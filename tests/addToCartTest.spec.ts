import{test} from '@playwright/test';
import {HomePage} from '../pages/HomePage';
import {LoginPage} from '../pages/LoginPage';
import {SearchPage} from '../pages/SearchPage';
import {ProductDetailsPage} from '../pages/ProductDetailsPage';
import {ShoppingCartPage} from '../pages/ShoppingCartPage';


const loginData= JSON.parse(JSON.stringify(require("../utils/LoginData.json")));
const searchData= JSON.parse(JSON.stringify(require("../utils/SearchData.json")));
const shoppingData= JSON.parse(JSON.stringify(require("../utils/ShoppingCartData.json")));

test("User can Add The Product To Cart",async({page})=>{
    const homePage= new HomePage(page);
    const loginPage= new LoginPage(page);
    const searchPage = new SearchPage(page);
    const productDetailsPage = new ProductDetailsPage(page);
    const shoppingCartPage = new ShoppingCartPage(page);

    await homePage.goto();
    await homePage.OpenLoginPage();

    await loginPage.EnterLoginInformation(loginData.Email,loginData.Password)

    await searchPage.SearchForProduct(searchData.SearchItem);
    await searchPage.OpenProductDetails();

    await productDetailsPage.ClickOnAddToCartButton();
    await productDetailsPage.ClickOnShoppingCartLink();

    await shoppingCartPage.ValidateProductFoundInShoppingCart();
    await shoppingCartPage.RemoveProductFromShoppingCart();
    await shoppingCartPage.ValidateThatProductIsRemovedFromShoppingCart(shoppingData.RemovedSuccessMessage);

});
