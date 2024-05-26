const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: [true, "Category name is required"],
      unique: true,
      trim: true,
      minlength: [3, "Category name must be at least 3 characters long"],
      maxlength: [50, "Category name must be at most 50 characters long"],
    },
    description: {
      type: String,
      required: [true, "Category description is required"],
      trim: true,
      minlength: [
        10,
        "Category description must be at least 10 characters long",
      ],
      maxlength: [
        500,
        "Category description must be at most 500 characters long",
      ],
    },
    imageUrl: {
      type: String,
      match: [
        /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/,
        "Image URL must be a valid URL and end with an image extension",
      ],
    },
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
