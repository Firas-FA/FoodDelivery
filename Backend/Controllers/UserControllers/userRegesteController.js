const validator = require("validator");
const User = require("../../Models/UserModel");
const {
  REQUIRED_FIELD_ERROR,
  INVALID_EMAIL,
  DUPLICATE_EMAIL,
} = require("../../Constants/userRegisterMessages");

async function validateFields(req) {
  const { userName, userEmail, userPassword } = req.body;
  if (!userName || !userEmail || !userPassword) {
    throw new Error(REQUIRED_FIELD_ERROR);
  }
}

async function validateEmail(req) {
  const { userEmail } = req.body;
  if (!validator.isEmail(userEmail)) {
    throw new Error(INVALID_EMAIL);
  }
}

async function checkDuplicateEmail(req) {
  const { userEmail } = req.body;
  const existingUser = await User.findOne({ userEmail });
  if (existingUser) {
    throw new Error(DUPLICATE_EMAIL);
  }
}

module.exports = {
  validateFields,
  validateEmail,
  checkDuplicateEmail,
};
