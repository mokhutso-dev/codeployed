import React, { useState } from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import {nav} from '../../data/Data'
import logo from '../../images/logo.png'
import apply from '../../images/apply.png'

import { FaTimes, FaBars } from 'react-icons/fa';

const Header = () => {
  const [navlist, setnavlist] = useState(false)

  return (
    <>
      <header>
        <div className="container flex">
            <div className="logo">
              <img src={logo} alt="" />
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

            <div className="apply">
              <Link to="/apply"><img src={apply} alt="" /></Link>
            </div>

            <div className="toggle">
              <button onClick={() => setnavlist(!navlist)}>
                {navlist ? <FaTimes /> : <FaBars /> }
              </button>
            </div>
        </div>
      </header>
    </>
    
  )
}

export default Header