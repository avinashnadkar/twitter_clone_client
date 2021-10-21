import style from './TweetInput.module.css';
import profilePic from "../../Images/avatar.png";
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import { AuthContext } from '../../Context/AuthContextProvider';
import { useContext, useState } from 'react';
import axios from 'axios';

const TweetInput = () => {
    
    //Context state and functions
    const {webToken, user_id} = useContext(AuthContext)
    
    //States for inputs field and other
    const [tweet, setTweet] = useState({u_id: user_id, tweet:"", whoCanReply:""});
    const [showOption,setShowOption] = useState(false);

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
          
          if(name == "tweet" && value != ""){
            setShowOption(true)
          }else{
            setShowOption(false)
          }

          setTweet({
              ...tweet,
              [name] : value
          })
    }

    return(
        <div className={style.tweetFormContainer}>
            <form onSubmit={handleSubmit}>
                <img src={profilePic}/>
                <div className={style.inputContainer}>
                    <textarea 
                        placeholder="What's happening ?" 
                        name="tweet"
                        onChange={handleChange}
                        value={tweet.tweet}
                    /> 
                    <br/>
                    <select id={style.reply} name="whoCanReply" style={{display:showOption?"block" : "none"}} onChange={handleChange}>
                        <option value="enyone">Everyone can reply</option>
                        <option value="following-people">People you follow</option>
                        <option value="mentioned-people">Only people you mention</option>
                    </select>
                    
                    <div className={style.mediaUpload_and_SubmitBtn}>
                        <div className={style.fileUpload }>
                            <span><InsertPhotoIcon className={style.imgUploadIcon}/></span>
                            <input type="file" className={style.upload} name="media"/>
                        </div>
                        <button type="submit">Tweet</button>
                    </div>
                    
                </div>
            </form>
        </div>
    )
}

export default  TweetInput;