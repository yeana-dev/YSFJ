import { Router } from "express";
import * as controllers from "../controllers/users.js";

const router = Router();

router.post("/sign-up", controllers.signUp);
router.post("/sign-in", controllers.signIn);
router.get("/verify", controllers.verify);
// router.post('/change-password', controllers.changePassword)

// router.get('/users/:id/cart', controllers.getUserCart)
// router.put('/users/:id/cart/:productId', controllers.updateUserCart)
export default router;
