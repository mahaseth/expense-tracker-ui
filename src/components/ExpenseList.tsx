import { DataTable } from "primereact/datatable";
import { Expense } from "../types/expense";
import { Column } from "primereact/column";

export const ExpenseList = ({ expenses }: { expenses: Expense[] }) => {
  const formatDate = (isoDate: string) =>
    new Date(isoDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const formattedExpenses = expenses.map((exp) => ({
    ...exp,
    displayDate: formatDate(exp.date as any),
  }));

  const rowGroupHeaderTemplate = (data: any) => (
    <span className="font-semibold text-lg text-gray-800 py-2 block">
      {data.displayDate}
    </span>
  );

  const descriptionBodyTemplate = (rowData: any) => (
    <span>
      {rowData.description} ({rowData.category})
    </span>
  );

  const amountBodyTemplate = (rowData: any) => (
    <span className="text-blue-600 font-medium">
      Rs {rowData.amount.toFixed(2)}
    </span>
  );

  return (
    <div className="card">
      <DataTable
        value={formattedExpenses}
        rowGroupMode="subheader"
        groupRowsBy="displayDate"
        sortMode="single"
        sortField="displayDate"
        sortOrder={1}
        scrollable
        scrollHeight="70vh"
        rowGroupHeaderTemplate={rowGroupHeaderTemplate}
        showHeaders={false}
      >
        <Column body={descriptionBodyTemplate} header="Expense" />
        <Column
          body={amountBodyTemplate}
          header="Amount"
          style={{ width: "150px", textAlign: "left" }}
        />
      </DataTable>
    </div>
  );
};
