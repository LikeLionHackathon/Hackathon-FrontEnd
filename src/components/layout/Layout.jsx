import { Outlet } from "react-router-dom";

export const Layout = () => {
    return(
        <div className="w-full">
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout;