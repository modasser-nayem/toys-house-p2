import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InputGroup from "../Shared/InputGroup";
import { server } from "../../main";
import { toast } from "react-hot-toast";

const UpdateToy = () => {
   const [toy, setToy] = useState(null);
   const { id } = useParams();
   const [updatedToy, setUpdateToy] = useState({
      price: "",
      quantity: "",
      description: "",
      priceError: "",
      quantityError: "",
      descriptionError: "",
   });

   useEffect(() => {
      fetch(`${server}/toy/${id}`)
         .then((res) => res.json())
         .then((data) => {
            setToy(data);
            setUpdateToy({
               ...updatedToy,
               price: data.price,
               quantity: data.quantity,
               description: data.description,
            });
         });
   }, []);

   const navigate = useNavigate();

   const changeHandler = (e) => {
      setUpdateToy({
         ...updatedToy,
         [e.target.name]: e.target.value,
      });
   };
   const handleSubmit = (e) => {
      e.preventDefault();
      if (updatedToy.price === "") {
         setUpdateToy({
            ...updatedToy,
            priceError: "Please provide product price",
         });
      } else if (updatedToy.quantity === "") {
         setUpdateToy({
            ...updatedToy,
            priceError: "",
            quantityError: "Please provide quantity number",
         });
      } else if (updatedToy.description === "") {
         setUpdateToy({
            ...updatedToy,
            quantityError: "",
            descriptionError: "Please provide a description",
         });
      } else {
         const newToy = {
            price: updatedToy.price,
            quantity: updatedToy.quantity,
            description: updatedToy.description,
         };
         fetch(`${server}/toy/${toy?._id}`, {
            method: "PATCH",
            headers: {
               "content-type": "application/json",
            },
            body: JSON.stringify(newToy),
         })
            .then((res) => res.json())
            .then((data) => {
               if (data.success) {
                  toast.success(data.message);
                  setUpdateToy({
                     ...updatedToy,
                     priceError: "",
                     quantityError: "",
                     descriptionError: "",
                  });
                  navigate(`/my-toys`);
               } else {
                  toast.error(data.error);
               }
            });
      }
   };
   return (
      <div className="cs-container bg-base-200 p-8">
         <h3 className="cs-title mt-8">Update Toy</h3>
         <form
            onSubmit={handleSubmit}
            className="border bg-white md:w-[650px] mx-auto my-10 p-10"
         >
            <InputGroup
               label="Price"
               type="text"
               name="price"
               value={updatedToy.price}
               changeHandler={changeHandler}
               error={updatedToy.priceError}
            />
            <InputGroup
               label="Quantity"
               type="text"
               name="quantity"
               value={updatedToy.quantity}
               changeHandler={changeHandler}
               error={updatedToy.quantityError}
            />
            <div className="text-xl font-medium mb-3 block">
               <label htmlFor="description">Description*</label>
               <textarea
                  id="description"
                  name="description"
                  value={updatedToy.description}
                  onChange={changeHandler}
                  placeholder="Describe your product"
                  className="textarea textarea-bordered resize-none textarea-lg w-full mt-2"
               ></textarea>
               {updatedToy.descriptionError && (
                  <p className="text-red-600 text-base">
                     {updatedToy.descriptionError}
                  </p>
               )}
            </div>
            <div className="text-end">
               <button
                  type="submit"
                  className="cs-btn"
               >
                  Update Toy
               </button>
            </div>
         </form>
      </div>
   );
};

export default UpdateToy;
