const express = require('express')
const router = express.Router();
const { getUsers, createUser, updateUser, deleteUser } = require("../controllers/userActions.js");
//Get API
router.get("/getUser", async (req, res) => {
  console.log('get api');
  const result = await getUsers();
  res.status(200).send({success: true, data: result})
});

//Post api to insert data

router.post("/saveUser", async (req, res) => {
  console.log('insert user', req.body);
  const result = await createUser(req.body);
  res.status(200).send({success: true, data: result})
});

router.put("/updateUser/:id", async (req, res) => {
  console.log('update user', req.body);
  const { id } = req.params;
  const result = await updateUser(id,req.body);
  res.status(200).send({success: true, data: result})
});

router.delete("/deleteUser/:id", async (req, res) => {
  console.log('delete user', req.params);
  const { id } = req.params;
  const result = await deleteUser(id);
  res.status(200).send({success: true, data: result})
})

module.exports = router;
