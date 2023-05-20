import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
   return (
      <div className="py-24 flex flex-col items-center justify-center text-center">
         <img
            className="w-[45rem] mx-auto"
            src="https://img.freepik.com/premium-vector/website-page-found-error-worried-robot-character-with-magnifying-glass-hand-site-crash_502272-1892.jpg?w=2000"
            alt=""
         />
         <Link
            to="/"
            className="cs-btn block w-fit md:relative left-[-5rem] top-[-5rem]"
         >
            Back Home
         </Link>
      </div>
   );
};

export default Error;
