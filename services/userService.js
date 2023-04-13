import { User } from "../models/User.js";

export const log_in = async (user) => {
  return await User.find(); // login here. validations in controller
};
export const create = async (user) => {
  return await user.save();
};
export const getEmail = async (email) => {
  const mail = await User.findOne({email});
  if (mail) {
    return true;
  }
  return false;
};
