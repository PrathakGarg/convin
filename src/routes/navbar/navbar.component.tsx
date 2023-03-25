import { FC } from "react";
import { Outlet } from "react-router-dom";

const Navbar: FC = () => (
    <>
        <div>
            Hi! I am Navbar
        </div>
        <Outlet />
    </>
)

export default Navbar;