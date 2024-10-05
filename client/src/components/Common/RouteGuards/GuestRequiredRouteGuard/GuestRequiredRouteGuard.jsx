import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../../../stores/authStore";
export const GuestRequiredRouteGuard = ({ children }) => {
    const { user } = useAuthStore();
    // const navigate = useNavigate();

    if (user) {
        return <Navigate to={'/'} />
    }

    return (
        <>
            {children}
        </>
    )
}