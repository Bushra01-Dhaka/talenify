import { Outlet } from "react-router-dom";
import Navbar from "../ReUsed/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../ReUsed/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster position="top-center" reverseOrder={false} />
        </div>
    );
};

export default MainLayout;