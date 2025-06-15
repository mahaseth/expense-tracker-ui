import { DataTable } from "primereact/datatable";
import { Expense } from "../types/expense";
import { Column } from "primereact/column";
import { Chip } from "primereact/chip";
import { useRef, useState } from "react";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";

export const ExpenseList = ({ expenses }: { expenses: Expense[] }) => {
  const [selectedMonth, setSelectedMonth] = useState<Date | null>(new Date());

  const calendarRef = useRef<Calendar | null>(null);

  const formattedMonth = selectedMonth?.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const formatDate = (isoDate: string) =>
    new Date(isoDate).toLocaleDateString("en-US", {
      day: "numeric",
    });

  const filteredExpenses = expenses.filter((e) => {
    const expDate = new Date(e.date);
    return (
      selectedMonth &&
      expDate.getMonth() === selectedMonth.getMonth() &&
      expDate.getFullYear() === selectedMonth.getFullYear()
    );
  });

  const formattedExpenses = filteredExpenses.map((exp) => ({
    ...exp,
    displayDate: formatDate(exp.date as any),
  }));

  const DayChip = (date: string) => {
    const day = new Date(date).toLocaleDateString("en-US", {
      weekday: "short",
    });

    return <Chip label={day} className="text-sm bg-blue-100 text-blue-800" />;
  };

  const rowGroupHeaderTemplate = (data: any) => (
    <span className="font-semibold text-lg text-gray-800 py-2 block">
      {data.displayDate} {DayChip(data.date)}
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
      <div className="mb-4">
        <Button
          label={formattedMonth}
          icon="pi pi-calendar"
          onClick={() => calendarRef.current?.show?.()}
          className="p-button-text font-semibold text-lg"
        />

        {/* Hidden Calendar (only popup is used) */}
        <span style={{ visibility: "hidden" }}>
          <Calendar
            ref={calendarRef}
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.value as Date)}
            view="month"
            dateFormat="mm/yy"
            panelClassName="month-picker"
          />
        </span>
      </div>
      <DataTable
        size="small"
        value={formattedExpenses}
        rowGroupMode="subheader"
        groupRowsBy="displayDate"
        sortMode="single"
        sortField="date"
        sortOrder={-1}
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
