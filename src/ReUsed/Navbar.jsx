import { NavLink } from "react-router-dom";
import logo from '../assets/logo/logoWhite.png'
import nav_bg from '../assets/logo/black-bg-banner.svg'
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {

  const {user,logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(result => {
      console.log(result.user);
    })
    .catch(error => {
      console.error(error);
    })
  }

    const navItems = (
        <>
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " text-primary font-bold rounded"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addJobs"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " text-primary font-bold rounded"
                  : ""
              }
            >
              Add Jobs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/postedJobs"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " text-primary font-bold rounded"
                  : ""
              }
            >
              My Posted Jobs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myBids"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " text-primary font-bold rounded"
                  : ""
              }
            >
              My Bids
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/bidRequest"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " text-primary font-bold rounded"
                  : ""
              }
            >
              Bid Request
            </NavLink>
          </li>

          {
            user?   
          
            <button onClick={handleLogOut} className="btn-primary text-white rounded btn btn-sm ">
            Log Out
          </button>
          :
            
          <NavLink to='/login'>
          <button className="btn-primary text-white rounded btn btn-sm ">
            Login
          </button>
        </NavLink>
          }

       

        </>
      );
    return (
        <div  style={{backgroundImage: `url(${nav_bg})`, backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundSize:'cover'}}>
             <div className="drawer py-4">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
            </div> 
            <div className="flex-1 px-2 mx-2"> 
           {/* LOGO */}
              <img
              className="h-[70px] object-cover"
               src={logo} alt="" /> <span className="text-primary font-bold">job_hub</span>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
               {navItems}
              </ul>
            </div>
          </div>
          {/* Page content here */}
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            {navItems}
          </ul>
        </div>
      </div>
        </div>
    );
};

export default Navbar;