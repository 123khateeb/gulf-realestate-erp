import { Search, Bell, Languages, UserCircle, Sun, Moon, Menu } from "lucide-react";

const Navbar = ({ isRTL, setIsRTL, isDarkMode, setIsDarkMode, toggleSidebar }) => {
  return (
    <nav className="h-[var(--navbar-height,70px)] bg-[var(--color-bg-navbar)] border-b border-[var(--color-border-subtle)] flex items-center justify-between px-6 lg:px-8 transition-colors duration-300">
      
     
      <div className="flex items-center flex-1">
        
        <button 
          onClick={toggleSidebar}
          className="p-2.5 lg:hidden hover:bg-[var(--color-primary-light)] rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-all cursor-pointer"
        >
          <Menu size={22} />
        </button>
        <div className="relative w-full max-w-[300px] group">
          <span className="absolute inset-y-0 left-3 flex items-center text-[var(--color-text-muted)] group-focus-within:text-[var(--color-primary)] transition-colors">
            <Search size={18} />
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 bg-[var(--color-bg-input)] border border-transparent rounded-lg text-[var(--font-size-13px)] font-[var(--font-weight-500)] text-[var(--color-text-header)] placeholder:text-[var(--color-text-muted)] focus:bg-[var(--color-bg-navbar)] focus:border-[var(--color-primary)] outline-none transition-all"
          />
        </div>
      </div>

      {/* 2. Right Side Actions */}
      <div className="flex items-center gap-1 md:gap-3">
        
        {/* Dark Mode Toggle */}
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2.5 hover:bg-[var(--color-primary-light)] rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-all cursor-pointer"
          title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Language Switcher */}
        <button 
          onClick={() => setIsRTL(!isRTL)}
          className="flex items-center gap-2 px-3 py-2 hover:bg-[var(--color-primary-light)] rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-all cursor-pointer"
        >
          <Languages size={20} />
          <span className="text-[var(--font-size-12px)] font-[var(--font-weight-700)] hidden md:block">
            {isRTL ? "EN" : "AR"}
          </span>
        </button>

        {/* Notifications */}
        <button className="p-2.5 hover:bg-[var(--color-primary-light)] rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-primary)] relative">
          <Bell size={20} />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-[var(--color-danger,#f8285a)] rounded-full border-2 border-[var(--color-bg-navbar)]"></span>
        </button>

        <div className="h-6 w-[1px] bg-[var(--color-border-subtle)] mx-1"></div>

        {/* User Profile */}
        <div className="flex items-center gap-3 ps-2 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-[var(--font-size-13px)] font-[var(--font-weight-700)] text-[var(--color-text-header)] leading-none group-hover:text-[var(--color-primary)] transition-colors">
              Khateeb
            </p>
            <p className="text-[var(--font-size-11px)] text-[var(--color-text-muted)] font-[var(--font-weight-600)] uppercase mt-1">
              Super Admin
            </p>
          </div>
          <div className="w-10 h-10 bg-[var(--color-primary-light)] text-[var(--color-primary)] rounded-lg flex items-center justify-center border border-[var(--color-border-subtle)] group-hover:border-[var(--color-primary)] transition-all">
            <UserCircle size={26} />
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;