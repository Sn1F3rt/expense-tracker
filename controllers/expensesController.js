// noinspection JSUnusedLocalSymbols

import Expense from "../models/Expense.js";

/*
 * @desc Get all expenses
 * @route GET /api/expenses
 */
export const getExpenses = async (req, res, next) => {
    try {
        const expenses = await Expense.find();
        res.status(200).json(expenses);
    } catch (error) {
        next(error);
    }
};

/*
 * @desc Get single expense
 * @route GET /api/expenses/:id
 */
export const getExpense = async (req, res, next) => {
    try {
        const expense = await Expense.findById(req.params.id);
        if (!expense) {
            const error = new Error(
                `An expense with the id of ${req.params.id} was not found`
            );
            error.status = 404;
            return next(error);
        }
        res.status(200).json(expense);
    } catch (error) {
        next(error);
    }
};

/*
 * @desc Create new expense
 * @route POST /api/expenses
 */
export const createExpense = async (req, res, next) => {
    const { title, amount, category } = req.body;

    if (!title || !amount || !category) {
        const error = new Error(`Please include a title, amount, and category`);
        error.status = 400;
        return next(error);
    }

    try {
        const newExpense = new Expense({ title, amount, category });
        await newExpense.save();
        res.status(201).json(newExpense);
    } catch (error) {
        next(error);
    }
};

/*
 * @desc Update expense
 * @route PUT /api/expenses/:id
 */
export const editExpense = async (req, res, next) => {
    const { title, amount, category } = req.body;

    const updateFields = {};
    if (title) updateFields.title = title;
    if (amount) updateFields.amount = amount;
    if (category) updateFields.category = category;

    if (Object.keys(updateFields).length === 0) {
        const error = new Error(
            `At least one field (title, amount, or category) is required to update.`
        );
        error.status = 400;
        return next(error);
    }

    try {
        const updatedExpense = await Expense.findByIdAndUpdate(
            req.params.id,
            { $set: updateFields },
            { new: true }
        );

        if (!updatedExpense) {
            const error = new Error(
                `Expense with ID ${req.params.id} not found.`
            );
            error.status = 404;
            return next(error);
        }

        res.json(updatedExpense);
    } catch (error) {
        next(error);
    }
};

/*
 * @desc Delete expense
 * @route DELETE /api/expenses/:id
 */
export const deleteExpense = async (req, res, next) => {
    try {
        const deletedExpense = await Expense.findByIdAndDelete(req.params.id);

        if (!deletedExpense) {
            const error = new Error(
                `Expense with ID ${req.params.id} not found.`
            );
            error.status = 404;
            return next(error);
        }

        res.status(204).end();
    } catch (error) {
        next(error);
    }
};
