import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Product = new Schema(
  {
    title: { type: String, required: true },
    image_url: { type: Array, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    color: { type: Array, required: true },
    createdBy: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: "users" },
    category: { type: String, required: false },
  },
  { timestamps: true }
);

export default mongoose.model("products", Product);
