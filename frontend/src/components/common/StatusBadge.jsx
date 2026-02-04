import PropTypes from "prop-types";

const StatusBadge = ({ status }) => {
    const normalizedStatus = status?.toLowerCase() || "pending";

    const colorVariants = {
        // --- Staff Status ---
        active: { text: "text-[#17c653]", bg: "bg-[#e8fff3]" }, // Success Green
        inactive: { text: "text-[#7e8299]", bg: "bg-[#f5f8fa]" }, // Grayish

        // --- User Roles ---
        "super admin": { text: "text-[#7239ea]", bg: "bg-[#f8f5ff]" }, // Purple
        admin: { text: "text-[#1b84ff]", bg: "bg-[#f1faff]" },        // Blue
        manager: { text: "text-[#f6c000]", bg: "bg-[#fff8dd]" },      // Warning Yellow
        staff: { text: "text-[#17c653]", bg: "bg-[#e8fff3]" },        // Emerald Green

        // --- Billing/Invoice (Tumhara purana logic) ---
        paid: { text: "text-[#17c653]", bg: "bg-[#e8fff3]" },
        pending: { text: "text-[#f6c000]", bg: "bg-[#fff8dd]" },
        overdue: { text: "text-[#f8285a]", bg: "bg-[#fff5f8]" },
    }

    // Default: Agar koi naya status aaye jo upar na ho, toh 'pending' wala style dikhao
    const style = colorVariants[normalizedStatus] || colorVariants.pending;

    return (
        <span className={`rounded-md font-[700] text-[0.7rem] lg:text-[0.75rem] inline-flex px-2.5 py-1 uppercase tracking-wider whitespace-nowrap ${style.bg} ${style.text}`}>
            {status}
        </span>
    )
}

StatusBadge.propTypes = {
    status: PropTypes.string.isRequired,
}

export default StatusBadge;