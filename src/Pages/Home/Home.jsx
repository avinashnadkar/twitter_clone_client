import Feed from "../../Components/Feed/Feed";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import style from "./Home.module.css"

const Home = () => {
    return(
        <div className={style.homePage}>
            <Navbar/>
            <Feed/>
            <Sidebar/>
        </div>
    )
}

export default Home;