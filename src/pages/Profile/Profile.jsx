import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import { AuthContext } from "../../provider/AuthProvider";
import useDynamicTitle from "../../utils/useDynamicTitle";

const Profile = () => {
   useDynamicTitle("Profile");
   const { user } = useContext(AuthContext);
   const { photoURL, displayName, email, metadata } = user;
   const { creationTime, lastSignInTime } = metadata;
   return (
      <div
         id="services"
         className="py-24"
      >
         <LazyLoad threshold={0.95}>
            <img
               className="w-52 h-52 rounded-full mx-auto"
               src={photoURL}
               alt=""
            />
         </LazyLoad>
         <div className="w-fit mx-auto p-5 text-xl font-Lato">
            <p className="text-3xl text-center font-semibold font-Montserrat">
               {displayName}
            </p>
            <p className="py-2 mt-2">
               <span className="font-semibold">Email :</span> {email}
            </p>
            <p>
               <span className="font-semibold">Create Account :</span>{" "}
               {creationTime.slice(0, 26)}
            </p>
            <p className="py-2">
               <span className="font-semibold">Last Login at :</span>{" "}
               {lastSignInTime.slice(0, 26)}
            </p>
            <div className="w-fit mx-auto mt-8">
               <Link
                  to="/update-profile"
                  className="cs-btn"
               >
                  Edit Profile
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Profile;
