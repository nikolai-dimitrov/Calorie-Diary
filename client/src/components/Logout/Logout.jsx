import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from "../../stores/authStore";

export const Logout = () => {
    const { logout } = useAuthStore();
    const navigate = useNavigate();
    useEffect(() => {
        logout();
        navigate('/login');
    }, [])
    return (
        <>
        </>
    )
}