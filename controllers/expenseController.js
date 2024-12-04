const { validateExpense } = require("../utils/validation");
let expenses = []; // In-memory storage

// Add Expense
const addExpense = (req, res) => {
  const { category, amount, date } = req.body;
  const validation = validateExpense({ category, amount, date });

  if (!validation.valid) {
    return res.status(400).json({ status: "error", data: null, error: validation.error });
  }

  const newExpense = { id: String(expenses.length + 1), category, amount, date };
  expenses.push(newExpense);
  res.json({ status: "success", data: newExpense, error: null });
};

// Get Expenses
const getExpenses = (req, res) => {
  const { category, start, end } = req.query;
  let filteredExpenses = expenses;

  if (category) {
    filteredExpenses = filteredExpenses.filter((e) => e.category === category);
  }

  if (start && end) {
    filteredExpenses = filteredExpenses.filter((e) =>
      new Date(e.date) >= new Date(start) && new Date(e.date) <= new Date(end)
    );
  }

  res.json({ status: "success", data: filteredExpenses, error: null });
};

// Analyze Spending
const analyzeSpending = (req, res) => {
  const { type } = req.query;

  if (type === "highest-category") {
    const totals = expenses.reduce((acc, e) => {
      acc[e.category] = (acc[e.category] || 0) + e.amount;
      return acc;
    }, {});
    const highestCategory = Object.keys(totals).reduce((a, b) => (totals[a] > totals[b] ? a : b));
    return res.json({ status: "success", data: { category: highestCategory, total: totals[highestCategory] }, error: null });
  }

  if (type === "monthly-total") {
    const monthlyTotals = expenses.reduce((acc, e) => {
      const month = new Date(e.date).toLocaleString("default", { month: "long" });
      acc[month] = (acc[month] || 0) + e.amount;
      return acc;
    }, {});
    return res.json({ status: "success", data: monthlyTotals, error: null });
  }

  res.status(400).json({ status: "error", data: null, error: "Invalid analysis type." });
};

module.exports = { addExpense, getExpenses, analyzeSpending };
