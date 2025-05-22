import { Outlet } from "react-router-dom"
// components
import Header from "./Header"

const Layout = () => {
    return (
        <div className="grid-bg relative">
            <Header />
            <div className="max-w-[80rem] mx-auto p-4 mt-8 z-9">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout