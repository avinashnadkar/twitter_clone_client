import style from './TweetCard.module.css';

const TweetCard = ({profilePic,name,username,tweet,media}) => {
    return(
        <div className={style.tweetCard}>
              <div className={style.userInfo}>
                 <img src={profilePic} className={style.displayPicture}/> 
                 <div className={style.userName}>
                       <h4>{name}</h4>
                       <p>{username}</p>
                 </div>
              </div>
              <p className={style.tweet}>{tweet}</p>
              <img className={style.mediaFile} src={media}/> 
        </div>
    )
}

export default TweetCard;