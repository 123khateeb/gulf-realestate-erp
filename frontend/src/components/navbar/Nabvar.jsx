import { Search, Bell, Languages, UserCircle } from "lucide-react";

const Navbar = ({ isRTL, setIsRTL }) => {
  return (
    <nav className="h-[70px] bg-white border-b border-[#f1f1f2] flex items-center justify-between px-6 lg:px-8">
      
      {/* 1. Left Side: Search Bar (Metronic Style) */}
      <div className="flex items-center flex-1">
        <div className="relative w-full max-w-[300px] group">
          <span className="absolute inset-y-0 left-3 flex items-center text-[#78829d] group-focus-within:text-[#1b84ff] transition-colors">
            <Search size={18} />
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 bg-[#f9f9f9] border border-transparent rounded-lg text-[13px] font-medium text-[#252f4a] placeholder:text-[#78829d] focus:bg-white focus:border-[#1b84ff] outline-none transition-all duration-200"
          />
        </div>
      </div>

      {/* 2. Right Side: Actions & Profile */}
      <div className="flex items-center gap-2 md:gap-4">
        
        {/* Language Toggle: Metronic standard button look */}
        <button 
          onClick={() => setIsRTL(!isRTL)}
          className="flex items-center gap-2 px-3 py-2 hover:bg-[#f9f9f9] rounded-lg text-[#78829d] hover:text-[#1b84ff] transition-all cursor-pointer border border-transparent active:scale-95"
        >
          <Languages size={20} />
          <span className="text-[12px] font-bold uppercase tracking-wider hidden md:block">
            {isRTL ? "EN" : "AR"}
          </span>
        </button>

        {/* Notifications: Subtle badge style */}
        <button className="p-2.5 hover:bg-[#f1faff] rounded-lg text-[#78829d] hover:text-[#1b84ff] relative transition-all cursor-pointer">
          <Bell size={20} />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-[#f8285a] rounded-full border-2 border-white"></span>
        </button>

        {/* Vertical Divider: Thinner and lighter for Metronic feel */}
        <div className="h-6 w-[1px] bg-[#f1f1f2] mx-1"></div>

        {/* User Profile: Polished alignment */}
        <div className="flex items-center gap-3 pl-2 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-[13px] font-bold text-[#252f4a] leading-none group-hover:text-[#1b84ff] transition-colors">
              Khateeb
            </p>
            <p className="text-[11px] text-[#78829d] font-semibold uppercase tracking-tight mt-1">
              Super Admin
            </p>
          </div>
          
          {/* Avatar with Metronic light blue background */}
          <div className="w-10 h-10 bg-[#f1faff] text-[#1b84ff] rounded-lg flex items-center justify-center border border-[#e1f0ff] overflow-hidden">
            <UserCircle size={26} />
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;