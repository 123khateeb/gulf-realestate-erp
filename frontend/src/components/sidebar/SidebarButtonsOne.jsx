import * as LucideIcons from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Link, useLocation, NavLink } from "react-router-dom"; 

const SidebarButtonsOne = ({ iconName, buttonName, iconSize = 18, isOpen, onClick, dropdownIcon, href, isCollapsed }) => {
    const location = useLocation();
    const LucideIcon = LucideIcons[iconName] || LucideIcons.LayoutDashboard;
    
    // ✅ Pro-Tip: .startsWith() use karne se nested pages (jaise /staff/add) par bhi main menu highlight rahega
    const isActive = href && (location.pathname === href || location.pathname.startsWith(`${href}/`));

    // Agar href hai toh Link/NavLink banega, warna div (dropdown ke liye)
    const Wrapper = href ? NavLink : "div";
    const wrapperProps = href ? { to: href } : { onClick };

    return (
        <Wrapper 
            {...wrapperProps} 
            className={`
                group w-full flex items-center justify-between px-3 py-2.5 rounded-md cursor-pointer transition-all duration-200 
                ${isActive 
                    ? "bg-[var(--color-primary-light)] text-[var(--color-primary)]" 
                    : "text-[var(--color-text-muted)] hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary)]"
                }
            `}
        >
            <div className="flex items-center gap-3">
                <span className={`transition-colors duration-200 ${
                    isActive 
                    ? "text-[var(--color-primary)]" 
                    : "text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)]"
                }`}>
                    <LucideIcon size={iconSize} />
                </span>
                
                {!isCollapsed && (
                    <span className={`
                        font-[var(--font-weight-600)] whitespace-nowrap overflow-hidden]
                        ${isActive ? "text-[var(--color-primary)]" : "text-[var(--color-text-header)] group-hover:text-[var(--color-primary)]"}
                    `}>
                        {buttonName}
                    </span>
                )}
            </div>

            {dropdownIcon && !isCollapsed && (
                <span className={`${isOpen ? "text-[var(--color-primary)]" : "text-[var(--color-text-muted)]"}`}>
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