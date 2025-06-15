import { useEffect, useState } from "react";
import { Expense } from "../types/expense";
import { Dashboard } from "../components/Dashboard";
import ExpenseForm from "../components/ExpenseForm";
import { ExpenseList } from "../components/ExpenseList";
import { Button } from "primereact/button";

interface Props {
  onLogout: () => void;
}

function Layout({ onLogout }: Props) {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("expenses");
    if (saved) setExpenses(JSON.parse(saved));
  }, []);

  const addExpense = (expense: Expense) => {
    setExpenses([expense, ...expenses]);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    setShowForm(false);
  };
  //     label: "Home",
  //     icon: "pi pi-home",
  //     template: (item, options) => (
  //       <button
  //         {...options}
  //         className={`
  //         flex flex-col items-center justify-center flex-1 py-2
  //         ${options.active ? "text-blue-600" : "text-gray-600"}
  //       `}
  //       >
  //         <i className={`${item.icon} text-xl`} />
  //         <span className="text-xs mt-1">{item.label}</span>
  //       </button>
  //     ),
  //   },
  //   {
  //     label: "Expenses",
  //     icon: "pi pi-wallet",
  //     template: (item, options) => (
  //       <button
  //         {...options}
  //         className={`
  //         flex flex-col items-center justify-center flex-1 py-2
  //         ${options.active ? "text-blue-600" : "text-gray-600"}
  //       `}
  //       >
  //         <i className={`${item.icon} text-xl`} />
  //         <span className="text-xs mt-1">{item.label}</span>
  //       </button>
  //     ),
  //   },
  //   {
  //     label: "Profile",
  //     icon: "pi pi-user",
  //     template: (item, options) => (
  //       <button
  //         {...options}
  //         className={`
  //         flex flex-col items-center justify-center flex-1 py-2
  //         ${options.active ? "text-blue-600" : "text-gray-600"}
  //       `}
  //       >
  //         <i className={`${item.icon} text-xl`} />
  //         <span className="text-xs mt-1">{item.label}</span>
  //       </button>
  //     ),
  //   },
  // ];

  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
    },
    {
      label: "Expenses",
      icon: "pi pi-wallet",
    },
    {
      label: "Profile",
      icon: "pi pi-user",
    },
  ];

  return (
    <>
      <div className="flex flex-col relative min-h-screen bg-slate-50">
        <Button
          label="Logout"
          icon="pi pi-sign-out"
          className="p-button-danger"
          onClick={onLogout}
        />
        <div className="p-4 pb-20 flex-1 overflow-y-auto">
          {activeIndex === 0 && <Dashboard expenses={expenses} />}
          {activeIndex === 1 && <ExpenseList expenses={expenses} />}
        </div>

        <div className="sticky bottom-0 w-full bg-white shadow z-50 pb-3">
          <div className="flex">
            {items.map((item, index) => (
              <button
                key={item.label}
                onClick={() => setActiveIndex(index)}
                className={`
              flex flex-col items-center justify-center flex-1 py-2
              ${index === activeIndex ? "text-blue-600" : "text-gray-600"}
            `}
              >
                <i className={`${item.icon} text-xl`} />
                <span className="text-xs mt-1">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Floating Add Button */}
        <button
          onClick={() => setShowForm(true)}
          className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center text-3xl shadow-lg hover:bg-blue-700 mb-12"
        >
          +
        </button>

        {/* Modal form */}
        {showForm && (
          <div className="fixed inset-0 bg-white bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg w-11/12 max-w-sm">
              <ExpenseForm
                onAddExpense={addExpense}
                setShowForm={setShowForm}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Layout;
