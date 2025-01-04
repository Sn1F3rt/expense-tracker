import express from "express";
import mongoose from "mongoose";

import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notFound.js";

import meta from "./routes/meta.js";
import expenses from "./routes/expenses.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Static folder
app.use(express.static("public"));

// MongoDB Connection
mongoose
    .connect(
        process.env.MONGODB_URI || "mongodb://localhost:27017/expense-tracker"
    )
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("MongoDB connection error: ", err));

// EJS Setup
app.set("view engine", "ejs");

// Routes
app.use("/", meta);
app.use("/api/expenses", expenses);

// Error handler
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () =>
    console.log(`Server running at http://localhost:${PORT}`)
);
