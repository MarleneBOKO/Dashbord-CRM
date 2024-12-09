import  { useState } from "react";

function IncomeTable() {
  const initialIncomeRecords = [
    { month: "January", income: "$5000", expenses: "$2000", profit: "$3000", status: "Active" 
    },
    { month: "February", income: "$6000", expenses: "$2500", profit: "$3500", status: "Inactive" },
  ];

  const [incomeRecords, setIncomeRecords] = useState(initialIncomeRecords);

  const toggleStatus = (index) => {
    const record = incomeRecords[index];
    const confirmation = window.confirm(
      `Voulez-vous vraiment ${record.status === "Active" ? "désactiver" : "activer"} cet enregistrement ?`
    );

    if (confirmation) {
      const updatedRecords = [...incomeRecords];
      updatedRecords[index].status = record.status === "Active" ? "Inactive" : "Active";
      setIncomeRecords(updatedRecords);
    }
  };

  return (
    <div className="mt-10 p-6 mb-[78px] bg-white rounded-[30px] min-w-screen">
      <div className="flex justify-between items-center mt-[30px]">
        <div className="flex flex-col gap-[7px]">
          <h2 className="text-[22px] font-semibold text-black">Income Records</h2>
          <span className="text-[#16C098] text-sm">Monthly Income</span>
        </div>
      </div>

      <div className="overflow-x-auto mt-[40px]">
        <table className="min-w-full border-collapse table-auto">
          <thead className="border border-t-0 border-x-0 border-[#EEE]">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-[#B5B7C0]">Month</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-[#B5B7C0]">Income</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-[#B5B7C0]">Expenses</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-[#B5B7C0]">Profit</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-[#B5B7C0]">Status</th>
            </tr>
          </thead>
          <tbody>
            {incomeRecords.map((record, index) => (
              <tr key={index} className="border border-t-0 border-x-0 border-[#EEE]">
                <td className="px-6 py-4 text-sm text-[#292D32] font-medium">{record.month}</td>
                <td className="px-6 py-4 text-sm text-[#292D32] font-medium">{record.income}</td>
                <td className="px-6 py-4 text-sm text-[#292D32] font-medium">{record.expenses}</td>
                <td className="px-6 py-4 text-sm text-[#292D32] font-medium">{record.profit}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => toggleStatus(index)}
                    className={`px-3 py-1 justify-center items-center flex gap-10 w-[80px] rounded-[4px] border text-sm font-medium ${
                      record.status === "Active"
                        ? "bg-green-100 text-[#008767] border-[#00B087]"
                        : "bg-[#FFC5C5] text-[#DF0404] border-[#DF0404]"
                    }`}
                  >
                    {record.status}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default IncomeTable;