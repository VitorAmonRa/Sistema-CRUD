import React from "react"
import {HomePage} from "./Pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {LoginPage} from "./Pages/LoginPage";
import Global from "./GlobalStyle/Global";
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from 'react-toastify'
import { Private } from "./Routes/Private";
import InterfacePage from "./Pages/InterfacePage";

function App() {

  return (
    <>
    <Global/>
    <ToastContainer autoClose={1500}/>
      <Router>
        <Routes>
          <Route path="login" element={ <LoginPage/> }/>
          <Route path="InterfacePage" element={ <InterfacePage/> }/>
          <Route path="/" element={ 
          <Private>  
            <HomePage/>  
          </Private>
        }/>
        </Routes>
      </Router>
    </>
  )
}

export default App
