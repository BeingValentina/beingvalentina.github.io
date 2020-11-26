/*!

=========================================================
* BLK Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.1.0";
import "assets/demo/demo.css";

import HomePage from "views/HomePage.js";
import ResumePage from "./views/ResumePage";
import ReelPage from "./views/ReelPage";
import AboutPage from "./views/AboutPage";
import ContactPage from "views/ContactPage.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/resume" render={props => <ResumePage {...props} />}/>
      <Route path="/reel" render={props => <ReelPage {...props} />}/>
      <Route path="/about" render={props => <AboutPage {...props} />}/>
      <Route path="/contact" render={props => <ContactPage {...props} />}/>
      <Redirect from="/:extra" to="/"/>
      <Route
        path="/"
        render={props => <HomePage {...props} />}
      />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
