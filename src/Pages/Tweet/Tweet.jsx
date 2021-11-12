import {useContext,useEffect,useState} from "react";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import profilePic from "../../Images/avatar.png";
import Sidebar from "../../Components/Sidebar/Sidebar";
import style from "./Tweet.module.css"
import { AuthContext } from "../../Context/AuthContextProvider";
import { Redirect } from "react-router-dom";
import TweetCard from "../../Components/TweetCard/TweetCard";
import AddTweetModal from "../../Components/Modals/AddTweetModal";
import ReplyTweetModal from "../../Components/Modals/ReplyTweetModal";
import { TweetContext } from "../../Context/TweetContextProvider";
import axios from 'axios';

const Tweet = () => {

    //Context data
    const {isAuth,webToken} = useContext(AuthContext);
    const {tweetId} = useContext(TweetContext);

    //state for tweet
    const [tweet, setTweet] = useState({name:"",username:"",tweet:"",likes:[],reply:[]})

    //get tweet from server
    useEffect(()=>{
       
        const headers = {
            'Content-Type': 'application/json',
            "x-auth-token" : webToken
        }
        axios.get(`http://localhost:2345/tweets/tweet/${tweetId}`,
            {
                headers: headers
            }
        )
        .then(res => {
        //set State of tweet
        setTweet(res.data)
        //set tweet in localstorage
        
        console.log("clicekd")
        }).catch(err => {
            console.log(err)
        })

      localStorage.setItem('tweet_id' , tweetId)

    },[])

    return (isAuth)?(
        <div className={style.tweetPage}>
            <AddTweetModal/>
            <ReplyTweetModal/>
            <div className={style.main}>
                <div className={style.header}>
                   <button><KeyboardBackspaceIcon/></button>
                   <div>
                        <p>Tweet</p>
                   </div>
                </div>
                <div className={style.tweetContainer}>
                    <div className={style.tweetUser}>
                        <div className={style.userInfo}> 
                            <img src={profilePic}/>
                            <div className={style.nameAndUsername}>
                               <p>{tweet.name}</p>
                               <p>{tweet.username}</p>
                            </div>
                        </div>
                        <div className={style.option}>
                            <MoreHorizIcon/>
                        </div>
                    </div>
                    <div className={style.tweet}>
                        <p className={style.text}>{tweet.tweet}</p>
                        <div className={style.mediaFiles}>
                           <img src={tweet.media}/>
                        </div>
                    </div>
                    <div className={style.replies}>
                    {
                        tweet.reply.map((el)=>{
                            return <TweetCard 
                                        profilePic={profilePic}
                                        name={el.name}
                                        username={el.username}
                                        tweet={el.comment}
                                        media={el.media}
                                        replyCount={0}
                                    />
                        })
                    }
                       
                    </div>
                </div>
            </div>
            <Sidebar/>
        </div>
    ): (
         <Redirect to={"/signup"}  />
    )

}

export default Tweet;