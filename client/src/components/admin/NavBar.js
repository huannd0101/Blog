import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <ul
        style={{ margin: "0" }}
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <NavLink
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/admin"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </NavLink>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
          <NavLink className="nav-link" to="/admin">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Trang chủ</span>
          </NavLink>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Bài viết</div>

        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/create-new">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Bài viết mới</span>
          </NavLink>
        </li>

        <div className="sidebar-heading">Bình luận</div>

        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/post-comments">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Tất cả bình luận</span>
          </NavLink>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Liên hệ</div>

        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/contacts">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Tất cả liên hệ</span>
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
