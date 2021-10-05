import React, { useState } from "react";

const AuthContext = React.createContext();

const AuthContextProvider = ({children}) => {

   const [token,setToken] = useState("");
   const [isAuth,setIsAuth] = useState(false);
   const [credentials, setCredentials] = useState({email:"",password:""})

   //Change input state
   const handleChange = (e) => {
       let [name,value] = [e.target.name,e.target.value];
       setCredentials({
           ...credentials,
           [name] : value
       })
   }

   //Login user
   const handleLogin = (e) => {
       e.preventDefault();
       console.log(credentials)
   }

   const value = { token,isAuth,handleChange,handleLogin, credentials};

   return(
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
   )
}

export { AuthContext, AuthContextProvider };
