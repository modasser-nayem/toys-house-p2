import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
   return (
      <div className="py-24 text-center">
         <h2 className="text-5xl font-bold">404, page not found</h2>
         <Link
            to="/"
            className="cs-btn block my-5 w-fit mx-auto"
         >
            Back Home
         </Link>
      </div>
   );
};

export default Error;
