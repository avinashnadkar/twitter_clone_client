import { useContext,useState } from "react";
import axios from "axios";
import { OpenModalContext } from "../../Context/OpenModalContextProvider";
import {AuthContext} from "../../Context/AuthContextProvider";
import style from "./ModalStyle.module.css";
import profilePic from "../../Images/avatar.png";
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import CloseIcon from '@mui/icons-material/Close';

const AddTweetModal = () => {


    //Context state and functions
    const {openAddTweetModal,handleOpenAddTweetModal} = useContext(OpenModalContext)
    const {webToken, user_id} = useContext(AuthContext)

    //States for inputs field and other
    const [tweet, setTweet] = useState({u_id: user_id, tweet:"", whoCanReply:""});

    //Post request to add tweet on server
    const handleSubmit = (e) => {
        e.preventDefault();

        const headers = {
            'Content-Type': 'application/json',
            'x-auth-token': webToken
        }
        
        //post request to server
        axios.post('http://localhost:2345/tweets/tweet', tweet,{
            headers : headers
        }).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })

        //set state of input to empty
        setTweet({u_id: user_id,tweet:"", whoCanReply:""})
    }
    
    //Change states on events
    const handleChange = (e) => {

            let [name,value] = [e.target.name,e.target.value];

            setTweet({
                ...tweet,
                [name] : value
            })
    }
   
    return(
        <div className={style.modal} style={{display: openAddTweetModal ? "flex" : "none"}}>
            <div className={style.modalContainer}>
                <div className={style.modalHeader}>
                    <button onClick={handleOpenAddTweetModal} className={style.closeBtn}><CloseIcon/></button>
                </div>
                <div className={style.modalForm}>
                        <div>
                           <img src={profilePic}/>
                        </div>
                        <div className={style.inputBox}>
                            <div>
                               <textarea   
                                    placeholder="What's happening ?" 
                                    name="tweet"
                                    onChange={handleChange}
                                    value={tweet.tweet}
                                >
                                </textarea>
                            </div>
                            <div className={style.selectOption}>
                            <select id={style.reply} name="whoCanReply" onChange={handleChange}>
                                <option value="enyone">Everyone can reply</option>
                                <option value="following-people">People you follow</option>
                                <option value="mentioned-people">Only people you mention</option>
                            </select>
                            </div>

                            <div className={style.mediaUpload_and_SubmitBtn}>
                                <div className={style.fileUpload }>
                                    <span><InsertPhotoIcon className={style.imgUploadIcon}/></span>
                                    <input type="file" className={style.upload} name="media"/>
                                </div>
                                <button type="submit" onClick={handleSubmit}>Tweet</button>
                            </div>

                        </div>
                </div>
           </div>
        </div>
    )
}

export default  AddTweetModal;