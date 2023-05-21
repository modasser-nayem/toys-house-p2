import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logos/logo.png";
import { MdOutlineLogin, MdLogout, MdClose } from "react-icons/md";
import { FaBars, FaUser, FaUserEdit } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import { AuthContext } from "../../provider/AuthProvider";

const navLink = [
   {
      path: "/",
      name: "Home",
      private: false,
   },
   {
      path: "/all-toys",
      name: "All Toys",
      private: false,
   },
   {
      path: "/my-toys",
      name: "My Toys",
      private: true,
   },
   {
      path: "/add-toy",
      name: "Add A Toy",
      private: true,
   },
   {
      path: "/blog",
      name: "Blog",
      private: false,
   },
];

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
   const { user, loading, logoutUser } = useContext(AuthContext);
   return (
      <nav className="flex z-50 fixed items-center bg-white/30 backdrop-blur-2xl top-0 w-full h-[11vh]">
         <div className="navbar cs-container">
            <div className="flex-1">
               <Link
                  className="flex items-center"
                  to="/"
               >
                  <img
                     className="h-12 pr-2"
                     src={logo}
                     alt="brand logo"
                  />
                  <p className="text-3xl font-bold">
                     <span className="text-goldenrod">Toys </span>House
                  </p>
               </Link>
            </div>
            <div
               className={`bg-white flex flex-col lg:flex-row items-center absolute lg:static -z-auto lg:-z-[-40] w-full lg:w-auto p-8 lg:p-0 left-0 bg-opacity-0 right-0 transition-all md:transition-none duration-500 ${
                  isOpen
                     ? "bg-opacity-100 lg:bg-opacity-0 top-[11vh]"
                     : "-top-[700px]"
               }`}
            >
               <div className="font-medium text-black font-Lato flex flex-col lg:flex-row items-center gap-8 lg:mr-7 mb-7 md:mb-0">
                  {navLink.map((nav, i) => {
                     if (!user) {
                        if (!nav.private) {
                           return (
                              <NavLink
                                 key={i}
                                 to={nav.path}
                                 className={({ isActive }) =>
                                    isActive ? "text-goldenrod" : ""
                                 }
                              >
                                 {nav.name}
                              </NavLink>
                           );
                        }
                     } else {
                        return (
                           <NavLink
                              key={i}
                              to={nav.path}
                              className={({ isActive }) =>
                                 isActive ? "text-goldenrod" : ""
                              }
                           >
                              {nav.name}
                           </NavLink>
                        );
                     }
                  })}
               </div>
               <div className="flex flex-col lg:flex-row gap-3 items-end lg:items-center">
                  {!loading && (
                     <>
                        {user ? (
                           <div
                              className="dropdown dropdown-end tooltip tooltip-left"
                              data-tip={user.displayName}
                           >
                              <label
                                 tabIndex={0}
                                 className="btn btn-ghost btn-circle avatar"
                              >
                                 <div className="w-10 bg-gray-400 rounded-full">
                                    <LazyLoad threshold={0.95}>
                                       <img src={user.photoURL} />
                                    </LazyLoad>
                                 </div>
                              </label>
                              <ul
                                 tabIndex={0}
                                 className="menu menu-compact dropdown-content mt-3 p-2 shadow-xl bg-base-100 rounded-box w-52"
                              >
                                 <li>
                                    <Link
                                       to="/profile"
                                       className="text-lg"
                                    >
                                       <FaUser />
                                       Profile
                                    </Link>
                                 </li>
                                 <li>
                                    <Link
                                       to="/update-profile"
                                       className="text-lg"
                                    >
                                       <FaUserEdit /> Update
                                    </Link>
                                 </li>
                                 <li>
                                    <p
                                       onClick={() =>
                                          logoutUser("Logout Success")
                                       }
                                       className="text-lg"
                                    >
                                       <MdLogout /> Logout
                                    </p>
                                 </li>
                              </ul>
                           </div>
                        ) : (
                           <NavLink
                              className={({ isActive }) =>
                                 isActive
                                    ? "text-goldenrod tooltip tooltip-left mt-5 lg:mt-0"
                                    : "tooltip tooltip-left mt-5 lg:mt-0"
                              }
                              data-tip="Login"
                              to="/login"
                           >
                              <MdOutlineLogin className="text-3xl" />
                           </NavLink>
                        )}
                     </>
                  )}
               </div>
            </div>
            <div className="lg:hidden">
               <button
                  className="text-2xl"
                  onClick={() => setIsOpen(!isOpen)}
               >
                  {isOpen ? <MdClose /> : <FaBars />}
               </button>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
