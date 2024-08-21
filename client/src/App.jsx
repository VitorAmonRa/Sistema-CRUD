import React from "react"
import { AdminPage } from "./Pages/AdminPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {LoginPage} from "./Pages/LoginPage";
import Global from "./GlobalStyle/Global";
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from 'react-toastify'
import { Private } from "./Routes/Private";
import PreviewPage from "./Pages/PreviewPage";
import PreviewSpreaderPage from "./Pages/PreviewSpreaderPage";

function App() {

  return (
    <>
    <Global/>
    <ToastContainer autoClose={200} limit={20} />
      <Router>
        <Routes>
          <Route path="PreviewSpreaderPage" element={ <PreviewSpreaderPage/> }/>
          <Route path="PreviewPage" element={ <PreviewPage/> }/>
          <Route path="login" element={ <LoginPage/> }/>
          <Route path="/" element={ 
            <Private>  
              <AdminPage/>  
            </Private>
          }/>
        </Routes>
      </Router>
    </>
  )
}

export default App
