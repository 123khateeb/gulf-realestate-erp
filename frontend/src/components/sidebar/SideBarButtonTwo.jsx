import { NavLink } from "react-router-dom";

const SideBarButtonTwo = ({ label, path }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => `
        group w-full flex items-center gap-3 px-4 py-2 transition-all duration-200 ease-in-out rounded-md
        text-[var(--font-size-13px)]
        ${isActive 
          ? "text-[var(--color-primary)] font-[var(--font-weight-600)]" 
          : "text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary-light)]"
        }
      `}
    >
      {/* Metronic Style Bullet: Dot jo sub-menu items ke aage hota hai */}
      <span className={`w-1.5 h-1.5 rounded-full transition-all duration-200 shrink-0
        ${({ isActive }) => isActive ? "bg-[var(--color-primary)] scale-125" : "bg-[var(--color-border-subtle)] group-hover:bg-[var(--color-primary)]"}
      `}></span>
      
      <span className="truncate">{label}</span>
    </NavLink>
  );
};

export default SideBarButtonTwo;