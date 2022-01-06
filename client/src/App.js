import { useEffect, useState } from "react";
import "./App.css";
import BoxPost from "./components/BoxPost";
import postService from "./services/post-service";
import { BrowserRouter, Switch, Route, Link, NavLink } from "react-router-dom";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Headers from "./components/Headers";
import About from "./components/About";
import Contact from "./components/Contact";
import PostDetail from "./components/PostDetail";

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
