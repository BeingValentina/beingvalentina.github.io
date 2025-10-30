import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";

// styles
import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-pro-react.scss?v1.1.0";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";
import "assets/css/custom-modern-styles.css";

import Index from "views/Index.js";
import Resume from "views/Resume.js";
import Reel from "views/Reel.js";
import About from "views/About.js";
import Contact from "views/Contact.js";
import Credits from "views/Credits.js";

ReactDOM.render(
  <HashRouter basename="/" hashType="noslash">
    <Switch>
      <Route path="/resume" render={props => <Resume {...props} />} />
      <Route path="/reel" render={props => <Reel {...props} />} />
      <Route path="/about" render={props => <About {...props} />} />
      <Route path="/credits" render={props => <Credits {...props} />} />
      <Route path="/contact" render={props => <Contact {...props} />} />
      <Route path="/" render={props => <Index {...props} />} />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
