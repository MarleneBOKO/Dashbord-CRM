import React, { useState } from "react";

function Table() {
  const initialCustomers = [
    { name: "Jane Cooper", company: "Microsoft", phone: "(225) 555-0118", email: "jane@microsoft.com", country: "United States", status: "Active" },
    { name: "Floyd Miles", company: "Yahoo", phone: "(205) 555-0100", email: "floyd@yahoo.com", country: "Kiribati", status: "Inactive" },
    { name: "Ronald Richards", company: "Adobe", phone: "(302) 555-0107", email: "ronald@adobe.com", country: "Israel", status: "Inactive" },
    { name: "Marvin McKinney", company: "Tesla", phone: "(252) 555-0126", email: "marvin@tesla.com", country: "Iran", status: "Active" },
    { name: "Jerome Bell", company: "Google", phone: "(629) 555-0129", email: "jerome@google.com", country: "Réunion", status: "Active" },
    { name: "Kathryn Murphy", company: "Microsoft", phone: "(406) 555-0120", email: "kathryn@microsoft.com", country: "Curaçao", status: "Active" },
    { name: "Jacob Jones", company: "Yahoo", phone: "(208) 555-0112", email: "jacob@yahoo.com", country: "Brazil", status: "Active" },
    { name: "Kristin Watson", company: "Facebook", phone: "(704) 555-0127", email: "kristin@facebook.com", country: "Åland Islands", status: "Inactive" },
  ];

  const [customers, setCustomers] = useState(initialCustomers);

  const toggleStatus = (index) => {
    const customer = customers[index];
    const confirmation = window.confirm(
      `Voulez-vous vraiment ${customer.status === "Active" ? "désactiver" : "activer"} cet utilisateur ?`
    );

    if (confirmation) {
      const updatedCustomers = [...customers];
      updatedCustomers[index].status =
        customer.status === "Active" ? "Inactive" : "Active";
      setCustomers(updatedCustomers);
    }
  };

  return (
    <div className="mt-10 p-6 mb-[78px] bg-white rounded-[30px] ">
      <div className="flex justify-between items-center mt-[30px]">
        <div className="flex flex-col gap-[7px]">
          <h2 className="text-[22px] font-semibold text-black">All Customers</h2>
          <span className="text-[#16C098] text-sm">Active Members</span>
        </div>
        <div className="flex items-center space-x-4">
            <div
              className="w-[216px] h-[38px] flex rounded-xl bg-[#F9FBFF] items-center p-3"
              style={{
                boxShadow: "0px 10px 60px 0px rgba(226, 236, 249, 0.50)",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                  stroke="#7E7E7E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 21L16.65 16.65"
                  stroke="#7E7E7E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                type="text"
                placeholder="Search"
                className="text-[#B5B7C0] text-sm ml-2 focus:outline-none w-full bg-transparent"
              />
            </div>
            <div
              className="w-[216px] h-[38px] flex justify-between rounded-xl bg-[#F9FBFF] items-center p-3"
              style={{
                boxShadow: "0px 10px 60px 0px rgba(226, 236, 249, 0.50)",
              }}
            >
              <span className="text-[#7E7E7E] text-xs ">Short by : <strong className="text-[#3D3C42] text-xs ">Newest</strong></span>
              <svg className="" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="#3D3C42" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
             
            </div>
            
                       </div>
      </div>

      <div className="overflow-x-auto mt-[40px]">
        <table className="min-w-full border-collapse table-auto">
          <thead className="border border-t-0 border-x-0 border-[#EEE]">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-[#B5B7C0]">Customer Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-[#B5B7C0]">Company</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-[#B5B7C0]">Phone Number</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-[#B5B7C0]">Email</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-[#B5B7C0]">Country</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-[#B5B7C0]">Status</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr
                key={index}
                className={`border border-t-0 border-x-0 border-[#EEE] ${
                  customer.status === "Inactive" ? "opacity-35" : ""
                }`}
              >
                <td className="px-6 py-4 text-sm text-[#292D32] font-medium">{customer.name}</td>
                <td className="px-6 py-4 text-sm text-[#292D32] font-medium">{customer.company}</td>
                <td className="px-6 py-4 text-sm text-[#292D32] font-medium">{customer.phone}</td>
                <td className="px-6 py-4 text-sm text-[#292D32] font-medium">{customer.email}</td>
                <td className="px-6 py-4 text-sm text-[#292D32] font-medium">{customer.country}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => toggleStatus(index)}
                    className={`px-3 py-1 justify-center items-center flex gap-10 w-[80px] rounded-[4px] border text-sm font-medium ${
                      customer.status === "Active"
                        ? "bg-green-100 text-[#008767] border-[#00B087]"
                        : "bg-[#FFC5C5] text-[#DF0404] border-[#DF0404]"
                    }`}
                  >
                    {customer.status}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-8 mb-[41px] ">
          <span className="text-sm text-[#B5B7C0]">
            Showing data 1 to 8 of 256K entries
          </span>
          <div className="flex items-center space-x-2">
            <button className="px-[9px] py-[6px] bg-[#F5F5F5] text-xs rounded-[4px] border border[#EEE] text-[#404B52] ">{"<"}</button>
            {[1, 2, 3, 4].map((page) => (
              <button
                key={page}
                className={`px-[10px] py-[6px] text-xs rounded-[4px] ${
                  page === 1
                    ? "bg-[#5932EA] text-white border border-[#5932EA] "
                    : "bg-[#F5F5F5] border border-[#EEE] text-[#404B52]"
                }`}
              >
                {page}
              </button>
            ))}
            <span className="px-2">...</span>
            <button className="px-[10px] py-[6px] text-xs rounded-[4px] bg-[#F5F5F5] border border-[#EEE] text-[#404B52]">40</button>
            <button className="px-[9px] py-[6px] bg-[#F5F5F5] text-xs rounded-[4px] border border[#EEE] text-[#404B52]">{">"}</button>
          </div>
        </div>
    </div>
  );
}

export default Table;
