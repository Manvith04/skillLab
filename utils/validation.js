const predefinedCategories = ["Food", "Travel", "Utilities", "Entertainment", "Health"];

const validateExpense = (expense) => {
  if (!predefinedCategories.includes(expense.category)) {
    return { valid: false, error: "Invalid category." };
  }
  if (expense.amount <= 0 || isNaN(expense.amount)) {
    return { valid: false, error: "Amount must be a positive number." };
  }
  if (isNaN(Date.parse(expense.date))) {
    return { valid: false, error: "Invalid date." };
  }
  return { valid: true, error: null };
};

module.exports = { validateExpense };
