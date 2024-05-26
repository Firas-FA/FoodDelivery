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

//? Importing Constants Messages and Controllers
const {
  SUCCESSFUL_REGISTRATION_MESSAGE,
  ACCOUNT_CREATION_FAILURE,
} = require("../../Constants/userRegisterMessages");

const {
  validateFields,
  validateEmail,
  checkDuplicateEmail,
} = require("../../Controllers/UserControllers/userRegesteController");

//? Register Route
router.post("/register", async (req, res) => {
  try {
    await validateFields(req);

    await validateEmail(req);

    await checkDuplicateEmail(req);

    //? Creating new User Instance
    const newUser = new User({
      userName: req.body.userName,
      userEmail: req.body.userEmail,
      userPassword: req.body.userPassword,
    });
    //? Saving the new user to the database
    await newUser.save();

    //? Sending success response
    res
      .status(201)
      .json({ message: SUCCESSFUL_REGISTRATION_MESSAGE, user: newUser });
  } catch (error) {
    res
      .status(400)
      .json({ error: ACCOUNT_CREATION_FAILURE, details: error.message });
  }
});

//? Exporting the router
module.exports = router;
