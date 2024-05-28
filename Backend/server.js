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

// Add New FoodItem Route
app.post("/foodItems", async (req, res) => {
  try {
    const {
      categoryName,
      foodItemName,
      description,
      price,
      oldPrice,
      imageUrl,
      ingredients,
      ratings,
    } = req.body;

    // Check if foodItemName is provided and is not null or empty
    if (!foodItemName || !foodItemName.trim()) {
      return res
        .status(400)
        .send({ error: "Food item name is required and cannot be empty" });
    }

    // Check if the category exists
    const category = await Category.findOne({
      categoryName: categoryName.trim(),
    });
    if (!category) {
      return res.status(400).send({ error: "This Category does not exist" });
    }

    // Check if the Food Item exists
    const existingFoodItem = await FoodItem.findOne({
      foodItemName: foodItemName.trim(),
    });
    if (existingFoodItem) {
      return res.status(400).send({ error: "Food item name already exists" });
    }

    // Create new food item
    const foodItem = new FoodItem({
      foodItemName,
      description,
      price,
      oldPrice,
      imageUrl,
      ingredients,
      ratings,
      categoryName: categoryName.trim(),
    });

    await foodItem.save();
    res.status(201).send(foodItem);
  } catch (error) {
    console.error("Error:", error);
    if (error.code === 11000) {
      res.status(400).send({ error: "Duplicate food item name" });
    } else {
      res.status(400).send({ error: error.message });
    }
  }
});
