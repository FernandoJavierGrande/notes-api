import { Router } from "express";
import {
  bodyRegisterValidator,
  bodyLoginValidator,
} from "../middlewares/validatorManager.js";
import { body } from "express-validator";
import {
  login,
  register,
  infoUser,
  refreshToken,
  logout,
} from "../controllers/authController.js";
import { requireToken } from "../middlewares/requireToken.js";
import { requireRefreshToken } from "../middlewares/requireRefreshToken.js";

const router = Router();

router.post("/register", bodyRegisterValidator, register);
router.post("/login", bodyLoginValidator, login);

router.get("/protected", requireToken, infoUser);
router.get("/refresh", requireRefreshToken, refreshToken);
router.get("/logout", logout);

export default router;
