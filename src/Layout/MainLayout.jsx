import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../ReUsed/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../ReUsed/Footer";
import { ScrollRestoration } from "react-router-dom";
import { useEffect } from "react";

const MainLayout = () => {

    const loc = useLocation();
    console.log(loc);

    useEffect(() => {
        console.log(loc.pathname);
        if(loc.pathname === '/')
        {
            document.title = `Talenify-Home`;
        }
        else 
        {
            document.title = `Talenify${loc.pathname.replace("/",'-')}`;
        }
       

    },[loc.pathname]);

    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster position="top-center" reverseOrder={false} />
            <ScrollRestoration />
        </div>
    );
};

export default MainLayout;