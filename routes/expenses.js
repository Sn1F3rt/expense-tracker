import express from "express";

import {
    getExpenses,
    getExpense,
    createExpense,
    editExpense,
    deleteExpense,
} from "../controllers/expensesController.js";

const router = express.Router();

// Get all expenses
router.get("/", getExpenses);

// Get single expense
router.get("/:id", getExpense);

// Create new expense
router.post("/", createExpense);

// Update expense
router.put("/:id", editExpense);

// Delete expense
router.delete("/:id", deleteExpense);

export default router;
