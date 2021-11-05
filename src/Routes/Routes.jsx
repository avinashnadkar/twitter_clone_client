import Home from "../Pages/Home/Home.jsx";
import Signup from "../Pages/Signup/Signup.jsx";
import Login from "../Pages/Login/Login.jsx";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Navbar from "../Components/Navbar/Navbar"
import {Route,Switch} from "react-router-dom";
import Explore from "../Pages/Explore/Explore.jsx";
import Profile from "../Pages/Profile/Profile.jsx";
import Tweet from "../Pages/Tweet/Tweet.jsx";
import { useHistory ,useLocation } from 'react-router-dom';


const Routes = () => {

    //track the pathname to not render navbar on signup and signinPage
    const location = useLocation()

    return(
        <div>
            {
              //dont render the navbar on signup , login and "page not found" page
              (location.pathname == '/' ||
               location.pathname == '/explore'  ||
               location.pathname == '/profile'  ||
               location.pathname == '/tweet'  ||
               location.pathname == '/bookmarks'  ||
               location.pathname == '/lists'  ||
               location.pathname == '/messages' ) ? <Navbar/> : <></>
            }

           <Switch>
              <Route exact path={'/'}>
                  <Home/>
              </Route>
              <Route exact path={'/explore'}>
                  <Explore/>
              </Route>
              <Route exact path={'/profile'}>
                  <Profile/>
              </Route>
              <Route exact path={'/signup'}>
                  <Signup/>
              </Route>
               <Route exact path={'/login'}>
                  <Login/>
              </Route>
              <Route exact path={'/tweet'}>
                  <Tweet/>
              </Route>
              <Route>
                  <PageNotFound/>
              </Route>
           </Switch>
        </div>
    )
}

export default Routes;