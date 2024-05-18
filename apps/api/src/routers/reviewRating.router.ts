import { ReviewRatingController } from "@/controllers/reviewRating.controller";
import { Router } from "express";

export class ReviewRatingRouter {
    private router: Router;
    private reviewRatingController: ReviewRatingController;

    constructor() {
        this.reviewRatingController = new ReviewRatingController();
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() : void {
        this.router.post("/review", this.reviewRatingController.createReviewRatingController);
        this.router.get("/", this.reviewRatingController.getReviewRatingController);
        this.router.get("/id", this.reviewRatingController.getReviewRatingByIdController);


    }

    getRouter(): Router {
        return this.router;
      }
}