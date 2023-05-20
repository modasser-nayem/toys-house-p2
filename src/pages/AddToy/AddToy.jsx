import React, { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import InputGroup from "../Shared/InputGroup";
import { MdError } from "react-icons/md";
import { server } from "../../main";
import useDynamicTitle from "../../utils/useDynamicTitle";
import Swal from "sweetalert2";

const AddToy = () => {
   useDynamicTitle("Add new toy");
   const { user } = useContext(AuthContext);
   const [addToy, setAddToy] = useState({
      name: "",
      picture: "",
      price: "",
      rating: "",
      category: "",
      quantity: "",
      seller_name: user.displayName,
      seller_email: user.email,
      description:
         "Unleash the power of the Hulk with this action figure. Featuring incredible strength and rage, the Hulk is ready to join your Avengers collection. With its massive size and impressive detailing, this figure is perfect for display or engaging in action-packed play",
      nameError: "",
      pictureError: "",
      priceError: "",
      ratingError: "",
      categoryError: "",
      quantityError: "",
      seller_nameError: "",
      seller_emailError: "",
      descriptionError: "",
   });

   const changeHandler = (e) => {
      setAddToy({
         ...addToy,
         [e.target.name]: e.target.value,
      });
   };
   const handleSubmit = (e) => {
      e.preventDefault();
      if (addToy.name === "") {
         setAddToy({
            ...addToy,
            nameError: "Please provide your toy name",
         });
      } else if (addToy.picture === "") {
         setAddToy({
            ...addToy,
            nameError: "",
            pictureError: "Please provide a image URL",
         });
      } else if (addToy.price === "") {
         setAddToy({
            ...addToy,
            pictureError: "",
            priceError: "Please provide product price",
         });
      } else if (addToy.rating === "") {
         setAddToy({
            ...addToy,
            priceError: "",
            ratingError: "Please provide rating point",
         });
      } else if (addToy.category === "") {
         setAddToy({
            ...addToy,
            ratingError: "",
            categoryError: "Please provide Category name",
         });
      } else if (addToy.quantity === "") {
         setAddToy({
            ...addToy,
            categoryError: "",
            quantityError: "Please provide quantity number",
         });
      } else if (addToy.seller_name === "") {
         setAddToy({
            ...addToy,
            quantityError: "",
            seller_nameError: "Please provide seller name",
         });
      } else if (addToy.seller_email === "") {
         setAddToy({
            ...addToy,
            seller_nameError: "",
            seller_emailError: "Please provide seller email",
         });
      } else if (addToy.description === "") {
         setAddToy({
            ...addToy,
            seller_emailError: "",
            descriptionError: "Please provide a description",
         });
      } else {
         const newToy = {
            name: addToy.name,
            picture: addToy.picture,
            price: addToy.price,
            rating: addToy.rating,
            category: addToy.category,
            quantity: addToy.quantity,
            seller_name: addToy.seller_name,
            seller_email: addToy.seller_email,
            description: addToy.description,
         };
         console.log(newToy);
         fetch(`${server}/toy`, {
            method: "POST",
            headers: {
               "content-type": "application/json",
            },
            body: JSON.stringify(newToy),
         })
            .then((res) => res.json())
            .then((data) => {
               if (data.success) {
                  Swal.fire({
                     position: "center",
                     icon: "success",
                     title: data.message,
                     showConfirmButton: false,
                     timer: 1500,
                  });
                  setAddToy({
                     ...addToy,
                     name: "",
                     picture: "",
                     price: "",
                     rating: "",
                     category: "",
                     quantity: "",
                     nameError: "",
                     pictureError: "",
                     priceError: "",
                     ratingError: "",
                     categoryError: "",
                     quantityError: "",
                     seller_nameError: "",
                     seller_emailError: "",
                     descriptionError: "",
                  });
               } else {
                  Swal.fire({
                     position: "center",
                     icon: "warning",
                     title: data.error,
                     showConfirmButton: false,
                     timer: 1500,
                  });
               }
            });
      }
   };
   return (
      <div className="cs-container bg-base-200 p-8">
         <h3 className="cs-title mt-8">Add New Toy</h3>
         <form
            onSubmit={handleSubmit}
            className="border bg-white md:w-[650px] mx-auto my-10 p-10"
         >
            <InputGroup
               label="Name"
               type="text"
               name="name"
               value={addToy.name}
               changeHandler={changeHandler}
               error={addToy.nameError}
            />
            <InputGroup
               label="Picture"
               type="text"
               name="picture"
               value={addToy.picture}
               changeHandler={changeHandler}
               error={addToy.pictureError}
            />
            <InputGroup
               label="Price"
               type="text"
               name="price"
               value={addToy.price}
               changeHandler={changeHandler}
               error={addToy.priceError}
            />
            <InputGroup
               label="Rating"
               type="text"
               name="rating"
               value={addToy.rating}
               changeHandler={changeHandler}
               error={addToy.ratingError}
            />
            <div className="mb-4">
               <label
                  className="text-xl font-medium mb-2 block"
                  htmlFor="category"
               >
                  Category*
               </label>
               <select
                  className={`bg-gray-100 w-full px-5 py-3.5 outline-none rounded-md border-red-600 ${
                     addToy.categoryError ? "border " : "border-none"
                  }`}
                  id="category"
                  type="text"
                  name="category"
                  value={addToy.category}
                  onChange={changeHandler}
               >
                  <option
                     disabled
                     value=""
                  >
                     Select Category
                  </option>
                  <option value="Marvel">Marvel</option>
                  <option value="Avengers">Avengers</option>
                  <option value="Transformers">Transformers</option>
               </select>
               {addToy.categoryError && (
                  <p className="text-red-600 flex gap-1.5 items-center mt-1">
                     <MdError />
                     {addToy.categoryError}
                  </p>
               )}
            </div>
            <InputGroup
               label="Quantity"
               type="text"
               name="quantity"
               value={addToy.quantity}
               changeHandler={changeHandler}
               error={addToy.quantityError}
            />
            <InputGroup
               label="Seller Name"
               type="text"
               name="seller_name"
               value={addToy.seller_name}
               changeHandler={changeHandler}
               error={addToy.seller_nameError}
            />
            <InputGroup
               label="Seller Email"
               type="text"
               name="seller_email"
               value={addToy.seller_email}
               changeHandler={changeHandler}
               error={addToy.seller_emailError}
            />
            <div className="text-xl font-medium mb-3 block">
               <label htmlFor="description">Description*</label>
               <textarea
                  id="description"
                  name="description"
                  value={addToy.description}
                  onChange={changeHandler}
                  placeholder="Describe your product"
                  className="textarea textarea-bordered resize-none textarea-lg w-full mt-2"
               ></textarea>
               {addToy.descriptionError && (
                  <p className="text-red-600 text-base">
                     {addToy.descriptionError}
                  </p>
               )}
            </div>
            <div className="text-end">
               <button
                  type="submit"
                  className="cs-btn"
               >
                  Add Toy
               </button>
            </div>
         </form>
      </div>
   );
};

export default AddToy;
