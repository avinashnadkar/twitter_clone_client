import React, { useState } from "react";
import axios from "axios";

const AuthContext = React.createContext();

const AuthContextProvider = ({children}) => {

   let webToken = localStorage.getItem('token');

   const [isAuth,setIsAuth] = useState(webToken == null ? false : true);
   const [credentials, setCredentials] = useState({email:"",password:""})

   //Regeister user/ signup form
   const handleRegister = () =>{
        
   }

   //Change input state for login form
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
       //Make a post request to login
       axios.post("http://localhost:2345/users/login",{
           'email' : credentials.email,
           'password' : credentials.password
       }).then(res=>{
           localStorage.setItem("token", res.data.token);
            setIsAuth(true);
       }).catch(err=>{
           console.log({"error":err})
       })
   }


   const value = { isAuth, setIsAuth, handleChange,handleLogin, credentials};

   return(
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
   )
}

export { AuthContext, AuthContextProvider };
