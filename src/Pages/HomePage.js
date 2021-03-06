import React, { useState, useEffect } from 'react';
import {Switch , Route , Redirect  } from 'react-router-dom'

//Pages
import DashboardOverview from "Pages/DashboardOverview"
import Signin from "Pages/Authorization/Signin";
import Signup from "Pages/Authorization/Signup";
import ForgotPassword from "Pages/Authorization/ForgotPassword";
import ResetPassword from "Pages/Authorization/ResetPassword";
import Lock from "Pages/Authorization/Lock";
import NotFound from "Pages/Authorization/NotFound"
import ServerError from "Pages/Authorization/ServerError";
import ViewRiders from "Pages/Riders/ViewRiders";
import AddRider from "Pages/Riders/AddRider";
import Transactions from "Pages/Transactions/Transactions";
import Individual from "Pages/Individual"
import Simple from "Pages/Simple";
import Settings from "Pages/Settings";
//components
import Sidebar from "../Components/SideBar";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Preloader from "../Components/Preloader";

import  {Routes}  from "../Routing/Routes"


const RouteWithLoader = ({ component: Component, ...rest }) => {
    const [loaded, setLoaded] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => setLoaded(true), 1000);
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <Route {...rest} render={props => ( <> <Preloader show={loaded ? false : true} /> <Component {...props} /> </> ) } />
    );
  };
  
  const RouteWithSidebar = ({ component: Component, ...rest }) => {
    const [loaded, setLoaded] = useState(false);
  // 
    useEffect(() => {
      const timer = setTimeout(() => setLoaded(true), 1000);
      return () => clearTimeout(timer);
    }, []);
  
    const localStorageIsSettingsVisible = () => {
      return localStorage.getItem('settingsVisible') === 'false' ? false : true
    }
  
    const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible);
  
    const toggleSettings = () => {
      setShowSettings(!showSettings);
      localStorage.setItem('settingsVisible', !showSettings);
    }
  
    return (
      <Route {...rest} render={props => (
        <>
          <Preloader show={loaded ? false : true} />
          <Sidebar />
  
          <main className="content">
            <Navbar />
            <Component {...props} />
            <Footer toggleSettings={toggleSettings} showSettings={showSettings} />
          </main>
        </>
      )}
      />
    );
  };

const HomePage = () => (
    <Switch>
        <RouteWithLoader exact path={Routes.NotFound.path} component={NotFound} />
        <RouteWithLoader exact path={Routes.Signin.path} component={Signin} />
        <RouteWithLoader exact path={Routes.Signup.path} component={Signup} />
        <RouteWithLoader exact path={Routes.ForgotPassword.path} component={ForgotPassword} />
        <RouteWithLoader exact path={Routes.ResetPassword.path} component={ResetPassword} />
        <RouteWithLoader exact path={Routes.Lock.path} component={Lock} />
        <RouteWithLoader exact path={Routes.ServerError.path} component={ServerError} />
        <RouteWithLoader exact path={Routes.Simple.path} component={Simple} />

        {/* Pages */}
        <RouteWithSidebar exact path={Routes.DashboardOverview.path} component={DashboardOverview} />
        <RouteWithSidebar exact path={Routes.ViewRiders.path} component={ViewRiders} />
        <RouteWithSidebar exact path={Routes.AddRider.path} component={AddRider} />
        <RouteWithSidebar exact path={Routes.Transactions.path} component={Transactions} />
        <RouteWithSidebar exact path={Routes.Individual.path} component={Individual} />
        <RouteWithSidebar exact path={Routes.Settings.path} component={Settings} />

        <Redirect to={Routes.NotFound.path} />
    </Switch>
);

export default HomePage;