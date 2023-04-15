import jwt from "jsonwebtoken";
import { tokenVerificationErrors } from "../utils/tokenManager.js";

export const requireToken = (req, res, next) => {
    try {
        let token = req.headers?.authorization;

        if (!token) throw new Error("No token");

        token = token.split(" ")[1];//select second string(1) separated by split method with space
        const { uid } = jwt.verify(token, process.env.JWT);

        req.uid = uid;//this create a new atrib uid for controller

        next();
    } catch (error) {
        console.log(error.message);
        return res
            .status(401)
            .send({ error: tokenVerificationErrors[error.message] });
    }
};