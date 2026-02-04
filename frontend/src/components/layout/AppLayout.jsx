import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/NavBar";

const AppLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth < 1024);
  const [isRTL, setIsRTL] = useState(false); 
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Dark Mode Effect
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

 
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsCollapsed(true); // Mobile/Tablet par auto-close
      } else {
        setIsCollapsed(false); // Desktop par auto-open
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div 
      className="flex h-screen w-full transition-colors duration-300 bg-[var(--color-bg-page)]"
      style={{ direction: isRTL ? "rtl" : "ltr" }}
    >
      
      <Sidebar 
        isCollapsed={isCollapsed} 
        setIsCollapsed={setIsCollapsed} 
      />

      {/* 2. Content Wrapper */}
      <div className={`flex flex-col flex-1 overflow-hidden transition-all duration-300
        /* ✅ Desktop par sidebar ki width ke barabar margin dena zaroori hai */
        } 
        ms-0`}> 
        
        
        <Navbar 
          isRTL={isRTL} 
          setIsRTL={setIsRTL} 
          isDarkMode={isDarkMode} 
          setIsDarkMode={setIsDarkMode} 
          toggleSidebar={() => setIsCollapsed(!isCollapsed)} // Hamburger click handler
        />

        {/* 4. Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
          <div className="max-w-[1600px] mx-auto">
             <Outlet /> 
          </div>
        </main>
      </div>
    </div>
  );
};

export default AppLayout;