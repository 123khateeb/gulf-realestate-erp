import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"; 
import SidebarButtonsOne from "./SidebarButtonsOne";
import { useLocation } from "react-router-dom";

const SideBarDropdown = ({ label, iconName, iconSize, children, isCollapsed }) => {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    // Auto-expand logic based on active child path
    useEffect(() => {
        const hasActiveChild = React.Children.toArray(children).some(
            (child) => child.props?.path === location.pathname
        );
        
        if (hasActiveChild) {
            setOpen(true);
        }
    }, [location.pathname, children]);

    const handleToggle = () => {
        if (!isCollapsed) {
            setOpen(!open);
        }
    };

    return (
        <div className="flex flex-col w-full">
            {/* Main Toggle Button */}
            <SidebarButtonsOne 
                buttonName={label} 
                iconName={iconName} 
                iconSize={iconSize} 
                onClick={handleToggle} 
                isOpen={open} 
                dropdownIcon={!isCollapsed} 
                isCollapsed={isCollapsed}
            />
            
            {/* Dropdown Container */}
            {open && !isCollapsed && (
                <div className={`
                    mt-1 space-y-1 transition-all duration-300 ease-in-out
                    /* LTR mein left border, RTL mein right border */
                    ms-9 border-s border-[var(--color-border-subtle)]
                `}>
                    {children}
                </div>
            )}
        </div>
    );
}

SideBarDropdown.propTypes = {
  label: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  iconSize: PropTypes.number,
  children: PropTypes.node,
  isCollapsed: PropTypes.bool
};

export default SideBarDropdown;