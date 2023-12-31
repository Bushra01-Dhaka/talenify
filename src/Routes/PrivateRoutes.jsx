import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { AuthContext } from "../Provider/AuthProvider";
import Spinner from "../ReUsed/Spinner";



const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);
    if(loading)
    {
        // return <div className="h-screen flex justify-center items-center">
        //     <span className="loading loading-lg loading-spinner text-primary"></span>
           
        // </div> 
        return <Spinner></Spinner>

    }
    if(user) 
    {
        return children ;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

PrivateRoutes.propTypes = {
    children: PropTypes.node
}

export default PrivateRoutes;