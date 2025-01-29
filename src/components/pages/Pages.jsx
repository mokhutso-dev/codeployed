import React from 'react'
import { BrowserRouter as Router , Routes, Route} from "react-router-dom";

import Header from "../common/header/Header"
import Footer from "../common/footer/Footer"
import Home from "../home/Home"

function Pages() {
  return (
    <>
    <Router>
      <Header/>
        <Routes>
          <Route exact path='/' Component={Home} />
          {/* <Route exact path='/about' Component={Home} /> */}
        </Routes>
      <Apply/>  
      <Footer/>
    </Router>
    </>
  )
}

export default Pages