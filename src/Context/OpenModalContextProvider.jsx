import React, { useState } from "react";

const  OpenModalContext = React.createContext();

const   OpenModalContextProvider = ({children}) => {

   // state to open and close modal
   const [openAddTweetModal, setOpenAddTweetModal] = useState(false)

   //Open or close modal
   const handleOpenAddTweetModal = () => {
       if(openAddTweetModal){
          setOpenAddTweetModal(false)
       }else{
          setOpenAddTweetModal(true)
       }
   }

   //Send values and functions 
   const value = { openAddTweetModal,handleOpenAddTweetModal };

   return(
        <OpenModalContext.Provider value={value}>{children}</OpenModalContext.Provider>
   )
}

export {  OpenModalContext,  OpenModalContextProvider };
