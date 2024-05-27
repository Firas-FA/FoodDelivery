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
async function validateFields(req) {
  const {
    foodItemName,
    description,
    price,
    oldPrice,
    category: categoryName,
    imageUrl,
  } = req.body;

  if (
    !foodItemName &&
    !description &&
    !price &&
    !oldPrice &&
    !categoryName &&
    !imageUrl
  ) {
    throw new Error("All fields are required ");
  } else {
    if (!foodItemName) {
      throw new Error("The 'foodItemName' field is required.");
    }
    if (!description) {
      throw new Error("The 'description' field is required.");
    }
    if (!price) {
      throw new Error("The 'price' field is required.");
    }
    if (!oldPrice) {
      throw new Error("The 'oldPrice' field is required.");
    }
    if (!categoryName) {
      throw new Error("The 'category' field is required.");
    }
    if (!imageUrl) {
      throw new Error("The 'imageUrl' field is required.");
    }
  }
}

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

// Route to create a new category
app.post("/categories", async (req, res) => {
  const { categoryName, description, imageUrl } = req.body;

  // Validate request body
  if (!categoryName || !description || !imageUrl) {
    return res.status(400).json({
      error: "All fields are required: categoryName, description, imageUrl",
    });
  }

  try {
    // Create new categor
    const newCategory = new Category({ categoryName, description, imageUrl });
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    // Handle validation errors and other errors
    if (error.name === "ValidationError") {
      res.status(400).json({ error: error.message });
    } else if (error.code === 11000) {
      // Handle duplicate key error
      res.status(400).json({ error: "Category name must be unique" });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
});
