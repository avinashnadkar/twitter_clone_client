import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListIcon from '@mui/icons-material/List';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import style from "./Navbar.module.css";
import twitterLogo from "../../Images/twitter-logo.png";
import profilePic from "../../Images/profilePlaceholder.jpg";

const Navbar = () => {
    return(
        <nav>
            <div className={style.logo}>
               <img src={twitterLogo}/>
            </div>
            <ul className={style.navLinks}>
                <li><HomeIcon/><p>Home</p></li>
                <li><ExploreIcon/><p>Explore</p></li>
                <li><NotificationsNoneIcon/><p>Notifications</p></li>
                <li><MailOutlineIcon/><p>Messages</p></li>
                <li><BookmarkBorderIcon/><p>Bookmarks</p></li>
                <li><ListIcon/><p>Lists</p></li>
                <li><PersonOutlineIcon/><p>Profile</p></li>
                <li><span className={style.moreHorizIcon}><MoreHorizIcon/></span><p> More</p></li>
            </ul>
            <br/>
            <botton className={style.tweetBtn}>Tweet</botton>

            <div className={style.profile}>
                <div className={style.profilePic}> <img src={profilePic}/> </div>
                <div className={style.nameContainer}> <p>Name</p>  <p>Username</p></div>
                <div className={style.profileIcon}> <MoreHorizIcon/> </div>
            </div>

        </nav>
    )
}

export default Navbar;