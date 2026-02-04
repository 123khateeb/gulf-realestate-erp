import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PageHeader = ({ label, description, buttonLabel, onButtonClick, to, variant = "white" }) => {
  
  // ✅ Metronic Precise Button Logic
  // shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] -> Exact shadow-xs logic
  const baseClasses = `
    cursor-pointer group inline-flex items-center justify-center whitespace-nowrap 
    font-[500] transition-all duration-200 disabled:pointer-events-none 
    disabled:opacity-60 h-[34px] rounded-md px-3 gap-1.5 
    text-[0.8125rem] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] active:scale-95
  `;

  const variants = {
    // Border color #f1f1f2 aur text #252f4a (Jo tumne inspect kiya)
    white: "bg-white text-[#252f4a] border border-[#f1f1f2] hover:bg-[#f9f9f9]",
    // Primary Blue color #1b84ff
    blue: "bg-[#1b84ff] text-white hover:bg-[#056ee9]"
  };

  return (
    <div className="w-full flex flex-col items-start py-6 gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-col items-start">
        {/* Label: Sharp, Dark (18px / 1.125rem) */}
        <h1 className="text-[1.125rem] font-[700] text-[#252f4a] tracking-tight leading-none">
          {label}
        </h1>
        
        {/* Description: Exact Color #1b1718 jo tumne dhunda */}
        {description && (
          <p className="text-[0.8125rem] font-[500] text-[#1b1718] mt-2 opacity-90">
            {description}
          </p>
        )}
      </div>

      {buttonLabel && (
        <div className="flex items-center gap-3">
          {to ? (
            <Link to={to} className={`${baseClasses} ${variants[variant]}`}>
              {buttonLabel}
            </Link>
          ) : (
            <button 
              type="button" 
              onClick={onButtonClick} 
              className={`${baseClasses} ${variants[variant]}`}
            >
              {buttonLabel}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

PageHeader.propTypes = {
  label: PropTypes.string.isRequired,
  description: PropTypes.string,
  buttonLabel: PropTypes.string,
  onButtonClick: PropTypes.func,
  to: PropTypes.string,
  variant: PropTypes.oneOf(["white", "blue"])
};

export default PageHeader;