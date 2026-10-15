import { Router } from "express";
import UserControllers from "../controllers/UserControllers.js";

const router = new Router()

// router.get("/users");
// router.get("/user/:id");
router.post("/registration", UserControllers.registration);
// router.path("/user/:id");
// router.delete("/user/:id");

export default router;