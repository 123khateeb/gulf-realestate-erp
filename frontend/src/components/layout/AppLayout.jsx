import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Nabvar";

const AppLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isRTL, setIsRTL] = useState(false); 

  return (
    <div 
      className="flex h-screen w-full bg-[#f9f9f9]" // ✅ Metronic Page BG
      style={{ direction: isRTL ? "rtl" : "ltr" }}
    >
      <Sidebar 
        isCollapsed={isCollapsed} 
        setIsCollapsed={setIsCollapsed} 
      />

      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Navbar hamesha white aur light border ke saath hota hai */}
        <Navbar isRTL={isRTL} setIsRTL={setIsRTL} />

        {/* ✅ Content Area: Metronic mein p-8 (32px) use hota hai taki data clean dikhe */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
          <div className="max-w-[1600px] mx-auto"> {/* Center content for large screens */}
             <Outlet /> 
          </div>
        </main>
      </div>
    </div>
  );
};

export default AppLayout;