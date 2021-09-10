import db from '../db/connection.js'
import Product from '../models/product.js'

const insertData = async () => {
  // reset database
  await db.dropDatabase()

  // products data that we want inserted into database
  const products = [
    {
      title: "Avant-Garde",
      image_url: "url",
      description: "description",
      price: 45,
      color: black
      //  category: {
      //   type: String,
      //   enum: ["glasses" "sunglasses"],
      // required: true, }: Post- MVP
    },
    {
      title: "Avant-Garde",
      image_url: "url",
      description: "description",
      price: 45,
      color: black
      //  category: {
      //   type: String,
      //   enum: ["glasses" "sunglasses"],
      // required: true, }: Post- MVP
    },
  ]
  await Product.insertMany(products)
  console.log('Created!')

  db.close()
}
insertData()