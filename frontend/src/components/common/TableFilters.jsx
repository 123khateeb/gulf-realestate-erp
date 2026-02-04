import React from 'react';
import { Search, RotateCcw } from "lucide-react";

const TableFilters = ({ searchTerm, onSearchChange, roleFilter, onRoleChange, statusFilter, onStatusChange, onReset }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 p-5 bg-transparent">
      {/* Search Input */}
      <div className="relative w-full md:w-80">
        <span className="absolute inset-y-0 left-3 flex items-center text-[var(--color-text-muted)]">
          <Search size={16} />
        </span>
        <input
          type="text"
          placeholder="Search staff..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-[var(--color-primary-light)]/10 border border-[var(--color-border-subtle)] rounded-lg outline-none focus:border-[var(--color-primary)] text-[13px] transition-all"
        />
      </div>

      {/* Role Filter */}
      <select 
        value={roleFilter}
        onChange={(e) => onRoleChange(e.target.value)}
        className="w-full md:w-44 px-3 py-2 bg-[var(--color-primary-light)]/10 border border-[var(--color-border-subtle)] rounded-lg text-[13px] outline-none focus:border-[var(--color-primary)] cursor-pointer"
      >
        <option value="">All Roles</option>
        <option value="Super Admin">Super Admin</option>
        <option value="Manager">Manager</option>
        <option value="Staff">Staff</option>
      </select>

      {/* Status Filter */}
      <select 
        value={statusFilter}
        onChange={(e) => onStatusChange(e.target.value)}
        className="w-full md:w-44 px-3 py-2 bg-[var(--color-primary-light)]/10 border border-[var(--color-border-subtle)] rounded-lg text-[13px] outline-none focus:border-[var(--color-primary)] cursor-pointer"
      >
        <option value="">All Status</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>

      {/* Reset Button */}
      <button 
        onClick={onReset}
        className="p-2 text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary-light)] rounded-lg transition-all"
        title="Reset Filters"
      >
        <RotateCcw size={18} />
      </button>
    </div>
  );
};

export default TableFilters;