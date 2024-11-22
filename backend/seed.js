const mongoose = require("mongoose");
const Product = require("./models/Product");

const MONGO_URI = "mongodb://127.0.0.1:27017/easymart"; // Replace with your MongoDB URI

mongoose
  .connect(MONGO_URI) // No additional options are required
  .then(async () => {
    console.log("Connected to MongoDB for seeding");

    const products = [
      { name: "Apple", price: 1.2, category: "Fruit", description: "Fresh apple" },
      { name: "Milk", price: 1.5, category: "Dairy", description: "1L of milk" },
      { name: "Bread", price: 2.0, category: "Bakery", description: "Whole-grain bread" },
    ];

    await Product.insertMany(products);
    console.log("Sample products added");
    mongoose.disconnect();
  })
  .catch((error) => console.error("Error seeding database:", error));
