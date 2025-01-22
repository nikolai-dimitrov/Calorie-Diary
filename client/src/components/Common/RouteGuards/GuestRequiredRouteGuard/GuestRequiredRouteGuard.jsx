import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../../../stores/authStore";
export const GuestRequiredRouteGuard = ({ children }) => {
    const { user, isDisabledGuestRequiredGuard } = useAuthStore();

    if (isDisabledGuestRequiredGuard == false) {
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