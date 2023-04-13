import { User } from "../models/User.js";

export const log_in = async (user) => {
  return await User.find();// login here. validations in controller
};
export const create = async (user) => {
  return await User.create(user);
};
