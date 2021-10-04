import TweetInput from "../TweetInput/TweetInput";
import style from "./Feed.module.css";

const Feed = () => {
    return(
        <div className={style.feed}>
            <div className={style.feedHeader}><p>Home</p></div>
            <TweetInput/>
        </div>
    )
}

export default Feed;