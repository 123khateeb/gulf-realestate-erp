import { useState } from "react";
import PageHeader from "../components/common/PageHeader";
import DataTable from "../components/common/DataTable";
import StatusBadge from "../components/common/StatusBadge";
import TableFilters from "../components/common/TableFilters";
import { Edit2, Trash2 } from "lucide-react";

// Dummy Data
const initialStaffData = [
  { id: 1, name: "Khateeb", email: "khateeb@example.com", role: "Super Admin", status: "Active", joined: "12 Jan 2026" },
  { id: 2, name: "Rahul Sharma", email: "rahul@example.com", role: "Manager", status: "Inactive", joined: "05 Feb 2026" },
  { id: 3, name: "Zaid Khan", email: "zaid@example.com", role: "Staff", status: "Active", joined: "10 Jan 2026" },
  { id: 4, name: "Sanya Malhotra", email: "sanya@example.com", role: "Manager", status: "Active", joined: "20 Jan 2026" },
];

const StaffList = () => {
  // --- States for Filtering ---
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  // --- Column Configuration ---
  const columns = [
    { 
      header: "Staff Member", 
      key: "name", 
      render: (val, row) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[var(--color-primary-light)] text-[var(--color-primary)] flex items-center justify-center font-bold">
            {val.charAt(0)}
          </div>
          <div>
            <p className="text-[14px] font-bold text-[var(--color-text-header)]">{val}</p>
            <p className="text-[12px] text-[var(--color-text-muted)]">{row.email}</p>
          </div>
        </div>
      )
    },
    { 
      header: "Role", 
      key: "role", 
      render: (val) => <StatusBadge status={val} /> 
    },
    { 
      header: "Status", 
      key: "status", 
      render: (val) => <StatusBadge status={val} /> 
    },
    { 
      header: "Joined Date", 
      key: "joined",
      render: (val) => <span className="text-[13px] text-[var(--color-text-muted)]">{val}</span>
    },
    { 
      header: "Actions", 
      key: "id", 
      className: "text-right",
      render: () => (
        <div className="flex justify-end gap-2">
          <button className="p-2 hover:bg-[var(--color-primary-light)] rounded-md text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-all cursor-pointer">
            <Edit2 size={16} />
          </button>
          <button className="p-2 hover:bg-red-50 rounded-md text-[var(--color-text-muted)] hover:text-red-500 transition-all cursor-pointer">
            <Trash2 size={16} />
          </button>
        </div>
      )
    },
  ];

  // --- Real-time Filter Logic ---
  const filteredData = initialStaffData.filter((item) => {
    const matchesSearch = 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesRole = roleFilter === "" || item.role === roleFilter;
    const matchesStatus = statusFilter === "" || item.status === statusFilter;

    return matchesSearch && matchesRole && matchesStatus;
  });

  const handleReset = () => {
    setSearchTerm("");
    setRoleFilter("");
    setStatusFilter("");
  };

  return (
    <div className="space-y-6">
      <PageHeader 
        label="Staff Management" 
        description="View and manage your team members, their roles, and system access."
        buttonLabel="Add New Staff"
        to="/staff/add"
      />

      {/* Main Data Section */}
      <DataTable 
        columns={columns} 
        data={filteredData} 
        filterSection={
          <TableFilters 
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            roleFilter={roleFilter}
            onRoleChange={setRoleFilter}
            statusFilter={statusFilter}
            onStatusChange={setStatusFilter}
            onReset={handleReset}
          />
        } 
      />
    </div>
  );
};

export default StaffList;