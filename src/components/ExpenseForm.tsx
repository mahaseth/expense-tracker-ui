import React, { useState } from "react";
import { Expense } from "../types/expense";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { FloatLabel } from "primereact/floatlabel";

interface ExpenseFormProps {
  onAddExpense: (expense: Expense) => void;
  setShowForm: (value: boolean) => void;
}

function ExpenseForm({ onAddExpense, setShowForm }: ExpenseFormProps) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [note, setNote] = useState("");
  const [date, setDate] = useState<Date>(new Date());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description || !amount || !category) return;
    onAddExpense({
      id: Date.now().toString(),
      description,
      amount: parseFloat(amount),
      date,
      category,
      note: note.trim() ? note : undefined,
    });
    setDescription("");
    setAmount("");
    setCategory("");
    setNote("");
  };
  return (
    <div className="w-full h-screen p-4 bg-white overflow-auto">
      <form
        onSubmit={handleSubmit}
        className="space-y-5 flex flex-col justify-center h-full"
      >
        <FloatLabel>
          <Calendar
            id="date"
            value={date}
            onChange={(e) => setDate(e.value as any)}
            showIcon
            className="w-full"
          />
          <label htmlFor="date">Date</label>
        </FloatLabel>

        <FloatLabel>
          <InputText
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full"
            required
          />
          <label htmlFor="amount">Amount</label>
        </FloatLabel>

        <FloatLabel>
          <InputText
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full"
            required
          />
          <label htmlFor="category">Category</label>
        </FloatLabel>

        <FloatLabel>
          <InputText
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full"
            required
          />
          <label htmlFor="description">Description</label>
        </FloatLabel>

        <FloatLabel>
          <InputTextarea
            id="note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={3}
            className="w-full"
          />
          <label htmlFor="note">Note (optional)</label>
        </FloatLabel>

        <Button
          type="submit"
          label="Add Expense"
          icon="pi pi-plus"
          className="w-full p-button-rounded p-button-success"
        />

        <Button
          label="Cancel"
          className=""
          link
          onClick={() => setShowForm(false)}
        />
      </form>
    </div>
  );
}

export default ExpenseForm;
