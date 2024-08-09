const mongoose = require("mongoose");
const userModal = require("../models/userModel");
exports.getUsers = async () => {
  const usersData = await userModal.find();
  console.log("users data", usersData);
  return usersData;
};

exports.createUser = async (users) => {
  await userModal
    .create(users)
    .then((data) => {
      console.log("data inserted,..", data);
      return { message: "users created" };
    })
    .catch((err) => {
      console.log("error while creating record", err);
    });
};

exports.updateUser = async (id, user) => {
  await userModal
    .findByIdAndUpdate(id, user)
    .then((data) => {return {message: "updated successfully"}})
    .catch((err) => console.log("error while updating", err));
};

exports.deleteUser = async (id) => {
    await userModal
    .findByIdAndDelete(id)
    .then((data) => {return {message: "user deleted successfully"}})
    .catch((err) => console.log("error while deleting user ", err));
}