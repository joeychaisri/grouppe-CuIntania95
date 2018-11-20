import React from "react";
import { Switch, Route } from "react-router-dom";
// import RegistrationForm from "./containers/RegistrationForm";
import InformationForm from "./containers/InformationForm"
import Termandcondition from "./containers/TermandCondition"
// import SeriesAuth from "./containers/SeriesAuth"
import WelcomePage from "./containers/WelcomPage"
import SearchByOrder from "./containers/searchByOrder"
import Summary from "./containers/Summary"
import Success from "./containers/success"
import LandingPage from "./containers/LandingPage"
import MainLayout from "./components/MainLayout";

const Routes = props => {
  return (
    <Switch>

      <Route exact path='/' render={(props) => <div>  <LandingPage/>  </div>} />
      <Route exact path='/home' render={props => <div> <MainLayout> <WelcomePage/> </MainLayout> </div>} />
      <Route exact path='/termandcondition' render={props => <div> <MainLayout> <Termandcondition/> </MainLayout> </div>} />
      <Route exact path='/information' component={props => <div> <MainLayout> <InformationForm/> </MainLayout> </div>} />
      <Route exact path='/search' component={props => <div> <MainLayout> <SearchByOrder/> </MainLayout> </div>} />
      <Route exact path='/summary' component={props => <div> <MainLayout> <Summary/> </MainLayout> </div>} />
      <Route exact path='/order/:id' component={props => <div> <MainLayout> <Summary/> </MainLayout> </div>} />
      <Route exact path='/edit/:idx' component={props => <div> <MainLayout> <InformationForm/> </MainLayout> </div>} />
      <Route exact path='/success' component={props => <div> <MainLayout> <Success/> </MainLayout> </div>} />


       {/* <Route exact path="/" component={LandingPage} />
      <Route exact path="/home" component={WelcomePage} />
      <Route exact path="/termandcondition" component={Termandcondition} />
      <Route exact path="/information" render={() => <InformationForm {...props} />} />
      <Route exact path="/search" render={() => <SearchByOrder {...props} />} />
      <Route exact path="/summary" render={() => <Summary {...props} />} />
      <Route exact path="/order/:id" render={() => <Summary {...props} />} />
      <Route exact path="/edit/:idx" render={() => <InformationForm {...props} />} />
      <Route exact path="/success" component={Success} />   */}
    </Switch>
  );
};

export default Routes;
