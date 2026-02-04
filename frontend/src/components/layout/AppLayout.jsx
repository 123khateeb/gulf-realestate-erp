import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Nabvar";

const AppLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isRTL, setIsRTL] = useState(false); 
  const [isDarkMode, setIsDarkMode] = useState(false);

  // ✅ Dark Mode Effect: Pure app ke root (html) par dark class manage karega
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div 
      /* ✅ Variable Based Styles: bg-[#f9f9f9] ko var(--color-bg-page) se replace kiya */
      className="flex h-screen w-full transition-colors duration-300 bg-[var(--color-bg-page)]"
      style={{ direction: isRTL ? "rtl" : "ltr" }}
    >
      {/* 1. Sidebar: Shell logic variables ke saath iske andar hai */}
      <Sidebar 
        isCollapsed={isCollapsed} 
        setIsCollapsed={setIsCollapsed} 
      />

      <div className="flex flex-col flex-1 overflow-hidden">
        {/* 2. Navbar: Toggle controls yahan se handle honge */}
        <Navbar 
          isRTL={isRTL} 
          setIsRTL={setIsRTL} 
          isDarkMode={isDarkMode} 
          setIsDarkMode={setIsDarkMode} 
        />

        {/* 3. Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
          <div className="max-w-[1600px] mx-auto">
             {/* Outlet ke andar aane wale saare pages (Stats, Forms) automatic dark mode pick karenge */}
             <Outlet /> 
          </div>
        </main>
      </div>
    </div>
  );
};

export default AppLayout;