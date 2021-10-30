import style from "./ProfileCardStyle.module.css";
import profilePic from "../../Images/avatar.png";

const ProfileCard = (props) => {
    return(
        <div>
            <div className={style.coverPhoto}>
                
            </div>
            <div className={style.profilePhoto}>
                 <img src={profilePic}/>
            </div>
            <div className={style.editProfile}>
                <button>Edit profile</button>
            </div>
            <div className={style.profileInfo}>
                <p className={style.name}>{props.name}</p>
                <p className={style.username}>{props.username}</p>
                <p className={style.bio}>Enthusiastic about technology</p>
                <div className={style.otherInfo}>
                    <p>Mumbai, India</p>
                    <p><a href="#" target="_blank">avinashnadkar.com</a></p>
                    <p>Born {props.birthDate}</p>
                </div>
                <p className={style.joiningDate}>Joined March 1963</p>
                <div className={style.followersFollowingCount}>
                   <p> <span className={style.count}> {props.followingLength} </span> Following</p>
                   <p> <span  className={style.count}> {props.followersLength} </span>  Follower</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;