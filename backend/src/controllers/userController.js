import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import jwt from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //validations
    if (!name) {
      return res.send({ message: "Name is required!" });
    }
    if (!email) {
      return res.send({ message: "Email is required!" });
    }
    if (!password) {
      return res.send({ message: "Password is required!" });
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(200).send({
        success: true,
        message: "Already exist",
      });
    }

    const cart = {};
    for (let i = 0; i < 300; i++) {
      cart[i] = 0;
    }

    //user registeration
    const hashedPassword = await hashPassword(password);

    const user = await new userModel({
      name,
      email,
      password: hashedPassword,
      cartData: cart,
    }).save();

    console.log(user, "eee");
    res.status(201).send({
      success: true,
      message: "User Registration Success.",
      user,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).send({
      success: false,
      message: "Error in Registration",
      error,
    });
  }
};
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    //check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registered",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    //token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "Login Successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        cartData: user.cartData,
      },
      token,
    });
    //console.log(user, token, "login");
  } catch (error) {
    console.log(error);
    req.status(500).send({
      success: false,
      message: "error",
      error: error,
    });
  }
};
