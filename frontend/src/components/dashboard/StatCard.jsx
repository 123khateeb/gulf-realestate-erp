import PropTypes from "prop-types";
import * as LucideIcons from "lucide-react";

const StatCard = ({ title, value, iconName, colorClass = "primary", percentage = 70 }) => {
  const Icon = LucideIcons[iconName] || LucideIcons.LayoutDashboard;

  // Metronic specific color variants
  const colorVariants = {
    primary: { text: "text-[#1b84ff]", bg: "bg-[#f1faff]", progress: "bg-[#1b84ff]" },
    success: { text: "text-[#17c653]", bg: "bg-[#e8fff3]", progress: "bg-[#17c653]" },
    warning: { text: "text-[#f6c000]", bg: "bg-[#fff8dd]", progress: "bg-[#f6c000]" },
    danger: { text: "text-[#f8285a]", bg: "bg-[#fff5f8]", progress: "bg-[#f8285a]" },
  };

  const style = colorVariants[colorClass] || colorVariants.primary;

  return (
    <div className="group bg-white dark:bg-[#1e1e2d] border border-[#f1f1f2] dark:border-[#2b2b40] rounded-xl p-6 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center justify-between mb-5">
        {/* Icon with Subtle Pill Background */}
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${style.bg} ${style.text}`}>
          <Icon size={24} strokeWidth={2} />
        </div>

        {/* Dynamic Badge (Coming from Metronic style) */}
        <span className="text-[11px] font-bold text-[#17c653] bg-[#e8fff3] px-2 py-1 rounded-md">
          +2.4%
        </span>
      </div>

      <div>
        <h3 className="text-[1.75rem] font-[700] text-[#252f4a] dark:text-white leading-tight mb-1">
          {value}
        </h3>
        <p className="text-[13px] font-[600] text-[#78829d] uppercase tracking-wide">
          {title}
        </p>
      </div>

      {/* Progress Bar Section (Metronic Signature) */}
      <div className="mt-5">
        <div className="flex justify-between mb-1.5">
          <span className="text-[11px] font-[600] text-[#b5b5c3]">Monthly Goal</span>
          <span className="text-[11px] font-[700] text-[#4b5675]">{percentage}%</span>
        </div>
        <div className="w-full bg-[#f1f1f2] dark:bg-[#2b2b40] h-1.5 rounded-full overflow-hidden">
          <div 
            className={`${style.progress} h-full transition-all duration-500`} 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

StatCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  colorClass: PropTypes.oneOf(["primary", "success", "warning", "danger"]),
  percentage: PropTypes.number
};

export default StatCard;