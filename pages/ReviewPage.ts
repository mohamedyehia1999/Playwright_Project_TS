import { expect , type Locator,type Page } from '@playwright/test';

export class ReviewPage{
    page : Page;
    ReviewTitleField: Locator;
    ReviewTextField: Locator;
    RatingRatio: Locator;
    SubmitReviewBtn: Locator;
    ProductReviewResult: Locator;

    constructor(page: any){
        this.page=page;
        this.ReviewTitleField=page.locator("#AddProductReview_Title");
        this.ReviewTextField=page.locator("#AddProductReview_ReviewText");
        this.RatingRatio=page.locator("#addproductrating_4");
        this.SubmitReviewBtn=page.locator("#add-review");
        this.ProductReviewResult=page.locator("p.content");
    }
    async UserCanAddYourReview(ReviewTitle:any,ReviewText:any){
        await this.ReviewTitleField.fill(ReviewTitle);
        await this.ReviewTextField.fill(ReviewText);
        await this.RatingRatio.click();
        await this.SubmitReviewBtn.click();
    }
    async ValidateThatReviewIsAddSuccessfully(){
        await expect(this.ProductReviewResult).toBeEnabled();
    }
}
