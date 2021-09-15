import db from "../db/connection.js";
import Product from "../models/product.js";
import User from "../models/user.js";
import bcrypt from "bcrypt";

const insertData = async () => {
  await db.dropDatabase();

  const user1 = new User({
    username: "bruno",
    email: "root@super.gmail.com",
    password_digest: await bcrypt.hash("!a$ecureP@ssw0Rd55!", 11),
    products: []
  });
  await user1.save();

  const user2 = new User({
    username: 'bianca',
    email: 'b.anca@super.gmail.com',
    password_digest: await bcrypt.hash('!$h0pp3R1', 11),
    products: [],
  })
  await user2.save()

  const products = [
    {
      title: "B",
      image_url: [
        "https://i.warbycdn.com/s/c/7f4f6dafeb2edceb16559a5f0856966674239d1f.png?quality=80&width=900",
        "https://i.warbycdn.com/s/c/6db7c02bc7495d950cebd98d0147d0bc5047acac?quality=80&width=975",
        "https://i.warbycdn.com/s/c/6db7c02bc7495d950cebd98d0147d0bc5047acac?quality=80&width=975",
      ],
      description: "description",
      price: 45,
      color: "black",
      createdBy: "bruno"
      //  category: {
      //   type: String,
      //   enum: ["glasses" "sunglasses"],
      // required: true, }: Post- MVP
    },
    {
      title: "Avant-Garde",
      image_url: [
        "https://i.warbycdn.com/s/c/fe448cc431fc333b1bf68886358ae45e08a55581.png?quality=80&width=900",
        "https://i.warbycdn.com/s/c/6db7c02bc7495d950cebd98d0147d0bc5047acac?quality=80&width=975",
        "https://i.warbycdn.com/s/c/6db7c02bc7495d950cebd98d0147d0bc5047acac?quality=80&width=975",
      ],
      description: "description",
      price: 45,
      color: "black",
      createdBy: "bruno"
      //  category: {
      //   type: String,
      //   enum: ["glasses" "sunglasses"],
      // required: true, }: Post- MVP
    },
    {
      title: "Avant-Garde",
      image_url: [
        "https://i.warbycdn.com/s/c/5985e18cf8f10fbdd719fc7945b2a7a51a9b0393.png?quality=80&width=900",
        "https://i.warbycdn.com/s/c/6db7c02bc7495d950cebd98d0147d0bc5047acac?quality=80&width=975",
        "https://i.warbycdn.com/s/c/6db7c02bc7495d950cebd98d0147d0bc5047acac?quality=80&width=975",
      ],
      description: "description",
      price: 45,
      color: "black",
      createdBy: "bruno"
      //  category: {
      //   type: String,
      //   enum: ["glasses" "sunglasses"],
      // required: true, }: Post- MVP
    },
    {
      title: "Avant-Garde",
      image_url: [
        "https://i.warbycdn.com/s/c/44b20d76a68ea48411406d1fcd326d01a6051545?quality=75&width=900",
        "https://i.warbycdn.com/s/c/6db7c02bc7495d950cebd98d0147d0bc5047acac?quality=80&width=975",
        "https://i.warbycdn.com/s/c/6db7c02bc7495d950cebd98d0147d0bc5047acac?quality=80&width=975",
      ],
      description: "description",
      price: 45,
      color: "black",
      createdBy: "bruno"
      //  category: {
      //   type: String,
      //   enum: ["glasses" "sunglasses"],
      // required: true, }: Post- MVP
    },
    {
      title: "Avant-Garde",
      image_url: [
        "https://i.warbycdn.com/s/c/7c495d1a5c4552e04842ad2875080a8ea034ac0a?quality=75&width=900",
        "https://i.warbycdn.com/s/c/6db7c02bc7495d950cebd98d0147d0bc5047acac?quality=80&width=975",
        "https://i.warbycdn.com/s/c/6db7c02bc7495d950cebd98d0147d0bc5047acac?quality=80&width=975",
      ],
      description: "description",
      price: 45,
      color: "black",
      createdBy: "bruno"
      //  category: {
      //   type: String,
      //   enum: ["glasses" "sunglasses"],
      // required: true, }: Post- MVP
    },
    {
      title: "Avant-Garde",
      image_url: [
        "https://i.warbycdn.com/s/c/3c477a65ccd053353cf10a5fdd67110f383934c8?quality=75&width=900",
        "https://i.warbycdn.com/s/c/6db7c02bc7495d950cebd98d0147d0bc5047acac?quality=80&width=975",
        "https://i.warbycdn.com/s/c/6db7c02bc7495d950cebd98d0147d0bc5047acac?quality=80&width=975",
      ],
      description: "description",
      price: 45,
      color: "black",
      createdBy: "bruno"
      //  category: {
      //   type: String,
      //   enum: ["glasses" "sunglasses"],
      // required: true, }: Post- MVP
    },
  ];
  await Product.insertMany(products);
  console.log("Created!");

  db.close();
};
insertData();
