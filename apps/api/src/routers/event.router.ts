import { EventController } from "@/controllers/event.controller";
import { uploader } from "@/lib/uploader";
import { verifyToken } from "@/middlewares/verifyToken";
import { Router } from "express";

export class EventRouter {
    private router: Router;
    private eventController: EventController

    constructor(){
        this.eventController = new EventController();
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.router.post(
            "/",
            // verifyToken,
            uploader("IMG", "/images").array("thumbnail",1),
            this.eventController.createEvent,
        );
        this.router.get("/:id",this.eventController.getEvent);
    }
    getRouter(): Router{
        return this.router
    }
}