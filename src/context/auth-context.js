import React, { useState, useCallback } from 'react';

export const AuthContext = React.createContext({
  isLoggedIn: false,
  username: null,
  login: (username) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);

  const login = useCallback((username) => {
    setIsLoggedIn(true);
    setUsername(username);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUsername(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, username, login, logout }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
