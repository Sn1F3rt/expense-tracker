import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

export default mongoose.model("Expense", ExpenseSchema);
