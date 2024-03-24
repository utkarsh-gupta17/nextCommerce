const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true, "Please enter Product Name"],
  },
  description:{
    type: String,
    required: [true, "Please enter Product description"],
  },
  price:{
    type: Number,
    required: [true, "Please enter Product price"],
  },
  images:[
    {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
  ],
  category: {
    type: String,
    required: [true,"Please enter the category of the product"],
    enum: {
      values: [
        "Electronics",
        "Cameras",
        "Laptops",
        "Accessories",
        "Headphones",
        "Sports"
      ],
      message: "Please select correct category",
    }
  },
  seller:{
    type: String,
    required: [true, "Please enter Product seller"],
  },
  stock:{
    type: Number,
    required: [true, "Please enter Product stock"],
  },
  ratings:{
    type: Number,
    default: 0,
  },
  reviews: [
    {
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export const Product = mongoose.models.Product || mongoose.model("Product",productSchema);