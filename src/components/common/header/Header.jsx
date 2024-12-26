import React, { useState } from 'react'
import {Link} from "react-router-dom"

import "./header.css"
import {nav} from "../../data/Data"

function Header() {
  const [navlist, setnavlist] = useState(false)

  return (
    <>
      <header>
        <div className="container flex">
          <div className="logo">
            <img src="../../images/logo.png" alt="" />
          </div>
            <div className="nav">
              <ul className={navlist ? 'small' : 'flex'}>
                {nav.map((list, index) => (
                  <li key={index}>
                    <Link to={list.path}>{list.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="buttons">Apply</div>
            
            <div className="toggle">
              <button onClick={() => setnavlist(!navlist)}>
                {navlist ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
              </button>
            </div>
        </div>
      </header>
    </>
  )
}

export default Header