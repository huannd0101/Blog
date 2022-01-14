import React, { useState } from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import { AuthContextProvider } from "../context/auth-context";
import NavBar from "../components/admin/NavBar";
import Dashboard from "../components/admin/Dashboard";
import CreatePost from "../components/admin/CreatePost";
import ListComment from "../components/admin/ListComment";
import ListPost from "../components/admin/ListPost";
import ListContact from "../components/admin/ListContacts";
import img1 from "../Assets/admin/img/undraw_profile.svg";
import Footer from "./admin/Footer";

import "../Assets/admin/css/sb-admin-2.min.css";
import "../Assets/admin/css/admin-page.css";

import storageService from "../services/storage.service";
import { Redirect } from "react-router-dom";
import { Constants } from "../constants/Constants";

const AdminContent = (props) => {
  const [reload, setReload] = useState();
  let isLoggedin = storageService.get(Constants.loggedIn);
  let curUser = storageService.getObject(Constants.userInfo);

  if (!isLoggedin) {
    return <Redirect exact from="/admin" to={"/login"} />;
  }

  const logoutHandler = () => {
    storageService.remove(Constants.accessToken);
    storageService.remove(Constants.curUser);
    storageService.remove(Constants.userInfo);
    storageService.remove(Constants.loggedIn);
    setReload(Math.random());
  };

  return (
    <AuthContextProvider>
      <BrowserRouter>
        <div id="wrapper">
          <NavBar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                <button
                  id="sidebarToggleTop"
                  className="btn btn-link d-md-none rounded-circle mr-3"
                >
                  <i className="fa fa-bars"></i>
                </button>

                <ul className="navbar-nav ml-auto">
                  <div className="topbar-divider d-none d-sm-block"></div>

                  <li className="nav-item dropdown no-arrow">
                    <NavLink
                      to="/admin"
                      className="nav-link dropdown-toggle"
                      id="userDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                        {curUser.username}
                      </span>
                      <img
                        className="img-profile rounded-circle"
                        src={img1}
                        alt="123"
                      />
                    </NavLink>
                  </li>
                  <li className="nav-item dropdown no-arrow item-logout">
                    <p onClick={logoutHandler}>
                      <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                      Logout
                    </p>
                  </li>
                </ul>
              </nav>

              <div className="container-fluid">
                <Switch>
                  <Route path={["/admin"]} component={Dashboard} exact />
                  <Route
                    path={"/admin/create-new"}
                    component={CreatePost}
                    exact
                  />
                  <Route
                    path={"/admin/edit-post/:id"}
                    component={CreatePost}
                    exact
                  />
                  <Route path={"/admin/posts"} component={ListPost} exact />
                  <Route
                    path={"/admin/post-comments"}
                    component={ListComment}
                    exact
                  />
                  <Route
                    path={"/admin/contacts"}
                    component={ListContact}
                    exact
                  />
                </Switch>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </AuthContextProvider>
  );
};

export default AdminContent;
