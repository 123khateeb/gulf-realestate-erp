import {
  LayoutDashboard,
  Building2,
  Users,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import SidebarButtonsOne from "./SidebarButtonsOne";
import SideBarDropdown from "./SidebarDropdown";
import SideBarButtonTwo from "./SideBarButtonTwo";

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const menuConfig = [
    {
      section: "",
      items: [{ id: 1, label: "Dashboard", icon: "LayoutDashboard", path: "/dashboard" }],
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
      items: [{ id: 3, label: "Properties", icon: "Building2", path: "/properties" }],
    },
  ];

  return (
    <div
      className={`h-screen transition-all duration-300 relative flex flex-col
      ${isCollapsed ? "w-[var(--sidebar-width-collapsed,75px)]" : "w-[var(--sidebar-width,265px)]"}
      bg-[var(--color-bg-sidebar)] border-e border-[var(--color-border-subtle)]`}
    >
      {/* 1. Toggle Button: Colors mapped to variables */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="p-2 absolute top-[19px] -end-3 z-50 rounded-[7px] cursor-pointer shadow-sm transition-all
        bg-[var(--color-bg-sidebar)] border border-[var(--color-border-subtle)] 
        text-[var(--color-text-muted)] hover:text-[var(--color-primary)]"
      >
        {isCollapsed ? (
          <ChevronRight size={14} className="rtl:rotate-180" />
        ) : (
          <ChevronLeft size={14} className="rtl:rotate-180" />
        )}
      </button>

      {/* 2. Brand Logo Area */}
      <div className={`w-full h-[70px] flex items-center px-6 ${isCollapsed ? "justify-center" : "justify-start"}`}>
        <div className="w-9 h-9 bg-[var(--color-primary)] rounded-lg flex items-center justify-center text-white font-bold shrink-0">
          G
        </div>
        {!isCollapsed && (
          <span className="ms-3 font-bold text-[var(--color-text-header)] text-[var(--font-size-18px)] tracking-tight truncate">
            REAL ESTATE
          </span>
        )}
      </div>

      {/* 3. Navigation Menu */}
      <nav className="flex-1 overflow-y-auto px-4 py-4 custom-scrollbar">
        {menuConfig.map((group, index) => (
          <div key={index} className="mb-6">
            {!isCollapsed && group.section && (
              <div className="text-[var(--font-size-11px)] font-[var(--font-weight-700)] uppercase text-[var(--color-text-muted)] tracking-wider mb-3 px-2 opacity-70">
                {group.section}
              </div>
            )}

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
                      <SideBarButtonTwo key={i} label={child.label} path={child.path} />
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
                )
              )}
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;