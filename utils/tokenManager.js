import jwt from "jsonwebtoken";

export const generateToken = (uid) => {
    const expiresIn = 60 * 15;

    try {
        const token = jwt.sign({ uid }, process.env.JWT, { expiresIn });
        return { token, expiresIn };
    } catch (error) {
        console.log(error);
    }
};

export const generateRefreshToken = (uid, res) => {
    const expiresIn = 60 * 60 * 24 * 30;
    try {
        const refreshToken = jwt.sign({ uid }, process.env.JWT_REF, {
            expiresIn,
        });

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: !(process.env.MODO === "dev"),
            expires: new Date(Date.now() + expiresIn * 1000),
            sameSite: "none",
        });
        // res.cookie("refreshToken", refreshToken, {
        //     httpOnly: true,
        //     secure: true,
        //     expires: new Date(Date.now() + expiresIn * 1000),
        // });
    } catch (error) {
        console.log(error);
    }
};


export const tokenVerificationErrors = {
    "invalid signature": "La firma del JWT no es válida",
    "jwt expired": "JWT expirado",
    "invalid token": "Token no válido",
    "No token": "Utiliza formato Bearer",
    "jwt malformed": "JWT formato no válido",
};
