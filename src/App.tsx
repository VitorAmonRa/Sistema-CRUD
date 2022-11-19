import React from "react"
import {HomePage} from "./Pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {LoginPage} from "./Pages/LoginPage";
import Global from "./GlobalStyle/Global";

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
