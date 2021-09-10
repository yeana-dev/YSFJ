
import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Product = new Schema(
  {
    title: { type: String, required: true },
    image_url: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    color: { type: String, required: true }
    //  category: {
    //   type: String,
    //   enum: ["glasses" "sunglasses"],
    // required: true, }: Post- MVP
  },
  { timestamps: true },
)

export default mongoose.model('products', Product)