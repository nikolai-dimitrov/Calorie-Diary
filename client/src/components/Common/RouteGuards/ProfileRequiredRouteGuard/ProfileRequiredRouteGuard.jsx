import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../../../stores/authStore";
export const ProfileRequiredRouteGuard = ({ children }) => {
    const { user } = useAuthStore();

    if (!user.hasProfile) {
        return <Navigate to={'/profile/create'} />
    }

    return (
        <>
            {children}
        </>
    )
}

export const NoProfileRequiredRouteGuard = ({ children }) => {
    const { user } = useAuthStore();

    if (user.hasProfile) {
        return <Navigate to={'/'} />
    }

    return (
        <>
            {children}
        </>
    )
}