import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import productRoute from "./routes/product.js";
import cartRoute from "./routes/cart.js";
import orderRoute from "./routes/order.js";
import checkoutRoute from "./routes/checkout.js";

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URL);

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", checkoutRoute);

app.listen(process.env.PORT || 8800, async () => {
  console.log("Backend server is running on port 8800.");

  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB Connected successfully.");
  } catch (error) {
    console.log(error);
  }
});
