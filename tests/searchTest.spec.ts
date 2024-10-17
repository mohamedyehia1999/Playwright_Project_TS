import{test} from '@playwright/test';
import {HomePage} from '../pages/HomePage';
import {SearchPage} from '../pages/SearchPage';


const searchData= JSON.parse(JSON.stringify(require("../utils/SearchData.json")));

test("User Can make Search For Product Successfully",async({page})=>{
    const homePage= new HomePage(page);
    const searchPage= new SearchPage(page);
    await homePage.goto();
    await searchPage.SearchForProduct(searchData.SearchItem);
    await searchPage.ValidateThatSearchResultISSameAsSearchItem();
    await searchPage.OpenProductDetails();
});