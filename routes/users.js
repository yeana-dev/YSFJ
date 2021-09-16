import { Router } from "express";
import * as controllers from "../controllers/users.js";

const router = Router();

router.post("/sign-up", controllers.signUp);
router.post("/sign-in", controllers.signIn);
router.get("/verify", controllers.verify);

router.get('/users/:id', controllers.getUser)

// router.get('/users/:id/products', controllers.getUserProducts)
router.get('/users/:id/cart', controllers.getCart)
export default router;
