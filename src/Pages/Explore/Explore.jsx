import ExploreFeed from "../../Components/ExploreFeed/ExploreFeed";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { AuthContext } from "../../Context/AuthContextProvider";
import style from "./Explore.module.css";
import {useContext} from "react";
import { Redirect } from "react-router-dom";

const Explore = () => {

    const {isAuth} = useContext(AuthContext );

    return (isAuth)?(
        <div className={style.ExplorePage}>
              <ExploreFeed/>
            <Sidebar/>
        </div>
    ): (
         <Redirect to={"/signup"}  />
    )
}

export default Explore;