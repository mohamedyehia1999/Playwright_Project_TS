import{test} from '@playwright/test';
import {HomePage} from '../pages/HomePage';
import {SearchPage} from '../pages/SearchPage';
import {ProductDetailsPage} from '../pages/ProductDetailsPage';
import {AddToWishlistPage} from '../pages/AddToWishlistPage';

const searchData= JSON.parse(JSON.stringify(require("../utils/SearchData.json")));
const wishlistData= JSON.parse(JSON.stringify(require("../utils/AddToWishlistData.json")));

test("User Can Add The Product To Wishlist",async({page})=>{
    const homePage= new HomePage(page);
    const searchPage = new SearchPage(page);
    const productDetailsPage = new ProductDetailsPage(page);
    const addToWishlistPage = new AddToWishlistPage(page);

    await homePage.goto();
    await searchPage.SearchForProduct(searchData.SearchItem);
    await searchPage.OpenProductDetails();

    await productDetailsPage.ClickOnAddToWishlistButton();
    await productDetailsPage.ValidateThatProductIsAddedSuccessfully();
    await  productDetailsPage.ClickOnWishlistLink();
    

    await addToWishlistPage.ValidateProductIsExistInWishlist();
    await addToWishlistPage.RemoveProductFromWishlist();
    await addToWishlistPage.ValidateProductIsRemovedFromWishlist(wishlistData.WishlistEmptyMessage);

});
