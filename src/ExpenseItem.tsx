export const ExpenseItem = ({ title, amount }: { title: string; amount: number }) => (
  <div className="bg-white rounded-lg shadow p-4 flex justify-between">
    <span className="font-medium">{title}</span>
    <span className="text-blue-600 font-bold">${amount.toFixed(2)}</span>
  </div>
);