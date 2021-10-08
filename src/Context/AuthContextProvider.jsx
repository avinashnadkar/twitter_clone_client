import React, { useState } from "react";

const AuthContext = React.createContext();

const AuthContextProvider = ({children}) => {

   let webToken = localStorage.getItem('token');

   const [isAuth,setIsAuth] = useState(webToken == null ? false : true);

   const value = { isAuth, setIsAuth};

   return(
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
   )
}

export { AuthContext, AuthContextProvider };
