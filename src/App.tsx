import React from "react"
import HomePage from "./Pages/HomePage/index.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./Pages/LoginPage";
import './GlobalStyle/Global.scss'

function App() {

  return (
    <>
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
