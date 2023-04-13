import express from "express";
import {
    login,
    register,
    infoUser,
    refreshToken,
    logout,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
// router.get("/protected", validateToken, infoUser);
// router.get("/refresh", refreshToken);
// router.get("/logout", logout);

export default router;
