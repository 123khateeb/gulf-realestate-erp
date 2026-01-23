import { NavLink } from "react-router-dom";

const SideBarButtonTwo = ({ label, path }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => `
        group w-full flex items-center px-4 py-2 text-[13px] transition-all duration-200 ease-in-out rounded-md
        ${isActive 
          ? "text-[#1b84ff] font-semibold bg-transparent" // Active: Blue text, no background (Metronic sub-menu style)
          : "text-[#78829d] hover:text-[#1b84ff] hover:bg-[#f9f9f9]" // Normal: Gray text
        }
      `}
    >
      {/* Metronic Bullet Point: Chota dot jo sub-menu items ke aage hota hai */}
      
      
      <span className="truncate">{label}</span>
    </NavLink>
  );
};

export default SideBarButtonTwo;