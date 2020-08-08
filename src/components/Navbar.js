import React from 'react'
import {Start} from './Start'
import logo from '../logo.png'

export const Navbar = () =>(
  <nav className="navbar">
    <div className="logo">
      <img src={logo} alt="Doubles" />
      Doubles
    </div>
    <Start />
  </nav>
)
