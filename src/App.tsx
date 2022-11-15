import React from "react"
import Global from './GlobalStyle/Global';
import HomePage from "./Pages/HomePage/index.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./Pages/LoginPage";

function App() {

  return (
    <>
      <Global/>
      <Router>
        <Routes>
          <Route path="/" element={ <HomePage/> }/>
          <Route path="login" element={ <LoginPage/> }/>
        </Routes>
      </Router>
    </>
  )
}

export default App
