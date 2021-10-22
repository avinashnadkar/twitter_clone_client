import style from './TweetCard.module.css';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareIcon from '@mui/icons-material/IosShare';

const TweetCard = ({profilePic,name,username,tweet,media,replyCount,retweetCount,likesCount}) => {
    return(
        <div className={style.tweetCard}>
              <div className={style.userInfo}>
                 <img src={profilePic} className={style.displayPicture}/>
                 <div>
                    <div className={style.userName}>
                        <h4>{name}</h4>
                        <p>{username}</p>
                    </div>
                    <p className={style.tweet}>{tweet}</p>
                    <div className={style.actions}>
                        <div>
                           <button className={style.commentIcon}> <ChatBubbleOutlineIcon style={{ fontSize: 18 }}/> </button>
                           <p>{replyCount}</p>
                        </div>
                        <div>
                           <button className={style.retweetIcon}> <SwapVertIcon style={{ fontSize: 18 }}/> </button>
                           <p>{retweetCount}</p>
                        </div>
                        <div>
                           <button className={style.likeIcon}> <FavoriteBorderIcon style={{ fontSize: 18 }}/> </button>
                           <p>{likesCount}</p>
                        </div>
                        <div>
                           <button className={style.shareIcon}> <IosShareIcon style={{ fontSize: 18 }}/> </button>
                        </div>
                    </div>
                </div> 
              </div>
              <img className={style.mediaFile} src={media}/> 
        </div>
    )
}

export default TweetCard;