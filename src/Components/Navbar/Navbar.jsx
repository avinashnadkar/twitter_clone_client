import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListIcon from '@mui/icons-material/List';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CheckIcon from '@mui/icons-material/Check';
import style from "./Navbar.module.css";
import twitterLogo from "../../Images/twitter-logo.png";
import profilePic from "../../Images/avatar.png";
import { AuthContext } from '../../Context/AuthContextProvider';
import { OpenModalContext } from '../../Context/OpenModalContextProvider';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    //Context data
    const { setIsAuth } = useContext(AuthContext);
    const {openAddTweetModal,handleOpenAddTweetModal} = useContext(OpenModalContext)

    //State
    const [logoutOption, setLogoutOption] = useState(false);
    const [name,setName] = useState(localStorage.getItem('name'))
    const [userName,setUserName] = useState(localStorage.getItem('username'))

    //Toggle logout option
    const showOptions = () => {
        if(logoutOption){
            setLogoutOption(false)
        }else{
            setLogoutOption(true)
        }
    }

    //Logout from website
    const handleLogout = () => {
            localStorage.removeItem('token')
            localStorage.removeItem('user_id');
            localStorage.removeItem('name');
            localStorage.removeItem('username');
            localStorage.removeItem('avtar');
            setIsAuth(false)
    }

    return(
        <nav>
            <div className={style.logo}>
               <img src={twitterLogo}/>
            </div>
            <ul className={style.navLinks}>
            <Link to={'/'}><li><HomeIcon/><p>Home</p></li> </Link>
            <Link to={'/explore'}><li><ExploreIcon/><p>Explore</p></li></Link>
                <li><NotificationsNoneIcon/><p>Notifications</p></li>
                <li><MailOutlineIcon/><p>Messages</p></li>
                <li><BookmarkBorderIcon/><p>Bookmarks</p></li>
                <li><ListIcon/><p>Lists</p></li>
            <Link to={'/profile'}><li><PersonOutlineIcon/><p>Profile</p></li></Link>
                <li><span className={style.moreHorizIcon}><MoreHorizIcon/></span><p> More</p></li>
            </ul>
            <br/>
            <botton className={style.tweetBtn} onClick={handleOpenAddTweetModal}>Tweet</botton>

            <div className={style.logoutOption} style={{display : logoutOption ? "block" : "none"}}>
                <div className={style.profile}>
                    <div className={style.profilePic}> <img src={profilePic}/> </div>
                    <div className={style.nameContainer}> <p>Name</p>  <p>Username</p></div>
                    <div className={style.profileIcon}> <CheckIcon color="primary" /> </div>
                </div>
                <p className={style.logout} onClick={handleLogout}>
                    Log out @username
                </p>
            </div>

            <div className={style.profile} onClick={showOptions}>
                <div className={style.profilePic}> <img src={profilePic}/> </div>
                <div className={style.nameContainer}> <p>{name}</p>  <p>{userName}</p></div>
                <div className={style.profileIcon}> <MoreHorizIcon/> </div>
            </div>
        </nav>
    )
}

export default Navbar;