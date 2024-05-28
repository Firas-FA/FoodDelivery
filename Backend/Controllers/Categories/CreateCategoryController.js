const Category = require("../../Models/CategoryMpdel");

const validateRequestBody = (categoryName, description, imageUrl, language) => {
  if (!categoryName || !description || !imageUrl) {
    return "All fields are required: categoryName, description, imageUrl";
  }
  return null;
};

// const validateImageUrl = (imageUrl) => {
//   const urlPattern = /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/;
//   if (!urlPattern.test(imageUrl)) {
//     return "Image URL must be a valid URL and end with an image extension";
//   }
//   return null;
// };

const checkCategoryExists = async (categoryName) => {
  const existingCategory = await Category.findOne({ categoryName });
  if (existingCategory) {
    return "Category name must be unique";
  }
  return null;
};

module.exports = {
  validateRequestBody,
  //  validateImageUrl,
  checkCategoryExists,
};
