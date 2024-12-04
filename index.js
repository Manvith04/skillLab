const express = require("express");
// const bodyParser = require("body-parser");
const expenseRoutes = require("./routes/expenseRoutes");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/expenses", expenseRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
app.get("/",(req,res)=>{
  const name= req.query.name||"User";
  res.send(`Hello ${name}, how are you?`);
})
const names=[]
app.post("/addnames",(req,res)=>{
  const {name,religion} = req.body;
  if(name&&religion) {names.push({"name": name,"religion": religion}); res.status(200).json({"message":"added successfully"})}
  res.status(404).json({"message: ":"failed"})
})

app.get("/viewnames",(req,res)=>{
  return res.status(200).json({names});
})
// const cron = require("node-cron");

// Cron Job: Generate daily summaries
// cron.schedule("0 0 * * *", () => {
//   const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
//   console.log(`Daily Expense Summary: $${total}`);
// });
