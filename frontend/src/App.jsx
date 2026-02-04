import { useState } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AppLayout from "./components/layout/AppLayout"; // Isse import zaroor karein
import PageHeader from "./components/common/PageHeader";
import StatsGrid from "./components/dashboard/StatsGrid";
import StatusBadge from "./components/common/StatusBadge";
import TransactionTable from "./components/dashboard/TransactionTable";
import StaffList from "./pages/StaffList";

// Dashboard Content ke liye abhi dummy component
const DashboardContent = () => {

    // Case 1: Action function (Jo humne alert ke liye banaya tha)
  const handleRefreshData = () => {
    alert("Data refresh ho raha hai...");
  };

  
    return(
        <div className="space-y-6">
      {/* ✅ Use Case 1: URL Navigation (Jab user ko naye page par bhejna ho) */}
      {/* Isme 'to' prop pass kiya hai, isliye ye 'Link' ban jayega */}
      <PageHeader 
        label="Properties Overview" 
        description="Manage and track all your real estate assets." 
        buttonLabel="Add New Property" 
        to="/properties/add"
        variant = "blue" 
      />
      <StatsGrid/>

      <TransactionTable/>
      <StatusBadge status= {"Paid"}/>
      <StatusBadge status= {"pending"}/>
      <StatusBadge status= {"Overdue"}/>
    </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        // Ek hi baar "/" define karein as a Parent
        path: "/",
        element: <AppLayout />, 
        children: [
            {
                index: true, 
                element: <Navigate to="/dashboard" replace /> 
            },
            {
                path: "dashboard", 
                element: <DashboardContent /> 
            },
            {
                path:"staff/list",
                element:<StaffList/>
            }
        ],
    },
    // Agar koi galat URL daale toh login par bhej do
    {
        path: "*",
        element: <Navigate to="/login" />
    }
]);

function App() {
    return <RouterProvider router={appRouter} />;
}

export default App;