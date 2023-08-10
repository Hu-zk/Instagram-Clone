import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import  { setAuthToken } from './services/api';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Register from './pages/register';
import Login from './pages/login';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      const decodedToken = jwt_decode(token);
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp < currentTime) {
        setAuthToken(null);
        localStorage.removeItem('jwtToken');
        setLoggedIn(false);
      } else {
        setAuthToken(token);
        setLoggedIn(true);
      }
    } else {
      setLoggedIn(false);
    }
  }, []);

  const handleLogin = async () => {
    // Implement your login logic here
    // Send a login request to your Laravel backend
    // If successful, save the JWT token to localStorage
    // Then setAuthToken(token) and setLoggedIn(true)
  };

  const handleLogout = () => {
    // Implement your logout logic here
    // Remove the JWT token from localStorage
    // Then setAuthToken(null) and setLoggedIn(false)
  };

    <div>
      {loggedIn ? (
        <>
          <h1>Welcome to Contact Manager</h1>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <h1>Login</h1>
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>

  return (
      <BrowserRouter>
      <Routes>
        <Route path='' element={<Login/>}></Route>
        <Route path='register' element={<Register/>}></Route>
        <Route path='display' element={<div/>}></Route>
        <Route path='form' element={<div/>}></Route>
        <Route path='map' element={<div/>}></Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
