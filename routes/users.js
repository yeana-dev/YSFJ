import { Router } from "express";
import * as controllers from "../controllers/users.js";

const router = Router();

router.post("/sign-up", controllers.signUp);
router.post("/sign-in", controllers.signIn);
router.get("/verify", controllers.verify);

router.get('/users/:id', controllers.getUser)

router.get('/users/:id/cart', controllers.getCart)
router.delete('/users/:id/products/:productId', controllers.deleteCartItem)

export default router;
