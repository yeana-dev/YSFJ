import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/user.js";
import Product from '../models/product.js'

const SALT_ROUNDS = process.env.SALT_ROUNDS || 11;
const TOKEN_KEY = process.env.TOKEN_KEY || "areallylonggoodkey";

const today = new Date();
const exp = new Date(today);
exp.setDate(today.getDate() + 30);

export const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const password_digest = await bcrypt.hash(password, SALT_ROUNDS);
    const user = new User({
      username,
      email,
      password_digest,
    });

    await user.save();

    const payload = {
      id: user._id,
      username: user.username,
      email: user.email,
      exp: parseInt(exp.getTime() / 1000),
    };

    const token = jwt.sign(payload, TOKEN_KEY);
    res.status(201).json({ token });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email }).select(
      "username email password_digest"
    );
    if (await bcrypt.compare(password, user.password_digest)) {
      const payload = {
        id: user._id,
        username: user.username,
        email: user.email,
        exp: parseInt(exp.getTime() / 1000),
      };

      const token = jwt.sign(payload, TOKEN_KEY);
      res.status(201).json({ token });
    } else {
      res.status(401).send("Invalid Credentials");
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const verify = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.verify(token, TOKEN_KEY);
    if (payload) {
      res.json(payload);
    }
  } catch (error) {
    console.log(error.message);
    res.status(401).send("Not Authorized");
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('products')
    res.json(user)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

export const getCart = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    const userProducts = await Product.find({ userId: user._id })
    res.json(userProducts)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

// export const deleteCartItem = async (req, res) => {
//   try {
//     if (await User.findById(req.params.id)) {
//       const deleted = await Product.findByIdAndDelete(req.params.productId)
//       if (deleted) {
//         return res.status(200).send('Product deleted')
//       }
//       throw new Error(`Product ${req.params.productId} not found`)
//     }
//     throw new Error(`User ${req.params.id} does not exist!`)
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({ error: error.message })
//   }
// }
