import React from 'react';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Register from './pages/register';
import Login from './pages/login';
import Home from './pages/home';
import Search from './pages/search';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='' element={<Login/>}></Route>
        <Route path='register' element={<Register/>}></Route>
        <Route path='home' element={<Home/>}></Route>
        <Route path='search' element={<Search/>}></Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
