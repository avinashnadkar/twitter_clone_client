import { useState } from 'react';
import style from "./FollowUser.module.css";

const FollowUser = ({profilePic,name,username,}) => {

    //State for components
    const [following,setFollowing] = useState(false);

    //Functions to handle states
    const handleFollowing = () => {
        if(!following){
            setFollowing(true)
        }else if(following){
            setFollowing(false)
        }
    }

    return(
        <div className={style.followUser}>
            <div className={style.user}> 
                <img className={style.profilePic} src={profilePic}/> 
                <div className={style.userInfo}> 
                <p>{name}</p>
                <p className={style.userName}>{username}</p>
                </div>
            </div>
    
            <div> 
                <button className={style.followBtn} 
                        onClick={handleFollowing}
                        style={{
                            backgroundColor: following ? "transparent" : "black",
                            color: following ? "black" : "white",
                            border : following ? "1px solid rgb(197, 197, 197)" : "none"
                        }}>
                    {following ? "Following" : "Follow"}
                </button>
            </div>
        </div>
    )
}

export default FollowUser;