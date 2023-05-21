import React from "react";

const Loading = () => {
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
};

export default Loading;
