import style from './TweetInput.module.css';
import profilePic from '../../Images/profilePlaceholder.jpg'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import { useState } from 'react';

const TweetInput = () => {

    const [tweet, setTweet] = useState({tweet:"",whoCanSee:""});
    const [showOption,setShowOption] = useState(false);

    const handleSubmit = () => {
        console.log(tweet);
    }
    
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
                    <select id={style.reply} name="whoCanSee" style={{display:showOption?"block" : "none"}} onChange={handleChange}>
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