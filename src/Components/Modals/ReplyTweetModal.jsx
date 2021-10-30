import { useContext,useState } from "react";
import axios from "axios";
import { OpenModalContext } from "../../Context/OpenModalContextProvider";
import {AuthContext} from "../../Context/AuthContextProvider";
import TweetCard from "../TweetCard/TweetCard";
import style from "./ModalStyle.module.css";
import profilePic from "../../Images/avatar.png";
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import CloseIcon from '@mui/icons-material/Close';

const ReplyTweetModal = () => {

    //Context data
    const { replyTweetModal, handleReplyTweetModal,tweetId } = useContext(OpenModalContext)
    const {webToken, user_id} = useContext(AuthContext)

    //States for inputs field and other
    const [reply, setReply] = useState("");

    //Post request to add tweet on server
    const handleSubmit = (e) => {
        e.preventDefault();

        const headers = {
            'Content-Type': 'application/json',
            'x-auth-token': webToken
        }

        const body = {
            'tweet_id' : tweetId,
            'u_id' : user_id,
            'reply' : reply
        }

        //post request to server
        axios.post('http://localhost:2345/tweets/reply', body,{
            headers: headers
        }).then(res => {
            //console.log(res)
        }).catch(err => {
            console.log(err)
        })

        //set state of input to empty
        setReply("")
    }

    //Change states on events
    const handleChange = (e) => {
        let  value = e.target.value;
        setReply(value)
    }

    return (
        <div className={style.modal} style={{ display: replyTweetModal ? "flex" : "none" }}>
            <div className={style.modalContainer}>
                <div className={style.modalHeader}>
                    <button onClick={handleReplyTweetModal} className={style.closeBtn}><CloseIcon /></button>
                </div>
                <div className={style.replyContainer}>
                    <TweetCard profilePic={profilePic} name={"name"} username={"@username"} tweet={"tweet ofngvo odnbo osfn"}  showActionBar={false}/>
                    <div className={style.modalForm}>
                        <div>
                            <img src={profilePic} />
                        </div>
                        <div className={style.inputBox}>
                            <div>
                                <textarea
                                    className={style.replyBox}
                                    placeholder="Tweet your reply"
                                    name="reply"
                                    onChange={handleChange}
                                    value={reply}
                                >
                                </textarea>
                            </div>
                            <button type="submit" className={style.replyBtn} onClick={handleSubmit}>Reply</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReplyTweetModal;