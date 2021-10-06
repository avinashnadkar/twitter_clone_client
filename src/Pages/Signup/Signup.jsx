import twitterBanner from "../../Images/twitter_banner.png";
import twitterLogo from "../../Images/twitter-logo.png";
import googleLogo from "../../Images/google_logo.png";
import appleLogo from "../../Images/apple_logo.png";
import style from "./Signup.module.css";
import { Link } from "react-router-dom";
import SignupForm from "../../Components/SignupForm/SignupForm";
import { useState,useContext } from "react";
import { AuthContext } from "../../Context/AuthContextProvider";
import { Redirect } from "react-router-dom";

const Signup = () => {

    const {isAuth} = useContext(AuthContext );

    const [signupForm,setSignupForm] = useState(false);

    const openSignupForm = () => {
        if(signupForm){
            setSignupForm(false)
        }else{
            setSignupForm(true)
        }
    }

    return (!isAuth) ? (
        <div className={style.loginPage}>
        <div className={style.row}>
            <div><img src={twitterBanner}/></div>
            <div className={style.col_2}>
                <img src={twitterLogo}  className={style.twitterLogo}/>
                <h1>Happening now</h1>
                <h2>Join Twitter today.</h2>

                <button> <img src={googleLogo}/> Sign up with Google</button> <br/>
                <button> <img src={appleLogo}/> Sign up with Apple</button> <br/>
                <button onClick={openSignupForm}>Sign up with phone or email</button>

                <p>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.
                Already have an account? Sign in</p>

                <p>Already have an account? <Link to={'/Login'}><span className={style.SigninLink}>Sign in</span> </Link> </p>
            </div>
        </div>

        <ul className={style.footerLinks}>
            <li>About</li>
            <li>Help Center</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Ads info</li>
            <li>Blog</li>
            <li>Status</li>
            <li>Careers</li>
            <li>Brand Resources</li>
            <li>Advertising</li>
            <li>Marketing</li>
            <li>Twitter for Business</li>
            <li>Developers</li>
            <li>Directory</li>
            <li>Settings</li>
        </ul>
        <p className={style.copyRight}>© 2021 Twitter, Inc.</p>
        <div style={{display: signupForm ? "flex" : "none"}}>
            <SignupForm  cancelForm={openSignupForm}/>
        </div>
    </div>
    ) :(
         <Redirect to={"/"}  />
    )
}

export default Signup;