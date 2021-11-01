import {useContext,useState} from "react";
import Feed from "../../Components/Feed/Feed";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import style from "./Home.module.css"
import { AuthContext } from "../../Context/AuthContextProvider";
import { Redirect } from "react-router-dom";
import AddTweetModal from "../../Components/Modals/AddTweetModal";
import ReplyTweetModal from "../../Components/Modals/ReplyTweetModal";


const Home = () => {

    const {isAuth} = useContext(AuthContext);

    return (isAuth)?(
        <div className={style.homePage}>
            <AddTweetModal/>
            <ReplyTweetModal/>
            <Feed/>
            <Sidebar/>
        </div>
    ): (
         <Redirect to={"/signup"}  />
    )

}

export default Home;