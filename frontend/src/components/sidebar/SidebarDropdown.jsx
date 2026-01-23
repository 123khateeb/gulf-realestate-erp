import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"; 
import SidebarButtonsOne from "./SidebarButtonsOne";
import { useLocation } from "react-router-dom";

const SideBarDropdown = ({ label, iconName, iconSize, children, isCollapsed }) => {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    
    useEffect(() => {
        // Safe check: ?. use karne se 'undefined' ka error nahi aayega
        const hasActiveChild = React.Children.toArray(children).some(
            (child) => child.props?.children?.props?.to === location.pathname
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
            
            <SidebarButtonsOne 
                buttonName={label} 
                iconName={iconName} 
                iconSize={iconSize} 
                onClick={handleToggle} 
                isOpen={open} 
                dropdownIcon={!isCollapsed} 
                isCollapsed={isCollapsed}
            />
            
            
            {open && !isCollapsed && (
                <div className="mt-1 ml-6 border-l border-[#f1f1f2] space-y-1 transition-all duration-300 ease-in-out">
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