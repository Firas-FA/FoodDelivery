//* Importing Packages
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
//* Importing Packages *\\

const User = require("./Models/UserModel");
const FoodItem = require("./Models/FoodItemModel");
const Category = require("./Models/CategoryMpdel");
//? Creating Express application
const app = express();

//* Importing  Routes
const userRegisterRoute = require("./Routes/UserRoutes/RegesterRoute");
const userLoginRoute = require("./Routes/UserRoutes/LoginRoute");
const createCategoryRoute = require("./Routes/Categories/CreateCategoryRoute");
//* Importing  Routes *\\

//? Middlewares
app.use(express.json());
app.use(cors());
//? Middlewares ؟\\

//* Port configuration

//! Connect to MongoDB and Start The Server
mongoose
  .connect(`mongodb://127.0.0.1/${process.env.DB_NAME}`)
  .then(() => {
    console.log("\nMongoDB connected...");

    //? Starting the server after successful database connection
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
//! Connect to MongoDB and Start The Server 1\\

//! Using Routes

//? User Registr Route
app.use("", userRegisterRoute);

//? User Login Route
app.use("", userLoginRoute);

//? Create Category Route
app.use("", createCategoryRoute);
//! Using Routes !\\

// //? Add New FoodItem Route
// app.post("/foodItems", async (req, res) => {
//   const { categoryName } = req.body;

//   const category = Category.findOne({ categoryName });

//   try {
//     await validateFields(req);
//     const foodItem = new FoodItem(req.body);
//     await foodItem.save();
//     res.status(201).json({ foodItem });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });
