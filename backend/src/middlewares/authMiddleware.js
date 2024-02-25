import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

//protected route token base
export const requireLogin = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    console.log("first");
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "Unathorised Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in  admin middleware",
    });
  }
};
