import StatusBadge from "../common/StatusBadge";

const TransactionTable = () => {
  const transactionsData = [
    {
      id: 1,
      property: "Kingdom Tower, Riyadh",
      tenant: "Khateeb",
      date: "05 Feb, 2026",
      amount: "SAR 4,500",
      status: "Paid",
    },
    {
      id: 2,
      property: "Al Faisaliah Center",
      tenant: "Ahmad Ali",
      date: "02 Feb, 2026",
      amount: "SAR 3,200",
      status: "Pending",
    },
    {
      id: 3,
      property: "Damac Towers",
      tenant: "Sultan Khan",
      date: "28 Jan, 2026",
      amount: "SAR 7,800",
      status: "Overdue",
    },
  ];

  return (
    <div className="bg-white border border-[#f1f1f2] rounded-xl shadow-xs w-full p-5">
      <div className="flex items-center justify-between py-6 border-b border-[#f1f1f2]">
        <div>
          <h3 className="text-[1.1rem] font-[700] text-[#252f4a]">
            Recent Transactions
          </h3>
          <p className="text-[13px] font-[500] text-[#78829d]">
            Updated 5 minutes ago
          </p>
        </div>
        <button className="cursor-pointer text-[13px] font-[600] px-4 py-2 bg-[#f9f9f9] border border-[#dbdfe9] rounded-md hover:bg-[#f1f1f2] transition-colors">
          View All
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
            <thead className="border-b border-[#f1f1f2]">
            <tr>
                <th className="p-2 text-[12px] font-[600] text-[#b5b5c3] uppercase tracking-wider text-left ">Sr.No</th>
                <th className="p-2 text-[12px] font-[600] text-[#b5b5c3] uppercase tracking-wider text-left ">Property</th>
                <th className="p-2 text-[12px] font-[600] text-[#b5b5c3] uppercase tracking-wider text-left ">Tenant</th>
                <th className="p-2 text-[12px] font-[600] text-[#b5b5c3] uppercase tracking-wider text-left ">Amount</th>
                <th className="p-2 text-[12px] font-[600] text-[#b5b5c3] uppercase tracking-wider text-left ">Status</th>
                <th className="p-2 text-[12px] font-[600] text-[#b5b5c3] uppercase tracking-wider text-right">Date</th>
            </tr>
            </thead>
            <tbody className="divide-y divide-[#f1f1f2]">
            {transactionsData.map((data, index) => (
                <tr key={data.id} className="hover:bg-[#fcfcfc] transition-colors group">
                <td className="p-2 text-[14px] font-[600] text-[#252f4a]">{index}</td>
                <td className="p-2  text-[14px] font-[600] text-[#252f4a]">{data.property}</td>
                <td className="p-2  text-[14px] font-[600] text-[#252f4a]">{data.tenant}</td>
                <td className="p-2  text-[14px] font-[600] text-[#252f4a]">{data.amount}</td>
                <td className="p-2 text-left">
                    <StatusBadge status={data.status} />
                </td>
                <td className="p-2 text-[13px] font-[500] text-[#78829d] text-right">{data.date}</td>
                </tr>
            ))}
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;
