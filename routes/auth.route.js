import express from "express";
import { bodyRegisterValidator, bodyLoginValidator } from "../middlewares/validatorManager.js";
import { body } from "express-validator";
import {
  login,
  register,
  infoUser,
  refreshToken,
  logout,
} from "../controllers/authController.js";


const router = express.Router();

router.post("/login",bodyLoginValidator, login);

router.post("/register", bodyRegisterValidator, register);
// router.get("/protected", validateToken, infoUser);
// router.get("/refresh", refreshToken);
// router.get("/logout", logout);

export default router;
