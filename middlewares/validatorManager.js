import { body, param } from "express-validator";
import { validationResultExpress } from "./validationResultExpress.js";

export const bodyRegisterValidator = [
  body("email", "Email format wrong").trim().isEmail().normalizeEmail(),
  body("password", "Password must be at least 6 characters")
    .trim()
    .isLength({ min: 6 }),
  body("password", "Format password wrong").custom((value, { req }) => {
    if (value !== req.body.repassword) {
      throw new Error("passwords must be match");
    }
    return value;
  }),
  validationResultExpress,
];
export const bodyLoginValidator = [
  body("email", "Email format wrong").trim().isEmail().normalizeEmail(),
  body("password", "Must be at least 6 characters").trim().isLength({ min: 6 }),
  validationResultExpress,
];

export const paramNoteValidator = [
  param("id", "invalid format").trim().notEmpty().escape(),
  validationResultExpress,
];
