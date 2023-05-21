import React, { useContext, useState } from "react";
import InputGroup from "../Shared/InputGroup";
import googleLogo from "../../assets/logos/google.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import useDynamicTitle from "../../utils/useDynamicTitle";
import Swal from "sweetalert2";

const Login = () => {
   useDynamicTitle("Login");
   const navigate = useNavigate();
   const location = useLocation();
   const fromRedirect = location.state?.from?.pathname || "/";
   const [isAgree, setIsAgree] = useState(true);
   const { loginWithGoogle, loginCreatedUser } = useContext(AuthContext);
   const [user, setUser] = useState({
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
      success: "Successfully Login",
   });

   const changeHandler = (e) => {
      setUser({
         ...user,
         [e.target.name]: e.target.value,
      });
   };
   const handleSubmit = (e) => {
      e.preventDefault();
      if (user.email === "") {
         setUser({
            ...user,
            emailError: "Please provide your email",
         });
      } else if (user.password === "") {
         setUser({
            ...user,
            emailError: "",
            passwordError: "Please provide a password",
         });
      } else {
         loginCreatedUser(user.email, user.password)
            .then(() => {
               Swal.fire({
                  position: "center",
                  icon: "success",
                  title: user.success,
                  showConfirmButton: false,
                  timer: 1500,
               });
               navigate(fromRedirect);
               setUser({
                  ...user,
                  email: "",
                  password: "",
                  emailError: "",
                  passwordError: "",
               });
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

   const googleLogin = () => {
      loginWithGoogle()
         .then((result) => {
            Swal.fire({
               position: "center",
               icon: "success",
               title: user.success,
               showConfirmButton: false,
               timer: 1500,
            });
            navigate(fromRedirect);
         })
         .catch((error) => {
            console.log(error);
         });
   };
   return (
      <div className="cs-container bg-base-200 p-8">
         <h3 className="cs-title mt-8">Sign In</h3>
         <form
            onSubmit={handleSubmit}
            className="border bg-white md:w-[650px] mx-auto my-10 p-10"
         >
            <InputGroup
               label="Email"
               type="text"
               name="email"
               value={user.email}
               changeHandler={changeHandler}
               error={user.emailError}
            />
            <InputGroup
               label="Password"
               type="text"
               name="password"
               value={user.password}
               changeHandler={changeHandler}
               error={user.passwordError}
            />
            <div className="text-xl flex flex-col md:flex-row gap-5 justify-between font-medium mb-5">
               <div>
                  <input
                     onClick={() => setIsAgree(!isAgree)}
                     type="checkbox"
                     id="vehicle1"
                     name="vehicle1"
                     value="Bike"
                  />
                  <label htmlFor="vehicle1"> Remember Me</label>
               </div>
               <span className="text-lg font-normal">
                  Dont't have an Account,
                  <Link
                     to="/register"
                     className="text-blue-500 font-semibold text-lg"
                  >
                     Register here
                  </Link>
               </span>
            </div>
            <button
               type="submit"
               disabled={isAgree}
               className={`cs-btn w-full ${isAgree && "btn-disabled"}`}
            >
               Submit
            </button>

            <div className="mt-16">
               <div
                  onClick={googleLogin}
                  className="cs-login-btn"
               >
                  <img
                     className="w-7 rounded-full"
                     src={googleLogo}
                     alt="googleLogo"
                  />
                  Login With Google
               </div>
            </div>
         </form>
      </div>
   );
};

export default Login;
