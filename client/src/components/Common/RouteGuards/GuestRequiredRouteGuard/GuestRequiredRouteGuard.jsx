import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../../../stores/authStore";
export const GuestRequiredRouteGuard = ({ children }) => {
    const { user, disableGuestRequiredGuard } = useAuthStore();

    if (disableGuestRequiredGuard == false) {
        if (user) {
            return <Navigate to={'/'} />
        }
    }
    
    return (
        <>
            {children}
        </>
    )
}