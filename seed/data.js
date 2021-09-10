import db from '../db/connection.js'
import Product from '../models/product.js'
import User from '../models/user.js'
import bcrypt from 'bcrypt'

const insertData = async () => {
  await db.dropDatabase()

  const user1 = new User({
    username: 'bruno',
    email: 'root@super.gmail.com',
    password_digest: await bcrypt.hash('!a$ecureP@ssw0Rd55!', 11)
  })
  await user1.save()

  const products = [
    {
      title: "Avant-Garde",
      image_url: "url",
      description: "description",
      price: 45,
      color: "black"
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
      color: "black"
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