import { Schema, model, models } from "mongoose";

const prodcutSchema = new Schema({
  //   name: String,
  //   email: {
  //     type: String,
  //     required: true,
  //     unique: true,
  //   },
  product_name: {
    type: String,
    required: true
  },
  product_price: {
    type: Number,
    required: true
  },
  product_catagory: {
    type: String,
    required: true
  },
  product_photos: [],
  product_options: {
    type: Array,
    required: true
  },
  product_introduce: String,
  product_information: {
    type: Array,
    required: true
  }
});

const Product = models.Product || model("Product", prodcutSchema);

export default Product;
