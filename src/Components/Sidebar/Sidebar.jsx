import SearchIcon from '@mui/icons-material/Search';
import style from "./Sidebar.module.css";
import profilePic from "../../Images/profilePlaceholder.jpg";
import FollowUser from '../FollowUser/FollowUser';
import { useState } from 'react';
import { border } from '@mui/system';

const Sidebar = () => {

    const data = [
                    {avtar:"https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554__340.jpg",name:"Cat",username:"@cat"},
                    {avtar:"https://gray-wmtv-prod.cdn.arcpublishing.com/resizer/9OfQfWXXpPR1jY_Y6QWuT_I75WA=/1200x800/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/BIARK5DSRBDLPM5NBJW4MWFSYI.jpg",name:"Egle",username:"@egle"},
                    {avtar:"https://i.natgeofe.com/k/75ac774d-e6c7-44fa-b787-d0e20742f797/giant-panda-eating.jpg",name:"Panda",username:"@panda"}
                 ]
 


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
                   <p className={style.title}>Who to follow</p>
                   {
                       data.map(item=>{
                           return <FollowUser profilePic={item.avtar} name={item.name} username={item.username}/>
                       })
                   }
                </div>
            </div>
        </div>
    )
}

export default Sidebar;