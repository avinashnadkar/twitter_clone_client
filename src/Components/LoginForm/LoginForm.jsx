import { useState, useContext } from "react";
import style from "./LoginForm.module.css";
import twitterLogo from "../../Images/twitter-logo.png";
import CloseIcon from '@mui/icons-material/Close';
import { AuthContext } from "../../Context/AuthContextProvider";
import axios from "axios";

const LoginForm = ({cancelForm}) => {

    //////Setting states and initial data for components ////////
    //Phone or email toggle (bool)
    const [togglePassword, setTogglePassword] = useState(false);
    //Credentials for login
    const [credentials, setCredentials] = useState({email:"",password:""})

    ///////Context Functions and data //////////
    const { setIsAuth, isAuth } = useContext(AuthContext);

    //////Functions ////////
    //Toggle between email input field and password field
    const togglePasswordBox = () => {
        setTogglePassword(true)
    }

    //Change input state for login form
    const handleChange = (e) => {
        let [name,value] = [e.target.name,e.target.value];
        setCredentials({
            ...credentials,
            [name] : value
        })
    }


    //Login user
    const handleLogin = (e) => {
        e.preventDefault();
        //Make a post request to login
        axios.post("http://localhost:2345/users/login",{
            'email' : credentials.email,
            'password' : credentials.password
        }).then(res=>{
            //Store jwt token and userId in local storage 
            localStorage.setItem("token", res.data.results.token);
            localStorage.setItem("user_id", res.data.results.u_id);
            localStorage.setItem("name", res.data.results.name);
            localStorage.setItem("username", res.data.results.username);
            localStorage.setItem("avtar", res.data.results.avtar);
            setIsAuth(true);
        }).catch(err=>{
            console.log({"error":err})
        })
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