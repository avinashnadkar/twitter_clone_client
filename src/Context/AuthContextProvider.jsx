import axios from "axios";
import React, { useState, useEffect } from "react";

const AuthContext = React.createContext();

const AuthContextProvider = ({children}) => {

   let webToken = localStorage.getItem('token');
   let user_id = localStorage.getItem('user_id');
   let name = localStorage.getItem('name');
   let username= localStorage.getItem('username');
   let avtar = localStorage.getItem('avtar');

   //Auth state to authenticate and protect routes
   const [isAuth,setIsAuth] = useState(webToken == null ? false : true);
   //User information state
   const [userData, setUserData] = useState({ avtar: "", name:"", username: "", phone: "",email: "",following: [],followers: [],birthDate: "",status: "",  about: ""})

   //Get user information from server
   useEffect(() => {
      const headers = {
          'Content-Type': 'application/json',
          "x-auth-token" : webToken
      }
      axios.get(`http://localhost:2345/users/${user_id}`,
          {
              headers: headers
          }
      )
      .then(res => {
         //set State of user info
         setUserData(res.data)
      }).catch(err => {
          console.log(err)
      })
  }, [])

   //Send values and functions 
   const value = { isAuth, setIsAuth, webToken, name, username , user_id, userData,};

   return(
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
   )
}

export { AuthContext, AuthContextProvider };
