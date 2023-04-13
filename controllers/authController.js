import { User } from "../models/User.js";
import { create, getEmail } from "../services/userService.js";

export const register = async (req, res) => {
  
  // res.json({ok: "login rey"})
  try {
    const { email, password } = req.body;
    console.log(email);
    let exist = await getEmail(email);
    if (exist) throw new Error("this Email already exists");
    console.log(exist);
    
    const user = new User({ email, password });
    console.log(user);
    
    await create(user);
    res.status(201).json({ user: user });
  } catch (error) {
    return res.status(403).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  res.json({ ok: "login rey" });
};

export const infoUser = async (req, res) => {};

export const refreshToken = (req, res) => {};

export const logout = (req, res) => {};
