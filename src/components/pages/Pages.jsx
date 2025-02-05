import React from 'react'
import { BrowserRouter as Router , Routes, Route} from "react-router-dom";

import Header from "../common/header/Header"
import Footer from "../common/footer/Footer"
import Apply from '../common/button/button'
import Contact from '../contact/Contact';

function Pages() {
  return (
    <>
    <Router>
      <Header/>
        <Routes>
          {/* <Route exact path='/' Component={Home} /> */}
          <Route exact path='/contact' Component={Contact} />
        </Routes>
      <Apply/>  
      <Footer/>
    </Router>
    </>
  )
}

export default Pages