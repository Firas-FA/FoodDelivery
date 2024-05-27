//* Importing Packages
const express = require("express");
const cors = require("cors");
const app = express();

//? Creating an Express router
const router = express.Router();

//* Importing the User model
const User = require("../../Models/UserModel");

//? Middlewares
app.use(express.json());
app.use(cors());

//* Importing Constants Messages
const {
  MISSING_FIELDS_ERROR,
  EMAIL_NOT_EXIST,
  LOGIN_SUCCESS,
  LOGIN_ERROR_MESSAGE,
  INCORRECT_PASSWORD_ERROR,
} = require("../../Constants/userLoginMessages");

//* Importing Functions Controller
const {
  checkForMissingFields,
  checkEmailExistence,
  generateJwtToken,
} = require("../../Controllers/UserControllers/userLoginController");

//? Login Route
router.post("/login", async (req, res) => {
  try {
    checkForMissingFields(req);

    const { userEmail, userPassword } = req.body;
    const existingUser = await checkEmailExistence(userEmail, userPassword);

    const userToken = await generateJwtToken(existingUser);

    res.status(200).json({
      message: LOGIN_SUCCESS,
      userToken: userToken,
    });
  } catch (error) {
    const statusCode =
      error.message === MISSING_FIELDS_ERROR ||
      error.message === EMAIL_NOT_EXIST ||
      error.message === INCORRECT_PASSWORD_ERROR
        ? 400
        : 500;
    res.status(statusCode).json({
      error: statusCode === 400 ? error.message : LOGIN_ERROR_MESSAGE.error,
    });
  }
});

//? Exporting the router
module.exports = router;
