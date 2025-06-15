import { Expense } from "../types/expense";

export const ExpenseList = ({ expenses }: { expenses: Expense[] }) => (
  <div className="mt-4 space-y-2">
    {expenses.map((exp) => (
      <div
        key={exp.id}
        className="flex justify-between p-2 bg-slate-100 rounded"
      >
        <span>
          {exp.description} ({exp.category}) (
          {exp.date ? new Date(exp.date).toLocaleDateString() : ""})
        </span>
        <span className="text-blue-600">Rs {exp.amount.toFixed(2)}</span>
      </div>
    ))}
  </div>
);
