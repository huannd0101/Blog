import React, { useRef, useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { Constants } from "../constants/Constants";
import authService from "../services/auth/auth.service";
import storageService from "../services/storage.service";

const Login = () => {
  let refUsername = useRef();
  let refPassword = useRef();
  const [sucssess, setSuccess] = useState(false);
  const onLoginHandler = (e) => {
    e.preventDefault();
    authService
      .login(refUsername.current.value, refPassword.current.value)
      .then((data) => {
        storageService.set(Constants.loggedIn, true);
        // Constants.userInfo
        storageService.setObject(Constants.userInfo, data);
        storageService.set(Constants.accessToken, data.jwt);
        setSuccess(true);
      })
      .catch((data) => {
        alert("Lỗi đăng nhập!");
      });
    console.log("object");
  };

  if (sucssess) {
    return <Redirect from="/login" to={"/admin"} exact />;
  }

  return (
    <div className="bg-gradient-primary" style={{ height: "100vh" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Chào mừng!</h1>
                      </div>
                      <form className="user" onSubmit={onLoginHandler}>
                        <div className="form-group">
                          <input
                            ref={refUsername}
                            type="text"
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            placeholder="Nhập tài khoản"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            ref={refPassword}
                            type="password"
                            className="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Nhập mật khẩu"
                          />
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary btn-user btn-block"
                        >
                          Đăng nhập
                        </button>
                      </form>
                      <hr />
                      <div className="text-center">
                        <NavLink className="small" to={"/"}>
                          Quay về trang người dùng!
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
