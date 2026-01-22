import api from "../../api/axios";

export const loginUser = async (credentials) => {
    try {
        const response = await api.post("/auth/login", credentials);
        return response.data;
    } catch (error) {
        // Agar backend se proper message aa raha hai toh wo lo, 
        // nahi toh generic error message string bhejo (object nahi)
        const errorMessage = error.response?.data?.detail || "Login failed. Please check your network.";
        throw errorMessage; 
    }
};