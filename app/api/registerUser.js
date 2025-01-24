import axios from "axios";

export const registerUser = async (userData) => {
    try {
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
        console.log("Using Backend URL:", backendUrl);
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/adduser`, userData);
        console.log("response from add user = ", response.data)
        return response.data
    } catch (error) {
        console.error('Error registering user:', error);
    }
}