import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./src/config/db.js";
import cors from "cors";
import productRoutes from "./src/routes/productRoutes.js";

//config dotenv
dotenv.config();

//res object
const app = express();

//connect db
connectDB();

//middlewares
/* app.use(
  cors({
    origin: "http://localhost:300",
    credentials: true,
  })
); */
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/product", productRoutes);

//rest api
app.get("/", (req, res) => {
  res.send(`<h1>Welcome To craft shop. Server is running on ${PORT}</h1> !`);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Server is running on ${PORT}`.bgCyan.white);
  } else {
    console.log("Error :" + error);
  }
});
