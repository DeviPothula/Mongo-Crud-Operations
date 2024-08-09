const express = require("express");
const router = express.Router();
//Using mongoose ODM (object data model library)
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  findUser,
} = require("../controllers/userActions.js");

//Using Mongo Db Driver
// const {
//   getUsers,
//   findUser,
//   createUser,
//   updateUser,
//   deleteUser,
//   deleteManyUser,
// } = require("../controllers/crudoperationsUsingMongoDbDriver");

//findUser
router.post("/findUser", async (req, res) => {
  try {
    console.log("finduser api");
    console.log("filters", req.body);
    const result = await findUser(req.body);
    console.log("result in find usre", result);
    res.status(200).send({ success: true, data: result });
  } catch (err) {
    console.log("error in find api", err);
    throw new Error("Something went wrong");
  }
});

//Get API
router.get("/getUser", async (req, res) => {
  try {
    console.log("get api");
    const result = await getUsers();
    console.log("result,,,", result);
    res.status(200).send({ success: true, data: result });
  } catch (err) {
    console.log("error inf get users ", err);
    throw new Error("something went wrong");
  }
});

//Post api to insert data

router.post("/saveUser", async (req, res) => {
  try {
    console.log("insert user", req.body);
    const result = await createUser(req.body);
    res.status(200).send({ success: true, data: result });
  } catch (err) {
    console.log("error in save user", err);
    throw new Error("something went wrong");
  }
});

router.put("/updateUser/:id", async (req, res) => {
  try {
    console.log("update user", req.body);
    const { id } = req.params;
    const result = await updateUser(id, req.body);
    res.status(200).send({ success: true, data: result });
  } catch (err) {
    console.log("error in update users", err);
    throw new Error("something went wrong");
  }
});

//example for delete many

// router.delete("/deleteUser/:firstName", async (req, res) => {
//   try {
//     console.log("delete user", req.params);
//     const { firstName } = req.params;
//     const result = await deleteManyUser(req.params);
//     res.status(200).send({ success: true, data: result });
//   } catch (err) {
//     console.log("error in delete user", err);
//     throw new Error("something went wrong");
//   }
// });

router.delete("/deleteUser/:id", async (req, res) => {
  try {
    console.log("delete user", req.params);
    const { id } = req.params;
    const result = await deleteUser(id);
    res.status(200).send({ success: true, data: result });
  } catch (err) {
    console.log("error in delete user", err);
    throw new Error("something went wrong");
  }
});
module.exports = router;
