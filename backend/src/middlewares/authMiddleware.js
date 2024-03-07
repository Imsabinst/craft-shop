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

// Middleware function to authenticate and extract user ID from token
export const authMiddleware = (req, res, next) => {
  // Check if token is present in the request headers
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    // Verify token
    const decoded = JWT.verify(token, process.env.JWT_SECRET);

    // Attach user ID to the request object
    req.userId = decoded._id;

    console.log(decoded._id);
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Token is not valid" });
  }
};
