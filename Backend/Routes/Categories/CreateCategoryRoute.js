//* Importing Packages
const express = require("express");
const cors = require("cors");

//? Creating an Express router
const router = express.Router();

const app = express();

//* Importing the User model
const Category = require("../../Models/CategoryMpdel");

//? Middlewares
app.use(express.json());
app.use(cors());

const {
  validateRequestBody,
  // validateImageUrl,
  checkCategoryExists,
} = require("../../Controllers/Categories/CreateCategoryController");

router.post("/categories", async (req, res) => {
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

module.exports = router;
