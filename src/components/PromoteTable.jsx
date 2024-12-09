import React from "react";

function PromoteTable() {
  const promotions = [
    { offer: "20% off on first purchase", validUntil: "2024-12-31", status: "Active" },
    { offer: "Free shipping on orders over $50", validUntil: "2024-12-31", status: "Inactive" },
    // Add more promotions as needed
  ];

  return (
    <div className="mt-10 p-6 mb-[78px] bg-white rounded-[30px] min-w-screen">
      <div className="flex justify-between items-center mt-[30px]">
        <div className="flex flex-col gap-[7px]">
          <h2 className="text-[22px] font-semibold text-black">Promotions</h2>
          <span className="text-[#16C098] text-sm">Current Offers</span>
        </div>
      </div>

      <div className="overflow-x-auto mt-[40px]">
        <table className="min-w-full border-collapse table-auto">
          <thead className="border border-t-0 border-x-0 border-[#EEE]">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-[#B5B7C0]">Offer</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-[#B5B7C0]">Valid Until</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-[#B5B7C0]">Status</th>
            </tr>
          </thead>
          <tbody>
            {promotions.map((promotion, index) => (
              <tr key={index} className="border border-t-0 border-x-0 border-[#EEE]">
                <td className="px-6 py-4 text-sm text-[#292D32] font-medium">{promotion.offer}</td>
                <td className="px-6 py-4 text-sm text-[#292D32] font-medium">{promotion.validUntil}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-[4px] text-sm font-medium ${
                    promotion.status === "Active" ? "bg-green-100 text-[#008767]" : "bg-[#FFC5C5] text-[#DF0404]"
                  }`}>
                    {promotion.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PromoteTable;