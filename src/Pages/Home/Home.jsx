import {useContext,useState} from "react";
import Feed from "../../Components/Feed/Feed";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import style from "./Home.module.css"
import { AuthContext } from "../../Context/AuthContextProvider";
import { Redirect } from "react-router-dom";
import { OpenModalContext } from "../../Context/OpenModalContextProvider";
import AddTweetModal from "../../Components/Modals/AddTweetModal";


const Home = () => {

    const {isAuth} = useContext(AuthContext);
    const {openAddTweetModal,handleOpenAddTweetModal} = useContext(OpenModalContext)

    return (isAuth)?(
        <div className={style.homePage}>
            <AddTweetModal/>
            <Navbar/>
            <Feed/>
            <Sidebar/>
        </div>
    ): (
         <Redirect to={"/signup"}  />
    )

}

export default Home;