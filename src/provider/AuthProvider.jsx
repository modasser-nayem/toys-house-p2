import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(false);

   const info = {
      // user: {
      //    displayName: "Nayem",
      //    email: "alimodasser@gmail.com",
      //    photoURL: "sssssssffffffffffff",
      // },
      user,
      loading,
   };
   return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
