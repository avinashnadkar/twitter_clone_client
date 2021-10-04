import { useState } from "react";
import style from "./LoginForm.module.css";
import twitterLogo from "../../Images/twitter-logo.png";
import CloseIcon from '@mui/icons-material/Close';

const LoginForm = ({cancelForm}) => {

    /////////////////////////// Setting states and initial data for components ////////////////////////////

    //User information (object)
    const [userData,setUserData] = useState({email:"", password:""});
    //Phone or email toggle (bool)
    const [togglePassword, setTogglePassword] = useState(false);

    /////////////////////////////////////// Functions ////////////////////////////////////////

    //Change states and manage form validation
    const handleChange = (e) => {

        let [name,value] = [e.target.name,e.target.value];

        //change user data
        setUserData({
            ...userData,
            [name] : value
        })

        //console.log(userData)
    }

    //Toggle between email input field and password field
    const togglePasswordBox = () => {
        setTogglePassword(true)
    }
    
    return(
        <div className={style.signupForm}>
           <div className={style.formContainer}>
               <form>
                    <button className={style.cancelBtn} onClick={cancelForm}><CloseIcon/></button>
                    <div className={style.logo}><img src={twitterLogo}/></div>
                    <div> <h2>To get started, first enter your phone, email, or @username</h2></div>
                    <div className={style.inputBoxContainer}>
                        <input type="text" name="email" value={userData.email}  onChange={handleChange} style={{display : togglePassword ?"none" : "block"}} placeholder="Email, email or username"/>
                        <input type="password" name="password" value={userData.password}  onChange={handleChange} style={{display : togglePassword ?"block" : "none"}} placeholder="Password"/>
                    </div>


                    <div>
                        <div onClick={togglePasswordBox} className={style.forgetPassBtn} style={{display : togglePassword?"none" : "block" }}> Next </div>
                        <button className={style.nextBtn} style={{display : togglePassword? "block" : "none"}}> Login </button>
                    </div>

               </form>
           </div>
        </div>
    )
}

export default LoginForm;