// In MongoDB, you can perform database operations using
//  various methods provided by the MongoDB driver or ODM(Object Data Modeling) libraries
//  like Mongoose.Here’s how you can use these methods:

// Mongoose: Provides a higher - level abstraction and comes with built -in schema validation,
//data modeling, and other ODM(Object Data Modeling) features.It simplifies CRUD operations
// with models and has a rich API.

// Native MongoDB Driver: Offers a lower - level API to interact with MongoDB.
//  You work directly with the MongoDB query language and cursors.
require("dotenv").config();
const { MongoClient } = require("mongodb");
const { ObjectId } = require("mongodb");
const url = process.env.MONGO_URL;
console.log("MONGO_URL", process.env.MONGO_URL);
const dbName = "UsersCrud_db";
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect();
const db = client.db(dbName);

//example for findOne()
exports.findUser = (filter) => {
  const collection = db.collection("users");
  const result = collection.findOne(filter);
  return result;
};
//example for find()
exports.getUsers = async () => {
  const collection = db.collection("users");
  //find() returns an cursor so we need to convert that to array
  const result = collection.find().toArray();
  return result;
};

//example for insertOne()

exports.createUser = async (users) => {
  const collection = db.collection("users");
  const result = collection.insertOne(users);
  return { message: "User created successfully" };
};

//example for insertMany() to create more then one record

exports.createUser = async (users) => {
  const collection = db.collection("users");
  const result = collection.insertMany(users);
  return { message: "User created successfully" };
};

//updateOne

exports.updateUser = async (id, user) => {
  console.log("id in update user", id);
  const collection = db.collection("users");
  const result = collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: user }
  );
  return { message: "updated successfully" };
};

//to update multiple records

exports.updateManyUser = async (filter, user) => {
  console.log("id in update user", id);
  const collection = db.collection("users");
  const result = collection.updateMany(filter, { $set: user });
  return { message: "updated successfully" };
};

//to delete one record

exports.deleteUser = async (id) => {
  const collection = db.collection("users");
  collection.deleteOne({ _id: new ObjectId(id) });
  return { message: "user deleted successfully" };
};

//to delete multiple records

exports.deleteManyUser = async (filter) => {
  console.log('delete many function', filter)
  const collection = db.collection("users");
  collection.deleteMany(filter);
  return { message: "user deleted successfully" };
};
