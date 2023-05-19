import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
   const location = useLocation();
   const { user, loading } = useContext(AuthContext);
   if (loading) {
      return (
         <div className="flex h-[90vh] items-center justify-center">
            <h2 className="text-5xl flex items-center gap-3 font-Lato animate-pulse font-semibold">
               Loading...
               <span className="text-xl">
                  <div
                     className="radial-progress mt-3 animate-spin"
                     style={{
                        "--value": "70",
                        "--size": "2.5rem",
                        "--thickness": "5px",
                     }}
                  ></div>
               </span>
            </h2>
         </div>
      );
   } else {
      if (user) {
         return children;
      } else {
         return (
            <Navigate
               to="/login"
               state={{ from: location }}
               replace
            />
         );
      }
   }
};

export default PrivateRoute;
