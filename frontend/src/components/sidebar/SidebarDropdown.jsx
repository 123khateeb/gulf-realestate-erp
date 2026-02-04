import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"; 
import SidebarButtonsOne from "./SidebarButtonsOne";
import { useLocation } from "react-router-dom";

const SideBarDropdown = ({ label, iconName, iconSize, children, isCollapsed }) => {
    // ✅ Sirf EK state rakho
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    
    useEffect(() => {
        const currentPath = location.pathname;

        const isAnyChildActive = React.Children.toArray(children).some((child) => {
            let childPath = child.props.path;

            // Path normalize kar rahe hain taaki slash ka locha na ho
            if (childPath && !childPath.startsWith('/')) {
                childPath = `/${childPath}`;
            }

            return childPath === currentPath;
        });

        // ✅ Fix: Ab ye match hone par kholega aur back jaane par (match na hone par) band kar dega
        setIsOpen(isAnyChildActive);

    }, [location.pathname, children]);

    const handleToggle = () => {
        if (!isCollapsed) {
            setIsOpen(!isOpen); // State toggle
        }
    };

    return (
        <div className="flex flex-col w-full">
            {/* Main Toggle Button */}
            <SidebarButtonsOne 
                buttonName={label} 
                iconName={iconName} 
                iconSize={iconSize} 
                onClick={handleToggle} // ✅ Sirf ek onClick
                isOpen={isOpen} 
                dropdownIcon={!isCollapsed} 
                isCollapsed={isCollapsed}
            />
            
            {/* Dropdown Container: Smooth transition ke liye toggle */}
            {isOpen && !isCollapsed && (
                <div className="mt-1 space-y-1 transition-all duration-300 ease-in-out ms-4">
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