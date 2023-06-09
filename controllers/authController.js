import { User } from "../models/User.js";
import { generateRefreshToken, generateToken } from "../utils/tokenManager.js";

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });

    if (user) throw new Error("this Email already exists");

    user = new User({ email, password });

    await user.save();

    //jwt
    const { token, expiresIn } = generateToken(user.id);
    generateRefreshToken(user.id, res);

    return res.status(201).json({ user: user });
  } catch (error) {
    return res.status(403).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });
    if (!user) return res.status(403).json({ error: "user or pass wrong" });

    const respuestaPassword = await user.comparePassword(password);
    if (!respuestaPassword)
      return res.status(403).json({ error: "user or pass wrong" });

    // Generate token jwt
    const { token, expiresIn } = generateToken(user.id);
    generateRefreshToken(user.id, res);

    return res.json({ token, expiresIn });

  } catch (error) {

    console.log(error);
    return res.status(500).json({ error: "Server error" });
  }
};

export const infoUser = async (req, res) => {
  try {
    const user = await User.findById(req.uid).lean();
    return res.json({ email: user.email, uid: user.id });
  } catch (error) {
    return res.status(500).json({ error: "server error" });
  }
};

export const refreshToken = (req, res) => {
  try {

    const { token, expiresIn } = generateToken(req.uid);
    return res.json({ token, expiresIn });

  } catch (error) {

    return res.status(500).json({ error: "server error" });
     
  }
};
export const logout = (req, res) => {
  res.clearCookie("refreshToken");
  res.json({ ok: true });
};


