const DataTable = ({ columns, data, filterSection }) => {
  return (
    <div className="w-full bg-[var(--color-bg-navbar)] border border-[var(--color-border-subtle)] rounded-xl shadow-sm overflow-hidden">
      
      {/* Agar filterSection pass kiya gaya hai, toh yahan dikhao */}
      {filterSection && (
        <div className="border-b border-[var(--color-border-subtle)]">
          {filterSection}
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[var(--color-primary-light)]/20 border-b border-[var(--color-border-subtle)]">
              {columns.map((col, index) => (
                <th key={index} className={`px-6 py-4 text-[12px] font-bold uppercase text-[var(--color-text-muted)] ${col.className || ""}`}>
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--color-border-subtle)]">
            {data.length > 0 ? (
              data.map((row, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-[var(--color-primary-light)]/5 transition-colors">
                  {columns.map((col, colIndex) => (
                    <td key={colIndex} className={`px-6 py-4 text-[14px] ${col.className || ""}`}>
                      {col.render ? col.render(row[col.key], row) : row[col.key]}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="px-6 py-10 text-center text-[var(--color-text-muted)] text-[14px]">
                  No records found matching your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;