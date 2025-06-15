export interface Expense {
  id: string;
  description: string;
  date: Date;
  category: string;
  amount: number;
  note?: string;
}