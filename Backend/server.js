//* Importing Packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//* Importing Packages *\\

//? Creating Express application
const app = express();

//* Importing  Routes
const userRegisterRoute = require("./Routes/UserRoutes/RegesterRoute");
//* Importing  Routes *\\

//? Middlewares
app.use(express.json());
app.use(cors());
//? Middlewares ؟\\

//* Port configuration
const _PORT = 5000;

//? Defining  DataBase Name
const dbName = "FoodDelivery";

//! Connect to MongoDB and Start The Server
mongoose
  .connect(`mongodb://localhost/${dbName}`)
  .then(() => {
    console.log("\nMongoDB connected...");

    //? Starting the server after successful database connection
    app.listen(_PORT, () => {
      console.log(`Server is running on http://localhost:${_PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
//! Connect to MongoDB and Start The Server 1\\

//! Using Routes

//? User Registr Route
app.use("", userRegisterRoute);

//! Using Routes !\\
