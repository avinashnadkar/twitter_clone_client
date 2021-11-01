import axios from "axios";
import React, { useState, useEffect } from "react";

const TweetContext = React.createContext();

const TweetContextProvider = ({children}) => {

    //Get user data from localStorage
    let webToken = localStorage.getItem('token');
    let user_id = localStorage.getItem('user_id');
    let tweetid = localStorage.getItem('tweet_id')

   //tweet state
   const [tweetId, setTweetId] = useState(tweetid)

   //Get tweet id
   const getTweet = (tweet_id) => {
      setTweetId(tweet_id)
   }
      
   //Send values and functions 
   const value = { tweetId, getTweet };

   return(
        <TweetContext.Provider value={value}>{children}</TweetContext.Provider>
   )
}

//import TweetContextProvider to Tweet.jsx page
export { TweetContext, TweetContextProvider };
