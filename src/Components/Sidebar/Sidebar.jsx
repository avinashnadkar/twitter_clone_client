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

    const trendingData = [ 
                     {topic:"Music", title:"Red (Taylor’s Version) drops worldwide as Taylor Swift continues to re-record her albums", photo:""},
                     {topic:"Cricket · Trending", title:"#INDwithHasanAli", photo:""},
                     {topic:"Business & finance", title:"Falguni Nayar's Nykaa makes stock market debut, shares list at a 79% premium", photo:""},
                     {topic:"The Hollywood Reporter", title:"'Harry Potter and the Sorcerer's Stone' director Chris Columbus wants to direct a movie version of 'The Cursed Child' with the original cast", photo:""},
                     {topic:"VICE News", title:"The Climate Crisis Is Forcing Women and Girls to Sell Their Bodies", photo:""}
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
                    <h3>What’s happening</h3>
                   <div>
                       {
                           trendingData.map(el=>{
                               return (
                                  <div className={style.trending}>
                                      <div className={style.trendigTopic}>
                                          <p>{el.topic}</p>
                                          <p>{el.title}</p>
                                      </div>
                                      <div className={style.trendingNewsPhoto}>{el.photo}</div>
                                  </div>
                                )
                           })
                       }
                   </div>
                   <p className={style.showMoreLink}>Show more</p>
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