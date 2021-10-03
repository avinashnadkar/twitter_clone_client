import Navbar from "../../Components/Navbar/Navbar";
import style from "./Home.module.css"

const Home = () => {
    return(
        <div className={style.homePage}>
            <Navbar/>
        </div>
    )
}

export default Home;