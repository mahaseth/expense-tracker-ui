import { useEffect, useState } from "react";
import "./App.css";
import { Expense } from "./types/expense";
import { Dashboard } from "./components/Dashboard";
import ExpenseForm from "./components/ExpenseForm";
import { ExpenseList } from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("expenses");
    if (saved) setExpenses(JSON.parse(saved));
  }, [expenses]);

  const addExpense = (expense: Expense) => setExpenses([expense, ...expenses]);

  return (
    <>
      <div className="max-w-md mx-auto p-4 space-y-4">
        <Dashboard expenses={expenses} />
        <ExpenseForm onAddExpense={addExpense} />
        <ExpenseList expenses={expenses} />
      </div>
    </>
  );
}

export default App;
