//* Importing Packages
const express = require("express");
const cors = require("cors");

//? Creating an Express router
const router = express.Router();

const app = express();

//* Importing the User model
const User = require("../../Models/UserModel");

//? Middlewares
app.use(express.json());
app.use(cors());


