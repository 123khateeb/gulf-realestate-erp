import StatusBadge from "../common/StatusBadge";

const TransactionTable = () => {
  const transactionsData = [
    { id: 1, property: "Kingdom Tower, Riyadh", tenant: "Khateeb", date: "05 Feb, 2026", amount: "SAR 4,500", status: "Paid" },
    { id: 2, property: "Al Faisaliah Center", tenant: "Ahmad Ali", date: "02 Feb, 2026", amount: "SAR 3,200", status: "Pending" },
    { id: 3, property: "Damac Towers", tenant: "Sultan Khan", date: "28 Jan, 2026", amount: "SAR 7,800", status: "Overdue" },
  ];

  return (
    /* ✅ Wrapper with Dark Mode classes */
    <div className="bg-white dark:bg-[#1e1e2d] border border-[#f1f1f2] dark:border-[#2b2b40] rounded-xl shadow-xs w-full p-5 transition-colors duration-300">
      
      {/* Header Section */}
      <div className="flex items-center justify-between py-6 border-b border-[#f1f1f2] dark:border-[#2b2b40]">
        <div>
          <h3 className="text-[1.1rem] font-[700] text-[#252f4a] dark:text-[#ffffff]">
            Recent Transactions
          </h3>
          <p className="text-[13px] font-[500] text-[#78829d] dark:text-[#92929f]">
            Updated 5 minutes ago
          </p>
        </div>
        <button className="cursor-pointer text-[13px] font-[600] px-4 py-2 bg-[#f9f9f9] dark:bg-[#212e48] border border-[#dbdfe9] dark:border-[#2b2b40] text-[#252f4a] dark:text-[#ffffff] rounded-md hover:bg-[#f1f1f2] dark:hover:bg-[#2b2b40] transition-colors">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
            <thead className="border-b border-[#f1f1f2] dark:border-[#2b2b40]">
              <tr>
                  <th className="py-4 px-2 text-[12px] font-[600] text-[#b5b5c3] dark:text-[#565674] uppercase tracking-wider text-left">Sr.No</th>
                  <th className="py-4 px-2 text-[12px] font-[600] text-[#b5b5c3] dark:text-[#565674] uppercase tracking-wider text-left">Property</th>
                  <th className="py-4 px-2 text-[12px] font-[600] text-[#b5b5c3] dark:text-[#565674] uppercase tracking-wider text-left">Tenant</th>
                  <th className="py-4 px-2 text-[12px] font-[600] text-[#b5b5c3] dark:text-[#565674] uppercase tracking-wider text-left">Amount</th>
                  <th className="py-4 px-2 text-[12px] font-[600] text-[#b5b5c3] dark:text-[#565674] uppercase tracking-wider text-left">Status</th>
                  <th className="py-4 px-2 text-[12px] font-[600] text-[#b5b5c3] dark:text-[#565674] uppercase tracking-wider text-right">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f1f1f2] dark:divide-[#2b2b40]">
            {transactionsData.map((data, index) => (
                <tr key={data.id} className="hover:bg-[#fcfcfc] dark:hover:bg-[#212e48] transition-colors group">
                  {/* ✅ index + 1 taaki 1 se ginti shuru ho */}
                  <td className="py-4 px-2 text-[14px] font-[600] text-[#252f4a] dark:text-[#ffffff]">{index + 1}</td>
                  <td className="py-4 px-2 text-[14px] font-[600] text-[#252f4a] dark:text-[#ffffff]">{data.property}</td>
                  <td className="py-4 px-2 text-[14px] font-[500] text-[#4b5675] dark:text-[#92929f]">{data.tenant}</td>
                  <td className="py-4 px-2 text-[14px] font-[700] text-[#252f4a] dark:text-[#ffffff]">{data.amount}</td>
                  <td className="py-4 px-2 text-left">
                      <StatusBadge status={data.status} />
                  </td>
                  <td className="py-4 px-2 text-[13px] font-[500] text-[#78829d] dark:text-[#565674] text-right">{data.date}</td>
                </tr>
            ))}
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;