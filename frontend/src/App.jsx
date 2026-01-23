import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AppLayout from "./components/layout/AppLayout"; // Isse import zaroor karein

// Dashboard Content ke liye abhi dummy component
const DashboardContent = () => <div className="p-10 text-2xl font-bold">Dashboard Content (Asli Wala)</div>;

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