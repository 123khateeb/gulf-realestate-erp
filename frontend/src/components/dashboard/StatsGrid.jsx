import StatCard from "./StatCard";

const StatsGrid = () =>{

    const statsData = [
    { title: "Total Revenue", value: "SAR 145,000", iconName: "Wallet", colorClass: "primary", percentage: 75 },
    { title: "Active Properties", value: "1,240", iconName: "Building2", colorClass: "success", percentage: 85 },
    { title: "New Tenants", value: "85", iconName: "Users", colorClass: "warning", percentage: 40 },
    { title: "Pending Rent", value: "SAR 12,500", iconName: "Clock", colorClass: "danger", percentage: 15 },
  ];
    return(
        <div className="w-full grid grid-cols-1 sm:grid-cols-4 gap-6">
            {statsData.map((stat, index) => (
                <StatCard key={index} {...stat} />
            ))}
        </div>
    )
}

export default StatsGrid;