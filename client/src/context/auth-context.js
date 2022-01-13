import React, { useEffect, useState } from "react";
import { Constants } from "../constants/Constants";
import storageService from "../services/storage.service";
import authService from "../services/auth/auth.service";
import UserService from "../services/user-service";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (username, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (storageService.get(Constants.loggedIn)) {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    setIsLoggedIn(false);
    storageService.remove(Constants.accessToken);
    storageService.remove(Constants.userInfo);
    storageService.remove(Constants.loggedIn);
  };

  const loginHandler = (username, password) => {
    authService.login(username, password).then((data) => {
      setIsLoggedIn(true);
      storageService.set(Constants.accessToken, data.jwt);
      storageService.setObject(Constants.userInfo, data);
      storageService.set(Constants.loggedIn, true);

      UserService.getUserById(data.userId).then((data) => {
        storageService.setObject(Constants.curUser, data.result);
      });
    });
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
