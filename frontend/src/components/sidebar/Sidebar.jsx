import {
  LayoutDashboard,
  Building2,
  Users,
  Settings,
  ChevronLeft,
  ChevronRight,
  Home,
} from "lucide-react"; // ✅ Home icon add kiya
import SidebarButtonsOne from "./SidebarButtonsOne";
import SideBarDropdown from "./SidebarDropdown";
import SideBarButtonTwo from "./SideBarButtonTwo";
import { useState } from "react";

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  // 1. Backend-Ready JSON Structure
  const menuConfig = [
    {
      section: "", 
      items: [
        {
          id: 1,
          label: "Dashboard",
          icon: "LayoutDashboard",
          path: "/dashboard",
        },
      ],
    },
    {
      section: "User Management",
      items: [
        {
          id: 2,
          label: "Staff",
          icon: "Users",
          children: [
            { label: "Add Staff", path: "/staff/add" },
            { label: "View All", path: "/staff/all" },
          ],
        },
      ],
    },
    {
      section: "Inventory",
      items: [
        { id: 3, label: "Properties", icon: "Building2", path: "/properties" },
      ],
    },
  ];

  return (
    <div
      className={`h-screen bg-white transition-all duration-300 relative ${isCollapsed ? "w-20" : "w-64"} border-r border-[#f1f1f2] flex flex-col`}
    >
      {/* Toggle Button: Metronic mein ye aksar soft gray hota hai */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={`
                    p-2 bg-white border border-[#f1f1f2] rounded-[7px] cursor-pointer 
                    flex items-center justify-center absolute top-[19px] z-50 
                    hover:text-blue-600 transition-all shadow-sm
                    /* LTR mein right par, RTL mein left par automatic adjustment */
                    -end-3 
                `}
      >
        
        {isCollapsed ? (
          <ChevronRight size={14} className="rtl:rotate-180" />
        ) : (
          <ChevronLeft size={14} className="rtl:rotate-180" />
        )}
      </button>

      {/* Brand Logo Area */}
      <div
        className={`w-full h-[70px] flex items-center h-20 px-6 ${isCollapsed ? "justify-center" : "justify-start"}`}
      >
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
          G
        </div>
        {!isCollapsed && (
          <span className="ml-3 font-bold text-[#252f4a] text-lg tracking-tight">
            REAL ESTATE
          </span>
        )}
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto px-4 py-4 custom-scrollbar">
        {menuConfig.map((group, index) => (
          <div key={index} className="mb-6">
            {!isCollapsed && group.section && (
              <div className="text-[11px] font-bold uppercase text-[#78829d] tracking-wider mb-3 px-2 opacity-80">
                {group.section}
              </div>
            )}

            {/* Items Mapping */}
            <div className="space-y-1">
              {group.items.map((item) =>
                item.children ? (
                  <SideBarDropdown
                    key={item.id}
                    label={item.label}
                    iconName={item.icon}
                    isCollapsed={isCollapsed}
                    iconSize={16}
                  >
                    {item.children.map((child, i) => (
                      <SideBarButtonTwo
                        key={i}
                        label={child.label}
                        path={child.path}
                      />
                    ))}
                  </SideBarDropdown>
                ) : (
                  <SidebarButtonsOne
                    key={item.id}
                    buttonName={item.label}
                    iconName={item.icon}
                    iconSize={16}
                    href={item.path}
                    isCollapsed={isCollapsed}
                  />
                ),
              )}
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
