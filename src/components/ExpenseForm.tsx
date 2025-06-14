import React, { useState } from "react";
import { Expense } from "../types/expense";

interface ExpenseFormProps {
  onAddExpense: (expense: Expense) => void;
}

function ExpenseForm({ onAddExpense }: ExpenseFormProps) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description || !amount || !category) return;
    onAddExpense({
      id: Date.now().toString(),
      description,
      amount: parseFloat(amount),
      date: new Date().toISOString(),
      category,
      note: note.trim() ? note : undefined,
    });
    setDescription("");
    setAmount("");
    setCategory("");
    setNote("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded shadow p-4 space-y-3"
    >
      <input
        className="w-full border rounded p-2"
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <input
        className="w-full border rounded p-2"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <input
        className="w-full border rounded p-2"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <textarea
        className="w-full border rounded p-2"
        placeholder="Note (optional)"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button className="bg-blue-600 text-white py-2 px-4 rounded w-full hover:bg-blue-700">
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;
