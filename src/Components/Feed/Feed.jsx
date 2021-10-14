import axios from "axios";
import TweetCard from "../TweetCard/TweetCard";
import TweetInput from "../TweetInput/TweetInput";
import style from "./Feed.module.css";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../Context/AuthContextProvider";

const Feed = () => {

    ///////Context Functions and data //////////
    const { webToken } = useContext(AuthContext);

    //States 
    //const [tweets,setTweets] = useState([]);

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
                      return <TweetCard name={el.name} username="username" tweet={el.tweet} />
                    })
                }           
            </div>
        </>
    )
}

export default Feed;