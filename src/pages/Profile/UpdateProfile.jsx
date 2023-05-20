import React from "react";
import { useContext } from "react";
import InputGroup from "../Shared/InputGroup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useDynamicTitle from "../../utils/useDynamicTitle";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const UpdateProfile = () => {
   useDynamicTitle("Update Profile");
   const { user, updateUserProfile } = useContext(AuthContext);
   const { photoURL, displayName, email } = user;
   const navigate = useNavigate();
   const [isAgree, setIsAgree] = useState(true);
   const [updateUser, setUpdateUser] = useState({
      displayName: displayName,
      photoURL: photoURL,
      nameError: "",
      photoError: "",
      success: "User Updated Successfully",
   });

   const changeHandler = (e) => {
      setUpdateUser({
         ...updateUser,
         [e.target.name]: e.target.value,
      });
   };
   const handleSubmit = (e) => {
      e.preventDefault();
      if (user.displayName === "") {
         setUpdateUser({
            ...updateUser,
            nameError: "Please provide your name",
         });
      } else if (user.photoURL === "") {
         setUpdateUser({
            ...updateUser,
            nameError: "",
            photoError: "Please provide your photo url",
         });
      } else {
         updateUserProfile(user, updateUser.displayName, updateUser.photoURL)
            .then(() => {
               Swal.fire({
                  position: "center",
                  icon: "success",
                  title: updateUser.success,
                  showConfirmButton: false,
                  timer: 1500,
               });
               setUpdateUser({
                  ...updateUser,
                  displayName: "",
                  photoURL: "",
                  nameError: "",
                  photoError: "",
               });
               navigate("/profile");
            })
            .catch((error) => {
               Swal.fire({
                  position: "center",
                  icon: "warning",
                  title: error.code.slice(5),
                  showConfirmButton: false,
                  timer: 1500,
               });
            });
      }
   };
   return (
      <div className="py-24">
         <form
            onSubmit={handleSubmit}
            className="border md:w-[650px] mx-auto mt-10 p-10"
         >
            <InputGroup
               label="Name"
               type="text"
               name="displayName"
               value={updateUser.displayName}
               changeHandler={changeHandler}
               error={updateUser.nameError}
            />
            <InputGroup
               label="Photo URL"
               type="text"
               name="photoURL"
               value={updateUser.photoURL}
               changeHandler={changeHandler}
               error={updateUser.photoError}
            />
            <div className="text-xl relative font-medium mb-5">
               <input
                  onClick={() => setIsAgree(!isAgree)}
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
               />
               <label htmlFor="vehicle1"> Remember Me</label>
            </div>
            <button
               type="submit"
               disabled={isAgree}
               className={`cs-btn w-full ${isAgree && "btn-disabled"}`}
            >
               Update Profile
            </button>
         </form>
      </div>
   );
};

export default UpdateProfile;
