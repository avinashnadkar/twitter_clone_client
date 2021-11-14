import {useContext,useState,useEffect} from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import TweetCard from "../../Components/TweetCard/TweetCard";
import style from "./Profile.module.css";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContextProvider";
import { Redirect } from "react-router-dom";
import { OpenModalContext } from "../../Context/OpenModalContextProvider";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import AddTweetModal from "../../Components/Modals/AddTweetModal";
import ReplyTweetModal from "../../Components/Modals/ReplyTweetModal";
import FollowUser from "../../Components/FollowUser/FollowUser";

const Profile = () => {

    //Context data
    const {isAuth,user_id,webToken} = useContext(AuthContext);
    const {openAddTweetModal,handleOpenAddTweetModal} = useContext(OpenModalContext)

    //States
    const [userData,setUserData] = useState({name:"",username:"",avatar:"",followers:[],following:[],birthDate:"",tweets:""})
    const [count, setCount] = useState({followingLength:0,followersLength:0});
    const [tweets,setTweets] = useState([])

    const data = [
        {avtar:"https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554__340.jpg",name:"Cat",username:"@cat"},
        {avtar:"https://gray-wmtv-prod.cdn.arcpublishing.com/resizer/9OfQfWXXpPR1jY_Y6QWuT_I75WA=/1200x800/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/BIARK5DSRBDLPM5NBJW4MWFSYI.jpg",name:"Egle",username:"@egle"},
        {avtar:"https://i.natgeofe.com/k/75ac774d-e6c7-44fa-b787-d0e20742f797/giant-panda-eating.jpg",name:"Panda",username:"@panda"}
     ]

    //Get userdata from server
    useEffect(()=>{
        const headers = {
            'Content-Type': 'application/json',
            "x-auth-token" : webToken
        }

        //get userdata from server
        axios.get(`http://localhost:2345/users/${user_id}`,{
            headers
        })
        .then(res=>{
            setUserData({...res.data})
            setCount({followersLength:res.data.followers.length,followingLength:res.data.following.length})
        })
        .catch(err=>{
            console.log(err)
        })

        //get all tweets of user from server
        axios.get(`http://localhost:2345/tweets/usertweets/${user_id}`,{
            headers
        })
        .then(res=>{
            // console.log(res)
            setTweets(res.data)
        })
        .catch(err=>{
            console.log(err)
        })

    },[])

    return (isAuth)?(
        <div className={style.profilePage}>
            <AddTweetModal/>
            <div className={style.main}>
                <div className={style.header}>
                   <button><KeyboardBackspaceIcon/></button>
                   <div>
                        <p>{userData.name}</p>
                        <p>{userData.name} tweet</p>
                   </div>
                </div>
                <ProfileCard {...userData} followingLength={count.followingLength} followersLength={count.followersLength} />

                <div className={style.tweetsContainer}>
                   {
                       tweets.map(el=>{
                           return <TweetCard  name={el.name} username={el.username} tweet={el.tweet} replyCount={el.reply.length} likesCount={el.likes.length} showActionBar={true} media={el.media}/>
                       })
                   }
                </div>

                <div className={style.followRecomendation}>
                   {
                       data.map(item=>{
                           return <FollowUser profilePic={item.avtar} name={item.name} username={item.username}/>
                       })
                   }
                </div>
            </div>
            <Sidebar/>
        </div>
    ): (
         <Redirect to={"/signup"}  />
    )

}

export default Profile;

