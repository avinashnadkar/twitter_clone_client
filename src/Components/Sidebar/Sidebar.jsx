import SearchIcon from '@mui/icons-material/Search';
import style from "./Sidebar.module.css";

const Sidebar = () => {
    return(
        <div className={style.sidebar}>
            <div className={style.searchBarHeader}>
                <div className={style.serachBox}>
                    <button> <SearchIcon className={style.searchIcon}/> </button>
                    <input type="text" placeholder="Search Twitter"/>
                </div>
            </div>
            <div className={style.sidebarContent}>
                <div className={style.newsBox}>
                   
                </div>
                <div className={style.followRecommendBox}>
                   
                </div>
            </div>
        </div>
    )
}

export default Sidebar;