import React, { useState, useContext } from 'react';
import './Components_css/Auth.css';
import { AuthContext } from '../context/auth-context';

function AuthPage() {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const auth = useContext(AuthContext);

  const switchModeHandler = () => {
    setIsLoginMode((prevMode) => !prevMode);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // Mock authentication
    if (username && password) {
      auth.login(username);
    }
  };

  return (
    <div className="authentication">
      <h2 className="authentication__header">
        {isLoginMode ? 'Login Required' : 'Sign Up'}
      </h2>
      <form onSubmit={formSubmitHandler}>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">
          {isLoginMode ? 'LOGIN' : 'SIGN UP'}
        </button>
      </form>
      <button onClick={switchModeHandler}>
        SWITCH TO {isLoginMode ? 'SIGN UP' : 'LOGIN'}
      </button>
    </div>
  );
}

export default AuthPage;
