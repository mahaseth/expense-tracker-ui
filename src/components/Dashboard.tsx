import { Expense } from "../types/expense";

export const Dashboard = ({ expenses }: { expenses: Expense[] }) => {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  return (
    <div className="p-4 bg-slate-200 rounded shadow">
      <h2 className="text-xl font-bold">Total Spent</h2>
      <p className="text-2xl text-blue-600">Rs. {total.toFixed(2)}</p>
    </div>
  );
};
