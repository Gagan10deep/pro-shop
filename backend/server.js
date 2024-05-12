import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import cookieParser from "cookie-parser";

const port = process.env.PORT || 5000;

// buildin middlewares
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

connectDB();

// middleware routes

app.use("/api/product", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

// Error middlware
app.use(notFound);
app.use(errorHandler);

app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);
