const mongoose = require("mongoose");
const userModal = require("../models/userModel");

exports.findUser = (filter) => {
  const result = userModal.find(filter);
  return result;
};

exports.getUsers = async () => {
  const result = userModal.find();
  return result;
};

exports.createUser = async (users) => {
  const result = await userModal.create(users);
  return { message: "User created successfully" };
};

exports.updateUser = async (id, user) => {
  const result = await userModal.findByIdAndUpdate(id, user);
  return { message: "updated successfully" };
};

exports.deleteUser = async (id) => {
  await userModal.findByIdAndDelete(id);
  return { message: "user deleted successfully" };
};
