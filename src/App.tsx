import { useEffect, useState } from "react";
import "./App.css";
import { Expense } from "./types/expense";
import { Dashboard } from "./components/Dashboard";
import ExpenseForm from "./components/ExpenseForm";
import { ExpenseList } from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("expenses");
    if (saved) setExpenses(JSON.parse(saved));
  }, []);

  const addExpense = (expense: Expense) => {
    setExpenses([expense, ...expenses]);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    setShowForm(false);
  };

  return (
    <div className="relative min-h-screen bg-slate-50 p-4 pb-20">
      <Dashboard expenses={expenses} />
      <ExpenseList expenses={expenses} />

      {/* Floating Add Button */}
      <button
        onClick={() => setShowForm(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center text-3xl shadow-lg hover:bg-blue-700"
      >
        +
      </button>

      {/* Modal form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-4 w-11/12 max-w-sm">
            <ExpenseForm onAddExpense={addExpense} />
            <button
              onClick={() => setShowForm(false)}
              className="mt-2 w-full py-2 rounded bg-red-500 text-white hover:bg-red-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
