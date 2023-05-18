import React, { createContext, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(false);

   const createNewUser = (email, password, name, photo_url, navigate) => {
      createUserWithEmailAndPassword(auth, email, password)
         .then((userCredentials) => {
            updateUserProfile(userCredentials.user, name, photo_url);
            logoutUser("");
            toast.success("User Created Successfully");
            navigate("/login");
         })
         .catch((error) => {
            toast.error(error.message.slice(22, 42));
         });
   };

   const updateUserProfile = (user, name, photo_url) => {
      updateProfile(user, { displayName: name, photoURL: photo_url });
   };

   const info = {
      // user: {
      //    displayName: "Nayem",
      //    email: "alimodasser@gmail.com",
      //    photoURL: "sssssssffffffffffff",
      // },
      createNewUser,
      updateUserProfile,
      user,
      loading,
   };
   return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
