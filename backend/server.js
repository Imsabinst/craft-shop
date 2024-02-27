import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./src/config/db.js";
import cors from "cors";
import productRoutes from "./src/routes/productRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";
import multer from "multer";
import path from "path";

//config dotenv
dotenv.config();

//res object
const app = express();

//connect db
connectDB();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/product", productRoutes);
app.use("/api/v1/user", userRoutes);

//rest api
app.get("/", (req, res) => {
  res.send(`<h1>Welcome To craft shop. Server is running on ${PORT}</h1> !`);
});

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

app.use("/api/v1/product/images", express.static("upload/images"));
app.post(
  "/api/v1/product/uploadImage",
  upload.single("product"),
  (req, res) => {
    res.json({
      success: true,
      image_url: `http://localhost:${process.env.PORT}/api/v1/product/images/${req.file.filename}`,
      message: "Image uploaded",
    });
  }
);

const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Server is running on ${PORT}`.bgCyan.white);
  } else {
    console.log("Error :" + error);
  }
});
