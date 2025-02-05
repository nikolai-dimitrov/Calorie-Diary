import { Footer } from "../Footer/Footer"
export const Layout = ({ children }) => {
    return (
        <>
            {children}
            <Footer />
        </>
    )
}