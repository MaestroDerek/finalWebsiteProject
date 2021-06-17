
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.2.0";
import "assets/demo/demo.css";

import Index from "pages/Index.js";
import AboutUsPage from "pages/AboutUsPage.js";
import AccomplishmentsPage from "pages/AccomplishmentsPage.js";
import ProjectsPage from "pages/ProjectsPage.js";
import AboutWebsitePage from "pages/AboutWebsite.js";
import ContactMePage from "pages/ContactMePage.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/home" render={(props) => <Index {...props} />} />
      <Route
        path="/accomplishments"
        render={(props) => <AccomplishmentsPage {...props} />}
      />
      <Route
        path="/about-derek"
        render={(props) => <AboutUsPage {...props} />}
      />
      <Route
        path="/about-website"
        render={(props) => <AboutWebsitePage {...props} />}
      />
      <Route
        path="/contact_me"
        render={(props) => <ContactMePage {...props} />}
      />
      <Route
        path="/projects"
        render={(props) => <ProjectsPage {...props} />}
      />
      <Redirect from="/" to="/home" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
