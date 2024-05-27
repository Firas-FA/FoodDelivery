const mongoose = require("mongoose");

const foodItemSchema = new mongoose.Schema(
  {
    foodItemName: {
      type: String,
      required: [true, "food Item Name is required"],
      unique: true,
      trim: true,
      minlength: [3, "Name must be at least 3 characters long"],
      maxlength: [100, "Name must be at most 100 characters long"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      minlength: [10, "Description must be at least 10 characters long"],
      maxlength: [500, "Description must be at most 500 characters long"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price must be at least 0"],
    },
    oldPrice: {
      type: Number,
      min: [0, "Old price must be at least 0"],
      validate: {
        validator: function (v) {
          // `this` refers to the current document
          return v >= this.price;
        },
        message: "Old price must be greater than or equal to the current price",
      },
    },
    categoryName: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
      minlength: [3, "Category must be at least 3 characters long"],
      maxlength: [50, "Category must be at most 50 characters long"],
    },
    imageUrl: {
      type: String,
      required: [true, "Image URL is required"],
      match: [
        /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/,
        "Image URL must be a valid URL and end with an image extension",
      ],
    },
    ingredients: {
      type: [String],
      validate: {
        validator: function (v) {
          return v.every((ingredient) => ingredient.trim().length > 0);
        },
        message: "Each ingredient must be a non-empty string",
      },
      default: [],
    },
    ratings: {
      type: Number,
      default: 0,
      min: [0, "Ratings must be at least 0"],
      max: [5, "Ratings must be at most 5"],
    },
  },
  { timestamps: true }
);

const FoodItem = mongoose.model("FoodItem", foodItemSchema);

module.exports = FoodItem;
