import React from "react";
import { MdError } from "react-icons/md";

const InputGroup = ({ label, type, name, value, changeHandler, error }) => {
   return (
      <div className="mb-4">
         <label
            className="text-xl font-medium mb-2 block"
            htmlFor={name}
         >
            {label}*
         </label>
         <input
            className={`bg-gray-100 w-full px-5 py-4 outline-none rounded-md border-red-600 ${
               error ? "border " : "border-none"
            }`}
            id={name}
            type={type}
            name={name}
            value={value}
            onChange={changeHandler}
         />
         {error && (
            <p className="text-red-600 flex gap-1.5 items-center mt-1">
               <MdError />
               {error}
            </p>
         )}
      </div>
   );
};

export default InputGroup;
