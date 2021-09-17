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
      title: "Yeana",
      image_url: [
        "https://i.warbycdn.com/s/c/57983454e836700aecfbfb948246f9b27138af5d.png?quality=80&width=900",
        "https://i.warbycdn.com/s/c/a9ed50a94655db09cfa28129d82b37b7eb880c96?quality=80&width=900",
        "https://i.warbycdn.com/s/c/8effaddcc4c3a51040895fc88cf8a7305b2d3efc?quality=80&width=900",
        "https://i.warbycdn.com/s/c/73182b063052e9e834e423347482de0035ac1043?quality=80&width=900",
      ],
      description:
        "Talk about versatile. Yeana's sort of square, sort of round lenses (and its subtly sculpted keyhole bridge) look great on a range of faces. It's made from hand-polished cellulose acetate and used Akulon-coated screws for durability.",
      price: 99,
      color: ["white", "black", "pink"],
      createdBy: "bruno",
      userId: user1,
      //  category: {
      //   type: String,
      //   enum: ["glasses" "sunglasses"],
      // required: true, }: Post- MVP
    },
    {
      title: "Sofanit",
      image_url: [
        "https://i.warbycdn.com/s/c/92509c27839376565a59aea201d372d77d574ca6?quality=80&width=900",
        "https://i.warbycdn.com/s/c/df210bbbdcbc304d982c6a16fa8a9a4a8d0c4e77?quality=80&width=900",
        "https://i.warbycdn.com/s/c/645ea7099a0d288c53554ef42f4d550c41c98ee5?quality=80&width=900",
      ],
      description:
        "Bold shape feels perfectly balanced thanks to its slightly square lenses and sloping browline. It's made from hand-polished cellulose acetate and used Akulon-coated screws for durability.",
      price: 105,
      color: ["black", "brown", "gold"],
      createdBy: "bianca",
      userId: user1,
      //  category: {
      //   type: String,
      //   enum: ["glasses" "sunglasses"],
      // required: true, }: Post- MVP
    },
    {
      title: "Francisco",
      image_url: [
        "https://i.warbycdn.com/s/c/30bc42d5ab039c7e6d3f0b060a1f40f579a27d39?quality=80&width=900",
        "https://i.warbycdn.com/s/c/e33e35829d2395b3cae69a780056792537686b3c?quality=80&width=900",
        "https://i.warbycdn.com/s/c/cc528983e9773dae4a921f4acbb25f0d254897b3?quality=80&width=900",
        "https://i.warbycdn.com/s/c/879d7e538ef6c30e3ec882af7b8414b769d18ebc?quality=80&width=900",
      ],
      description:
        "Look closely at Francisco's charmingly round eyewires, and you'll see they're encircled by ultra-thin acetate coils. The effect? Delicate but distinguished, and made possible by our partners in northern Italy. It's made from hand-polished cellulose acetate and used Akulon-coated screws for durability.",
      price: 115,
      color: ["gold", "silver"],
      createdBy: "bruno",
      userId: user2,
      //  category: {
      //   type: String,
      //   enum: ["glasses" "sunglasses"],
      // required: true, }: Post- MVP
    },
    {
      title: "Jorge",
      image_url: [
        "https://i.warbycdn.com/s/c/502af193a6683d3d757c95527169784d45a05db4?quality=75&width=900",
        "https://i.warbycdn.com/s/c/7481418af166e4cf8a3b234545d44540754e778f?quality=80&width=975",
        "https://i.warbycdn.com/s/c/3495c6525be253ebf49a3f710627955d3c473ec7?quality=80&width=975",
        "https://i.warbycdn.com/s/c/4397a78306c62e1a89adecc904903170f337dd01?quality=80&width=975",
      ],
      description:
        "With Jorge, grand proportions (oversized round lenses, anyone?) meet thinner acetate for an airier, softer look. Balance is key, after all. It's made from hand-polished cellulose acetate and used Akulon-coated screws for durability.",
      price: 105,
      color: ["black", "brown", "darkgreen"],
      createdBy: "bruno",
      userId: user2,
      //  category: {
      //   type: String,
      //   enum: ["glasses" "sunglasses"],
      // required: true, }: Post- MVP
    },
    {
      title: "Bruno",
      image_url: [
        "https://i.warbycdn.com/s/c/be1f9b339a08e5c1a7821ecb8d8e54b4edbe2823?quality=75&width=900",
        "https://i.warbycdn.com/s/c/8e8775cea8dc712328d10db147cb78ea5e39738b?quality=80&width=900",
        "https://i.warbycdn.com/s/c/ff5d671952decff591fc0caff9bf952ed57613c8?quality=80&width=900",
        "https://i.warbycdn.com/s/c/e2e1c6fc9ac25924935755b9f7ec05323d0f99d2?quality=80&width=900",
      ],
      description:
        "Bruno is a roomier, round frame with some unexpected edge. See its angular, squared-off bottom? That's it! It's made from hand-polished cellulose acetate and used Akulon-coated screws for durability.",
      price: 95,
      color: ["black", "brown", "white"],
      createdBy: "bruno",
      userId: user2,
      //  category: {
      //   type: String,
      //   enum: ["glasses" "sunglasses"],
      // required: true, }: Post- MVP
    },
    {
      title: "Nora",
      image_url: [
        "https://i.warbycdn.com/s/c/898edad196c145a62d62f8e47ab6d7d78448f755?quality=75&width=900",
        "https://i.warbycdn.com/s/c/3ec7203c84b4766d08d31993f5911d82e61bf71e?quality=80&width=900",
        "https://i.warbycdn.com/s/c/73269cc2a17a1e8602fc3b607d882acdd5a325f2?quality=80&width=900",
        "https://i.warbycdn.com/s/c/3c834cdcc0e91221cbe558b7afe9909f38ba7c2d?quality=80&width=900",
      ],
      description:
        "What do you get when you combine round lenses, slim temple arms, and a keyhole bridge? A good-looking frame named Nora. It's made from hand-polished cellulose acetate and used Akulon-coated screws for durability.",
      price: 95,
      color: ["black", "brown", "darkgreen", "white"],
      createdBy: "bruno",
      userId: user2,
      //  category: {
      //   type: String,
      //   enum: ["glasses" "sunglasses"],
      // required: true, }: Post- MVP
    },
    {
      title: "Raul",
      image_url: [
        "https://i.warbycdn.com/s/c/c2f5125da30588f75945ad87c4308a333e408b05?quality=75&width=900",
        "https://i.warbycdn.com/s/c/4d06605e46e0677a9c62cb2cb71303c142958955?quality=80&width=900",
        "https://i.warbycdn.com/s/c/9d39be2ae9b38a80b7db55a9b1faa4cb71bf3256?quality=80&width=900",
        "https://i.warbycdn.com/s/c/9b51e19e083ed93ebe3d4907ba67f9dece770fc6?quality=80&width=900",
      ],
      description:
        "Two slightly ’70s touches—an oversized fit and an almost-flat browline—give Raul an easygoing appeal. It's made from hand-polished cellulose acetate and used Akulon-coated screws for durability.",
      price: 95,
      color: ["black", "brown"],
      createdBy: "bruno",
      userId: user2,
      //  category: {
      //   type: String,
      //   enum: ["glasses" "sunglasses"],
      // required: true, }: Post- MVP
    },
    {
      title: "Nikki",
      image_url: [
        "https://i.warbycdn.com/s/c/7cc058eb3f5c4699bf1a235e07b76d1db27ef800?quality=75&width=900",
        "https://i.warbycdn.com/s/c/c129b46327f096abfc6c078ea6bb7e6800eb0a58?quality=80&width=900",
        "https://i.warbycdn.com/s/c/d5bfa43e63dc5227a5a598badf19d0ad03ba5deb?quality=80&width=900",
        "https://i.warbycdn.com/s/c/191527ac2d7cb029db3638f2b3ff330405e5b1c5?quality=80&width=900",
      ],
      description:
        "Nikki, one of our tried-and-true classics, gets slightly revamped with Low Bridge Fit construction. It's made from hand-polished cellulose acetate and used Akulon-coated screws for durability.",
      price: 95,
      color: ["brown", "pink"],
      createdBy: "bruno",
      userId: user2,
      //  category: {
      //   type: String,
      //   enum: ["glasses" "sunglasses"],
      // required: true, }: Post- MVP
    },
  ];

  await Product.insertMany(products)
  console.log('Created users & products!')

  user1.products = await Product.find({ userId: user1 })
  await user1.save()
  user2.products = await Product.find({ userId: user2 })
  await user2.save()

  db.close();
};
insertData();
