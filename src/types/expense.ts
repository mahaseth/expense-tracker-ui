export interface Expense {
  id: string;
  description: string;
  date: string;
  category: string;
  amount: number;
  note?: string;
}