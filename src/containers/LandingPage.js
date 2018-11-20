import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {Button } from "antd";
import prposter from'./../static/prposter3.png';
// import sponsor from'./../static/sponsor.jpg';
import logo from './../static/grouppe2.png'
require('../sass/main.scss')






class LandingPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.pushToWelcome = this.pushToWelcome.bind(this);
    this.state = {
      
    };
  }
  pushToWelcome(){
    this.props.history.push("/home")
  }

  render() {
    return (
      <div>
        <header className="header">
            <div className="header__logo-box">
                <img src={logo} alt="Logo" className="header__logo"/>
            </div>  
            <div className="header__text-box">
            <h1 className="heading-primary">
                <span className="heading-primary--main">INTANIA95</span>
                <span className="heading-primary--sub">is where life happens</span>
            </h1>

            <a href="#" className="btn btn--white btn--animated" onClick={this.pushToWelcome}>Register</a>
            </div>
        </header>
      </div>
    );
  }
}

export default withRouter(LandingPage);
