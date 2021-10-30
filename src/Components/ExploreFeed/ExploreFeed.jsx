import axios from "axios";
import TweetCard from "../TweetCard/TweetCard";
import SearchIcon from '@mui/icons-material/Search';
import style from "./ExploreFeed.module.css";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../Context/AuthContextProvider";

const ExploreFeed = () => {

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
                <div className={style.feedHeader}>
                    <div className={style.top}>
                        <div className={style.serachBox}>
                            <button> <SearchIcon className={style.searchIcon}/> </button>
                            <input type="text" placeholder="Search Twitter"/>
                        </div>
                        <div>
                            set
                        </div>
                    </div>
                    <div>
                         <ul className={style.tabLinks}>
                             <li><p>For you</p></li>
                             <li><p>Covid-19</p></li>
                             <li><p>Trending</p></li>
                             <li><p>News</p></li>
                             <li><p>Sports</p></li>
                             <li><p>Entertainment</p></li>
                         </ul>
                    </div>
                </div>
      
                <div className={style.tweetsContainer}>
                    {
                        tweets.map(el=>{
                        return <TweetCard name={el.name} username="username" tweet={el.tweet} showActionBar={true} />
                        })
                    }  
                </div>      
            </div>
        </>
    )
}

export default ExploreFeed;