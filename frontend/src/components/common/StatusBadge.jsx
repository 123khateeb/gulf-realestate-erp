import PropTypes from "prop-types";
import { useState,useEffect } from "react";
const StatusBadge = ({status}) =>{

    const normalizedStatus = status?.toLowerCase() || "pending";

    const colorVariants = {
        paid: {text:"text-[#17c653]", bg:"bg-[#e8fff3]"},
        pending: {text:"text-[#f6c000]", bg:"bg-[#fff8dd]"},
        overdue: {text:"text-[#f8285a]", bg:"bg-[#fff5f8]"},
    }

    const style = colorVariants[normalizedStatus] || colorVariants.paid;
    return (
        <span className={`status_badge_outter_div rounded-md font-700 text-[0.75rem] inline-flex px-2.5 py-1 ${style.bg} ${style.text}`}>
            {status}
        </span>
    )
}

StatusBadge.propTypes = {
    status: PropTypes.string.isRequired,
}

export default StatusBadge;