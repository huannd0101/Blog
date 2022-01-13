import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./client/About";
import Contact from "./client/Contact";
import Content from "./client/Content";
import Footer from "./client/Footer";
import Headers from "./client/Headers";
import PostDetail from "./client/PostDetail";

const ClientContent = (props) => {
  return (
    <div id="page">
      <div className="container">
        <Headers />
        <Switch>
          <Route path="/" component={Content} exact />
          <Route path="/posts/:id" component={PostDetail} exact />
          {/* <Route path="/posts/:id/details" component={PostDetail} exact /> */}
          <Route path="/about" component={About} exact />
          <Route path="/contact" component={Contact} exact />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default ClientContent;
