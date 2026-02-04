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
            { label: "Add Staff", path: "staff/add" },
            { label: "Staff List", path: "staff/list" },
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
    <>
      {/* 1. MOBILE OVERLAY: Sirf mobile par dikhega jab sidebar open ho */}
      {!isCollapsed && (
        <div 
          className="fixed inset-0 bg-black/40 z-[998] lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsCollapsed(true)}
        />
      )}

      {/* 2. SIDEBAR CONTAINER */}
      <div
        className={`fixed lg:relative h-screen transition-all duration-300 flex flex-col z-[999]
        ${isCollapsed 
          ? "-translate-x-full lg:translate-x-0 lg:w-[var(--sidebar-width-collapsed,75px)]" 
          : "translate-x-0 w-[var(--sidebar-width,265px)]"}
        bg-[var(--color-bg-sidebar)] border-e border-[var(--color-border-subtle)] shadow-2xl lg:shadow-none`}
      >
        
        {/* Toggle Button: Deskstop par visible, Mobile par hum Navbar se handle kar sakte hain */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 absolute top-[19px] -end-3 z-[1000] rounded-[7px] cursor-pointer shadow-sm transition-all
          bg-[var(--color-bg-sidebar)] border border-[var(--color-border-subtle)] 
          text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hidden lg:flex"
        >
          {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>

        {/* Brand Logo Area */}
        <div className={`w-full h-[70px] flex items-center px-6 ${isCollapsed ? "justify-center" : "justify-start"}`}>
          <div className="w-9 h-9 bg-[var(--color-primary)] rounded-lg flex items-center justify-center text-white font-bold shrink-0 shadow-lg shadow-blue-500/20">
            G
          </div>
          {!isCollapsed && (
            <span className="ms-3 font-bold text-[var(--color-text-header)] text-[var(--font-size-18px)] tracking-tight truncate">
              REAL ESTATE
            </span>
          )}
        </div>

        {/* Navigation Menu */}
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
    </>
  );
};

export default Sidebar;