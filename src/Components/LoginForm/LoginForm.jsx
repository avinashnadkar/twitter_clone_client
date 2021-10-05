import { useState, useContext } from "react";
import style from "./LoginForm.module.css";
import twitterLogo from "../../Images/twitter-logo.png";
import CloseIcon from '@mui/icons-material/Close';
import { AuthContext } from "../../Context/AuthContextProvider";

const LoginForm = ({cancelForm}) => {

    ///////Context Functions and data //////////
    const { handleChange,handleLogin,credentials } = useContext(AuthContext);

    //////Setting states and initial data for components ////////
    //Phone or email toggle (bool)
    const [togglePassword, setTogglePassword] = useState(false);

    //////Functions ////////
    //Toggle between email input field and password field
    const togglePasswordBox = () => {
        setTogglePassword(true)
    }
    
    return(
        <div className={style.signupForm}>
           <div className={style.formContainer}>
               <form onSubmit={handleLogin}>
                    <div className={style.cancelBtn} onClick={cancelForm}><CloseIcon/></div>
                    <div className={style.logo}><img src={twitterLogo}/></div>
                    <div> <h2>To get started, first enter your phone, email, or @username</h2></div>
                    <div className={style.inputBoxContainer}>
                        <input type="text" name="email" value={credentials.email}  onChange={handleChange} style={{display : togglePassword ?"none" : "block"}} placeholder="Email, email or username"/>
                        <input type="password" name="password" value={credentials.password}  onChange={handleChange} style={{display : togglePassword ?"block" : "none"}} placeholder="Password"/>
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