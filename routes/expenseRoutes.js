const express = require("express");
const { addExpense, getExpenses, analyzeSpending } = require("../controllers/expenseController");

const router = express.Router();

router.post("/", addExpense);            // Add Expense
router.get("/", getExpenses);            // Get Expenses
router.get("/analysis", analyzeSpending); // Analyze Spending

module.exports = router;
