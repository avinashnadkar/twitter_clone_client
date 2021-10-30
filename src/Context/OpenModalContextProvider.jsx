import React, { useState } from "react";

const  OpenModalContext = React.createContext();

const   OpenModalContextProvider = ({children}) => {

   // state to open and close modal
   //tweet modal
   const [openAddTweetModal, setOpenAddTweetModal] = useState(false)
   //reply modal
   const [replyTweetModal, setReplyTweetModal] = useState(false)
   const [tweetId, setTweetId] = useState("");
   
   //Open or close add tweet modal
   const handleOpenAddTweetModal = () => {
       if(openAddTweetModal){
          setOpenAddTweetModal(false)
       }else{
          setOpenAddTweetModal(true)
       }
   }

   //Open or close reply modal
   const handleReplyTweetModal = (id) => {
      if(replyTweetModal){
         setReplyTweetModal(false)
      }else{
         setReplyTweetModal(true)
      }
      setTweetId(id)
  }

   //Send values and functions 
   const value = { openAddTweetModal,handleOpenAddTweetModal, replyTweetModal,handleReplyTweetModal,tweetId};

   return(
        <OpenModalContext.Provider value={value}>{children}</OpenModalContext.Provider>
   )
}

export {  OpenModalContext,  OpenModalContextProvider };
