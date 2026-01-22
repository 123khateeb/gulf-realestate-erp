import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

const appRouter = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/",
        element: <Navigate to="/login" />, // Default login par bhejo
    },
    {
        path: "/dashboard",
        element: <div className="p-10 text-2xl">Dashboard (Coming Soon...)</div>,
    }
]);

function App() {
    return <RouterProvider router={appRouter} />;
}

export default App;