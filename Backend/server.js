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

//? Add New FoodItem Route
app.post("/foodItems", async (req, res) => {
  try {
    async function validateFields(req) {
      const { foodItemName, description, price, oldPrice, category, imageUrl } =
        req.body;
      if (
        !foodItemName ||
        !description ||
        !price ||
        !oldPrice ||
        !category ||
        !imageUrl
      ) {
        throw new Error("REQUIRED FIELD");
      }
    }
    const foodItem = new FoodItem(req.body);
    await foodItem.save();
    res.status(201).json({ foodItem });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
