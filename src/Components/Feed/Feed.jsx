import axios from "axios";
import TweetCard from "../TweetCard/TweetCard";
import TweetInput from "../TweetInput/TweetInput";
import style from "./Feed.module.css";
import profilePic from "../../Images/avatar.png";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../Context/AuthContextProvider";

const Feed = () => {

    ///////Context Functions and data //////////
    const { webToken, user_id,userData } = useContext(AuthContext);

    //States 
    const [tweets,setTweets] = useState([]);

    //Get tweets 
    useEffect(() => {
        const headers = {
            'Content-Type': 'application/json',
            "x-auth-token" : webToken
        }

        axios.get("http://localhost:2345/tweets/tweets",
            {
                headers: headers
            }
        )
        .then(res => {
            //set State of Tweets
            setTweets(res.data)
            //console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        // wrap code in react fragment
        <>
            <div className={style.feed}>
                <div className={style.feedHeader}><p>Home</p></div>
                <TweetInput />
                {
                    tweets.map(el=>{
                      return <TweetCard profilePic="https://pbs.twimg.com/profile_images/1236731619110719489/JyHmGkgb_400x400.jpg" name={el.name} username={el.username} tweet={el.tweet} media={el.media} likesCount={5} retweetCount={14} replyCount={22} showActionBar={true} tweetID={el._id}/>
                    })
                }           
            </div>
        </>
    )
}

export default Feed;