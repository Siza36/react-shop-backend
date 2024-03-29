const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema(
  {
    id: { type: Schema.Types.Number, unique: true },
    title: { type: Schema.Types.String },
    price: { type: Schema.Types.Number },
    description: { type: Schema.Types.String },
    images: [{ type: Schema.Types.String }],
    category: {
      id: { type: Schema.Types.Number, unique: true },
      name: { type: Schema.Types.String },
    }
  },
  { collection: "product" }
);
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
