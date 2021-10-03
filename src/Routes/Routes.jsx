import Home from "../Pages/Home/Home.jsx";
import Signup from "../Pages/Signup/Signup.jsx";
import Login from "../Pages/Login/Login.jsx";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import {Route,Switch} from "react-router-dom";

const Routes = () => {
    return(
        <div>
           <Switch>
              <Route exact path={'/'}>
                  <Home/>
              </Route>
              <Route exact path={'/signup'}>
                  <Signup/>
              </Route>
               <Route exact path={'/login'}>
                  <Login/>
              </Route>
              <Route>
                  <PageNotFound/>
              </Route>
           </Switch>
        </div>
    )
}

export default Routes;