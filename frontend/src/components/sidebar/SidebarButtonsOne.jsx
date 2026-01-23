import * as LucideIcons from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom"; 

const SidebarButtonsOne = ({ iconName, buttonName, iconSize = 18, isOpen, onClick, dropdownIcon, href, isCollapsed }) => {
    const location = useLocation();
    const LucideIcon = LucideIcons[iconName] || LucideIcons.LayoutDashboard;
    
    
    const isActive = href && location.pathname === href;

    const Wrapper = href ? Link : "div";
    
    const wrapperProps = href ? { to: href } : { onClick };

    return (
        <Wrapper 
            {...wrapperProps} 
            className={`
                group w-full flex items-center justify-between px-3 py-2.5 rounded-md cursor-pointer transition-all duration-200 
                ${isActive 
                    ? "bg-[#f1faff] text-[#1b84ff]" 
                    : "text-[#1b1718] hover:bg-[#f9f9f9] hover:text-[#1b84ff] "
                }
            `}
        >
            <div className="flex items-center gap-3">
                
                <span className={`${isActive ? "text-[#1b84ff]" : "text-[#1b1718] group-hover:text-[#1b84ff]"}`}>
                    <LucideIcon size={iconSize} />
                </span>
                
                
                {!isCollapsed && (
                    <span className="font-semibold text-[13px] whitespace-nowrap overflow-hidden">
                        {buttonName}
                    </span>
                )}
            </div>

            
            {dropdownIcon && !isCollapsed && (
                <span className={`${isOpen ? "text-[#1b84ff]" : "text-[#78829d]"}`}>
                    <ChevronDown 
                        size={14} 
                        className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                </span>
            )}
        </Wrapper>
    );
};

export default SidebarButtonsOne;