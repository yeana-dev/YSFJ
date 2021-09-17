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
    products: [],
  });
  await user1.save();

  const user2 = new User({
    username: "bianca",
    email: "b.anca@super.gmail.com",
    password_digest: await bcrypt.hash("!$h0pp3R1", 11),
    products: [],
  });
  await user2.save();

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
      createdBy: "bianca",
      userId: user1,
      category: "glasses",
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
      createdBy: "bruno",
      userId: user2,
      category: "glasses",
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
      createdBy: "bianca",
      userId: user1,
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
    {
      title: "Nia-Emani",
      image_url: [
        "https://i.warbycdn.com/s/c/83d77bd82baeff084dd447938051090c6d0dfa95?quality=75&width=900",
        "https://i.warbycdn.com/s/c/e4c3057ab2ab62169bd0f45fd18a6376317d1475?quality=75&width=900",
        "https://i.warbycdn.com/s/c/4267e718463cc9e9ae58a1486ecc1dc6667b0994?quality=75&width=900",
        "https://i.warbycdn.com/s/c/68e07904d971c749bdcf0d4bb7ab29b167b40f82?quality=75&width=900",
      ],
      description:
        "Looking for a bit of oomph with your next round frame? Choose Nia-Emani, a downright wearable style trimmed with our signature Graduated Rivet design. It's made from hand-polished cellulose acetate and used Akulon-coated screws for durability.",
      price: 115,
      color: ["brown", "black", "red"],
      createdBy: "bruno",
      userId: user2,
      //  category: {
      //   type: String,
      //   enum: ["glasses" "sunglasses"],
      // required: true, }: Post- MVP
    },
    {
      title: "Adanne",
      image_url: [
        "https://i.warbycdn.com/s/c/5461416be913870b69b97c097381615370bc4809?quality=75&width=900",
        "https://i.warbycdn.com/s/c/f3c442be1c908f7e53cba2e38e7958bc76b1fd1c?quality=75&width=900",
        "https://i.warbycdn.com/s/c/eff9f2553b40260a60cb1c9e1982e0880c298a54?quality=75&width=900",
        "https://i.warbycdn.com/s/c/2b69d82d52260001c3d8a0bfbe82dc0de21a4799?quality=75&width=900",
      ],
      description:
        "With slightly upturned lenses, slim temple arms, and our Graduated Rivet design, Adanne is a feminine, understated cat-eye. It's made from hand-polished cellulose acetate and used Akulon-coated screws for durability.",
      price: 95,
      color: ["brown", "pink"],
      createdBy: "bruno",
      userId: user2,
      //  category: {
      //   type: String,
      //   enum: ["glasses" "sunglasses"],
      // required: true, }: Post- MVP
    },
    {
      title: "Cathleen",
      image_url: [
        "https://i.warbycdn.com/s/c/efe414ba72658169f24be4c27efdd9731bfd1860?quality=75&width=900",
        "https://i.warbycdn.com/s/c/505a1f238dd1de22d046c136c8798085cd3c39e4?quality=75&width=900",
        "https://i.warbycdn.com/s/c/1df9532e97377d3661121383c4ec41ee20a23198?quality=75&width=900",
      ],
      description:
        "A head turn here. A double take there. Cathleen commands just this sort of attention with its squarish cat-eyed lenses and overall impression of understated confidence. It's made from hand-polished cellulose acetate and used Akulon-coated screws for durability.",
      price: 85,
      color: ["brown", "lightblue", "white"],
      createdBy: "bruno",
      userId: user2,
      //  category: {
      //   type: String,
      //   enum: ["glasses" "sunglasses"],
      // required: true, }: Post- MVP
    },
    {
      title: "Alex",
      image_url: [
        "https://i.warbycdn.com/s/c/d3f59acbb299ec73707c15cb8a402650dc81a32e?quality=75&width=900",
        "https://i.warbycdn.com/s/c/bc01a65e0ab4930ae8f2e22448f2bfc1a4b7724d?quality=75&width=900",
        "https://i.warbycdn.com/s/c/be86bb114295a912354a0826505f96b7e9e79c25?quality=75&width=900",
        "https://i.warbycdn.com/s/c/4cf8412ebdf090289f3528d5992a601408847847?quality=75&width=900",
      ],
      description:
        "Alex's sleek lines land it right in the middle of a Venn diagram between sensible and stylish. It's made from hand-polished cellulose acetate and used Akulon-coated screws for durability.",
      price: 105,
      color: ["brown", "black", "white"],
      createdBy: "bruno",
      userId: user2,
      //  category: {
      //   type: String,
      //   enum: ["glasses" "sunglasses"],
      // required: true, }: Post- MVP
    },
    {
      title: "Esther",
      image_url: [
        "https://i.warbycdn.com/s/c/a700222bfd4d36f7fccd71066a2def4f2cdbea73?quality=75&width=900",
        "https://i.warbycdn.com/s/c/1b469f868938b6c810e8aaabf821d912edd06df5?quality=75&width=900",
        "https://i.warbycdn.com/s/c/692bb99f9bba3c2180439330e6fff76904dc74dc?quality=75&width=900",
      ],
      description:
        "A statement frame with oodles of panache, Esther finds the magic in round lenses and the always pleasing combo of acetate and stainless steel. It's made from hand-polished cellulose acetate and used Akulon-coated screws for durability.",
      price: 125,
      color: ["lightbrown", "pink"],
      createdBy: "bruno",
      userId: user2,
      //  category: {
      //   type: String,
      //   enum: ["glasses" "sunglasses"],
      // required: true, }: Post- MVP
    },
    {
      title: "Andrew",
      image_url: [
        "https://i.warbycdn.com/s/c/71bc5ae052e927baff71e87e2e90453dd21eefa9?quality=75&width=900",
        "https://i.warbycdn.com/s/c/c052d4631febcac6f22f65b664c6e274193c8e32?quality=75&width=900",
        "https://i.warbycdn.com/s/c/652ed963beda4814de488aa79718ff311429ac06?quality=75&width=900",
        "https://i.warbycdn.com/s/c/d30f13041ecb5ebc38eb437c3ea01b15f24eea5f?quality=75&width=900",
      ],
      description:
        "We rendered Andrew's expansive proportions in thinly carved acetate for a beautifully balanced and bold effect. It's made from hand-polished cellulose acetate and used Akulon-coated screws for durability.",
      price: 85,
      color: ["brown", "pink", "lightblue"],
      createdBy: "bruno",
      userId: user2,
      //  category: {
      //   type: String,
      //   enum: ["glasses" "sunglasses"],
      // required: true, }: Post- MVP
    },
    {
      title: "Casey",
      image_url: [
        "https://i.warbycdn.com/s/c/54e2900e4814587e077e203b2100f49fff882943?quality=75&width=900",
        "https://i.warbycdn.com/s/c/98ae50c2738903696d7abfc2e70432d0976331e4?quality=75&width=900",
        "https://i.warbycdn.com/s/c/18ab37bee86e07f3789f1abb30d35ced07af681e?quality=75&width=900",
        "https://i.warbycdn.com/s/c/f791f980b69a3c267e70f1456756f16cdaab249a?quality=75&width=900",
      ],
      description:
        "Casey is understated excellence distilled into one flatteringly square, Graduated Rivet design-studded frame. It's made from hand-polished cellulose acetate and used Akulon-coated screws for durability.",
      price: 105,
      color: ["brown", "black", "orange"],
      createdBy: "bruno",
      userId: user2,
      //  category: {
      //   type: String,
      //   enum: ["glasses" "sunglasses"],
      // required: true, }: Post- MVP
    },
    {
      title: "Joshua",
      image_url: [
        "https://i.warbycdn.com/s/c/462b8f1edfbe4d63a394671d48f43a2c79aa8ac9?quality=75&width=900",
        "https://i.warbycdn.com/s/c/83d2b3d41df793d086a6d70d30f66683321d1849?quality=75&width=900",
        "https://i.warbycdn.com/s/c/d10ac5cafad8c610c1fd9432db26e46bbc1063b5?quality=75&width=900",
        "https://i.warbycdn.com/s/c/fddcf042d2713b90c3d5d4cfac0ea49495f41c74?quality=75&width=900",
      ],
      description:
        "With perfectly oval lenses and sleek temple arms, Joshua will stun in any circumstance. It's made from hand-polished cellulose acetate and used Akulon-coated screws for durability.",
      price: 105,
      color: ["brown", "black"],
      createdBy: "bruno",
      userId: user2,
      //  category: {
      //   type: String,
      //   enum: ["glasses" "sunglasses"],
      // required: true, }: Post- MVP
    },
    {
      title: "Paul",
      image_url: [
        "https://i.warbycdn.com/s/c/e8477b0df7114b6556cbb8b6c0754b2fe2596dc4?quality=75&width=900",
        "https://i.warbycdn.com/s/c/971b47ce4ac8e4f679070f6046968223a313746d?quality=75&width=900",
        "https://i.warbycdn.com/s/c/7fdb3472194e96a295828f2dd2e0ba9752979584?quality=75&width=900",
        "https://i.warbycdn.com/s/c/0bbffd04c91cb2ae48f41055195681017e88c02d?quality=75&width=900",
      ],
      description:
        "Paul's round lenses give way to one of our most angular renditions of a keyhole bridge yet. The scalloped detailing brings extra flourish to the feature. It's made from hand-polished cellulose acetate and used Akulon-coated screws for durability.",
      price: 115,
      color: ["brown", "black"],
      createdBy: "bruno",
      userId: user2,
      //  category: {
      //   type: String,
      //   enum: ["glasses" "sunglasses"],
      // required: true, }: Post- MVP
    },
    {
      title: "Jexica",
      image_url: [
        "https://i.warbycdn.com/s/c/44b20d76a68ea48411406d1fcd326d01a6051545?quality=75&width=900",
        "https://i.warbycdn.com/s/c/e8391a07855a6836a35263ecfc82f934ada74959?quality=75&width=900",
        "https://i.warbycdn.com/s/c/f860b0b8c1a0c50f4195ee2dd86d90941c8e5218?quality=75&width=900",
        "https://i.warbycdn.com/s/c/4f6d33172ed18ca6d9b475e29423a4974b28cada?quality=75&width=900",
      ],
      description:
        "Jexica is a circular, mixed-material frame with a truly elevated frame construction—quite literally. It features high-up, elongated end pieces that lift the temples away from the lenses, creating a “floating” effect. It's made from hand-polished cellulose acetate and used Akulon-coated screws for durability.",
      price: 105,
      color: ["green", "white"],
      createdBy: "bruno",
      userId: user2,
      //  category: {
      //   type: String,
      //   enum: ["glasses" "sunglasses"],
      // required: true, }: Post- MVP
    },
    {
      title: "Eileen",
      image_url: [
        "https://i.warbycdn.com/s/c/4bc3cf573ad0ed5b7d2b0b389ae6aee03751e603?quality=75&width=900",
        "https://i.warbycdn.com/s/c/ba9032203a392abbba6b4c9d8844ce4e1e329da4?quality=75&width=900",
        "https://i.warbycdn.com/s/c/0fcf60c7e5305db4cc6837cd369d595cdfb11544?quality=75&width=900",
        "https://i.warbycdn.com/s/c/930ad9ae04e97ed98b997fe036f6deb966b977d5?quality=75&width=900",
      ],
      description:
        "Eileen, with dapper round lenses and a pronounced keyhole bridge, is as studious (or spirited) as you make it. It's made from hand-polished cellulose acetate and used Akulon-coated screws for durability.",
      price: 105,
      color: ["brown", "pink", "lightblue"],
      createdBy: "bruno",
      userId: user2,
      //  category: {
      //   type: String,
      //   enum: ["glasses" "sunglasses"],
      // required: true, }: Post- MVP
    },
    {
      title: "Rachel",
      image_url: [
        "https://i.warbycdn.com/s/c/46727c454714c04f06e8b909ae378a2e0cd7930a?quality=75&width=900",
        "https://i.warbycdn.com/s/c/fedcb88a027df8ad6028a5cca9ada01cfb4da520?quality=75&width=900",
        "https://i.warbycdn.com/s/c/bc320e26f0b7704a532074c1ce839ee374bbbdf4?quality=75&width=900",
        "https://i.warbycdn.com/s/c/634fc8edea33cd04276b499d3c4f9c736613ebad?quality=75&width=900",
      ],
      description:
        "Rachel is back. What's different about our classic round frame? We gave it a slimmer nose bridge and added our signature Graduated Rivet design. It's made from hand-polished cellulose acetate and used Akulon-coated screws for durability.",
      price: 95,
      color: ["brown", "darkgreen"],
      createdBy: "bruno",
      userId: user2,
      //  category: {
      //   type: String,
      //   enum: ["glasses" "sunglasses"],
      // required: true, }: Post- MVP
    },
    {
      title: "Tiffany",
      image_url: [
        "https://i.warbycdn.com/s/c/dd55ed8afe859c45a05838c6f0eeda3083a224ae?quality=75&width=900",
        "https://i.warbycdn.com/s/c/dde408fad508c66bdee4599f9d339fe4f4ba9569?quality=75&width=900",
        "https://i.warbycdn.com/s/c/69c5f5e9c4046b2d7047ab872ce6f649b302ad37?quality=75&width=900",
        "https://i.warbycdn.com/s/c/7f15c81b8ca1bcf663d5c276fb32ee06aa9eac06?quality=75&width=900",
      ],
      description:
        "It's made from hand-polished cellulose acetate and used Akulon-coated screws for durability.",
      price: 95,
      color: ["brown", "pink"],
      createdBy: "bruno",
      userId: user2,
      //  category: {
      //   type: String,
      //   enum: ["glasses" "sunglasses"],
      // required: true, }: Post- MVP
    },
    {
      title: "Steve",
      image_url: [
        "https://i.warbycdn.com/s/c/5afa348ba3a206b1c6ee83ff5e3e8ebb5eb96ff2?quality=75&width=900",
        "https://i.warbycdn.com/s/c/dd6570899cae94a9c0945b83de9111e14ebd6e5e?quality=75&width=900",
        "https://i.warbycdn.com/s/c/25b9a2a43bbb4d376c1808920dc884342f233796?quality=75&width=900",
        "",
      ],
      description:
        "All of Steve's sleek, stainless steel goodness (end pieces, brow bar, the whole shebang) has been slightly scaled up for a wider fit. It's made from hand-polished cellulose acetate and used Akulon-coated screws for durability.",
      price: 115,
      color: ["brown"],
      createdBy: "bruno",
      userId: user2,
      //  category: {
      //   type: String,
      //   enum: ["glasses" "sunglasses"],
      // required: true, }: Post- MVP
    },
    {
      title: "Daria",
      image_url: [
        "https://i.warbycdn.com/s/c/80bfb5a4492a1971bb5be63029e7d88be3317d4c?quality=75&width=900",
        "https://i.warbycdn.com/s/c/e29458160eef427c6642c2d42e749cd4ce6192e2?quality=75&width=900",
        "https://i.warbycdn.com/s/c/bca4b99e3167966633cde4122095eaecf40e9f43?quality=75&width=900",
        "https://i.warbycdn.com/s/c/dde9cf30a263ebb2a71ccdc85632f5aa342ace0a?quality=75&width=900",
      ],
      description:
        "Daria's wide fit and clean, continuous lines make it a thoroughly modern cat-eye. It's made from hand-polished cellulose acetate and used Akulon-coated screws for durability.",
      price: 105,
      color: ["brown", "white"],
      createdBy: "bruno",
      userId: user2,
      //  category: {
      //   type: String,
      //   enum: ["glasses" "sunglasses"],
      // required: true, }: Post- MVP
    },
    {
      title: "Courtney",
      image_url: [
        "https://i.warbycdn.com/s/c/402052269dbd9d6d1912bc838aea22f6cc064114?quality=75&width=900",
        "https://i.warbycdn.com/s/c/fcc3ef895656db163eee96cfacf6846c4cedc74a?quality=75&width=900",
        "https://i.warbycdn.com/s/c/fdd729985ffd80ee4bd8b0f4846548f32d4a5f32?quality=75&width=900",
        "https:?quality=75&width=900",
      ],
      description:
        "Bigger is better. Courtney’s oversized rectangular silhouette is wearable glamour at its finest. It's made from hand-polished cellulose acetate and used Akulon-coated screws for durability.",
      price: 95,
      color: ["brown"],
      createdBy: "bruno",
      userId: user2,
      //  category: {
      //   type: String,
      //   enum: ["glasses" "sunglasses"],
      // required: true, }: Post- MVP
    },
    {
      title: "Nadia",
      image_url: [
        "https://i.warbycdn.com/s/c/d0158d11b7c27ec71b7b7e5285951bb1292d5d4b?quality=75&width=900",
        "https://i.warbycdn.com/s/c/cbd85f5454c70f614030efac6a5ff4483f4a349e?quality=75&width=900",
        "https://i.warbycdn.com/s/c/138ec7246abd5784061c8008d57bef7b1cc7964e?quality=75&width=900",
        "https://i.warbycdn.com/s/c/7e48bee8dd936d1cd722176423c33714b8d72fbf?quality=75&width=900",
      ],
      description:
        "Round-lensed Nadia boasts bold curves, especially along its swooping browline. It's made from hand-polished cellulose acetate and used Akulon-coated screws for durability.",
      price: 95,
      color: ["brown", "black", "white"],
      createdBy: "bruno",
      userId: user2,
      //  category: {
      //   type: String,
      //   enum: ["glasses" "sunglasses"],
      // required: true, }: Post- MVP
    },
    {
      title: "Theodore",
      image_url: [
        "https://i.warbycdn.com/s/c/3c24673f732131e92341f997436f274449dbfb59?quality=75&width=900",
        "https://i.warbycdn.com/s/c/edd26a42996edea2d173386c65dbbd24fc8dbfae?quality=75&width=900",
        "https://i.warbycdn.com/s/c/769afd8189d7041457f1eed8f0be85e09fde6a39?quality=75&width=900",
      ],
      description:
        "Theo's classic shape will take you from breakfast to evening cocktails without a hitch—and the subtle, softened angles look splendid on every face shape. It's made from hand-polished cellulose acetate and used Akulon-coated screws for durability.",
      price: 105,
      color: ["brown", "black", "darkgreen"],
      createdBy: "bruno",
      userId: user2,
      //  category: {
      //   type: String,
      //   enum: ["glasses" "sunglasses"],
      // required: true, }: Post- MVP
    },
    {
      title: "Sean",
      image_url: [
        "https://i.warbycdn.com/s/c/1cb5cb8f26bb7bcb6d78256eb2e6cad39e0e7142?quality=75&width=900",
        "https://i.warbycdn.com/s/c/bc066a289715daad3e0ed84cee35b7749d6286eb?quality=75&width=900",
        "https://i.warbycdn.com/s/c/f8984398a1406f772d9bcdfabc7809ae2bd4e20d?quality=75&width=900",
        "https://i.warbycdn.com/s/c/a0d211a041da7f79b15d841ec311e71171a4cd8e?quality=75&width=900",
      ],
      description:
        "A rectangular frame with a metal brow bar and bridge, Sean exudes a well-traveled attitude. It's made from hand-polished cellulose acetate and used Akulon-coated screws for durability.",
      price: 105,
      color: ["brown"],
      createdBy: "bruno",
      userId: user2,
      //  category: {
      //   type: String,
      //   enum: ["glasses" "sunglasses"],
      // required: true, }: Post- MVP
    },
    {
      title: "Garrett",
      image_url: [
        "https://i.warbycdn.com/s/c/c9498c31e6bb6a9a40822424c552800707cd36a9?quality=75&width=900",
        "https://i.warbycdn.com/s/c/1e4dd4b0255c18d0bc99c484660f23ffa2e5018b?quality=75&width=900",
        "https://i.warbycdn.com/s/c/77edc5d72b82d4bc5899a7248536f7417c16b300?quality=75&width=900",
        "https://i.warbycdn.com/s/c/24953597baa63d2acc6c7051bfd2dd90018d642b?quality=75&width=900",
      ],
      description:
        "Round lenses, slim temple arms, keyhole detail, and Low Bridge Fit construction make Garrett one good-looking frame. It's made from hand-polished cellulose acetate and used Akulon-coated screws for durability.",
      price: 105,
      color: ["brown", "black", "white"],
      createdBy: "bruno",
      userId: user2,
      //  category: {
      //   type: String,
      //   enum: ["glasses" "sunglasses"],
      // required: true, }: Post- MVP
    },
    {
      title: "Jake",
      image_url: [
        "https://i.warbycdn.com/s/c/a631d7c4a46f1729665f08f9ef8ce7111ced8dc9?quality=75&width=900",
        "https://i.warbycdn.com/s/c/5d57792190eabfdd2fa801d69e32cc0560c791b9?quality=75&width=900",
        "https://i.warbycdn.com/s/c/785f560d892af3d2bca928fe7781a5f8e31e42ae?quality=75&width=900",
        "https://i.warbycdn.com/s/c/71a6cf213dc84f5dd6dd54d01b9db17a0d9f7ec2?quality=75&width=900",
      ],
      description:
        "Behold the makes-every-outfit-better versatility of Jake. We chalk it up to the boxy fit, sizable lenses, and mildly arched browlines. It's made from hand-polished cellulose acetate and used Akulon-coated screws for durability.",
      price: 95,
      color: ["lightblue", "white"],
      createdBy: "bruno",
      userId: user2,
      //  category: {
      //   type: String,
      //   enum: ["glasses" "sunglasses"],
      // required: true, }: Post- MVP
    },
    {
      title: "Otis",
      image_url: [
        "https://i.warbycdn.com/s/c/a9d23ac1d94be116fa463f11a3c011edf35d3da4?quality=75&width=900",
        "https://i.warbycdn.com/s/c/611c7a467477ad9e37d3456570279dc8b1ee2868?quality=75&width=900",
        "https://i.warbycdn.com/s/c/c176c539f7e4b72e51528dc9e2c6a8b2fe619c4c?quality=75&width=900",
      ],
      description:
        "Otis offers a fresh take on a classic aviator shape with exaggerated teardrop lenses and a delicate slope to its single brow bar. It's made from hand-polished cellulose acetate and used Akulon-coated screws for durability.",
      price: 115,
      color: ["brown"],
      createdBy: "bruno",
      userId: user2,
      //  category: {
      //   type: String,
      //   enum: ["glasses" "sunglasses"],
      // required: true, }: Post- MVP
    },
  ];


  await Product.insertMany(products);
  console.log("Created users & products!");
  user1.products = await Product.find({ userId: user1 });
  await user1.save();
  user2.products = await Product.find({ userId: user2 });
  await user2.save();

  db.close();
};
insertData();
