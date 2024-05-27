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

const validateRequestBody = (categoryName, description, imageUrl, language) => {
  if (!categoryName || !description || !imageUrl) {
    return "All fields are required: categoryName, description, imageUrl";
  }
  return null;
};

// const validateImageUrl = (imageUrl) => {
//   const urlPattern = /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/;
//   if (!urlPattern.test(imageUrl)) {
//     return "Image URL must be a valid URL and end with an image extension";
//   }
//   return null;
// };

const checkCategoryExists = async (categoryName) => {
  const existingCategory = await Category.findOne({ categoryName });
  if (existingCategory) {
    return "Category name must be unique";
  }
  return null;
};

app.post("/categories", async (req, res) => {
  const { categoryName, description, imageUrl, language } = req.body;

  //؟ Validate request body
  const bodyError = validateRequestBody(categoryName, description, imageUrl);
  if (bodyError) {
    return res.status(400).json({ error: bodyError });
  }

  // // Validate image URL format
  // const imageError = validateImageUrl(imageUrl);
  // if (imageError) {
  //   return res.status(400).json({ error: imageError });
  // }

  try {
    // Check if category already exists
    const categoryError = await checkCategoryExists(categoryName);
    if (categoryError) {
      return res.status(400).json({ error: categoryError });
    }

    // Create new category
    const newCategory = new Category({
      categoryName,
      description,
      imageUrl,
    });
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    // Handle validation errors and other errors
    if (error.name === "ValidationError") {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
});
