import style from './TweetCard.module.css';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareIcon from '@mui/icons-material/IosShare';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { OpenModalContext } from '../../Context/OpenModalContextProvider';
import { TweetContext} from '../../Context/TweetContextProvider';

const TweetCard = ({profilePic,name,username,tweet,media,replyCount,retweetCount,likesCount,showActionBar,tweetID}) => {

   //Context data
   const {replyTweetModal,handleReplyTweetModal} = useContext(OpenModalContext)
   const {getTweet} = useContext(TweetContext);

    return(
        <div onClick={()=>getTweet(tweetID)} className={style.tweetCard} style={{ borderBottom : showActionBar ?  '1px solid rgb(238, 238, 238)' : 'none'}}>
              <div className={style.userInfo}>
                 <img src={profilePic} className={style.displayPicture}/>
                 <div>
                  <Link to={'/tweet'}>
                    <div className={style.userName}>
                        <h4>{name}</h4>
                        <p>{username}</p>
                    </div>
                    <p className={style.tweet}>{tweet}</p>
                   <img className={style.mediaFile} src={media}/>
                   </Link> 
                    <div className={style.actions} style={{display : showActionBar ? "flex" :"none"}}>
                        <div>
                           <button className={style.commentIcon} onClick={()=> handleReplyTweetModal(tweetID,name,username,tweet)}> <ChatBubbleOutlineIcon style={{ fontSize: 18 }}/> </button>
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
        </div>
    )
}

export default TweetCard;