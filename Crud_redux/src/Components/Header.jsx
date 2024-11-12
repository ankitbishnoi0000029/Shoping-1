import React from 'react'
import logo from '../assets/logo.svg'
import './header.css'
import Cart from './cart'
function Header() {
  return (
  
  <header>
    <div className='row d-flex main-header'>
      <div className="col-5">
        <ul className='frist_ul m-0'>
          <li><img width={50} src={logo} alt="" /></li>
          <li>Electronics</li>
          <li>Tow Wheelers</li>
          <li>Grocery</li>
          <li>Fastion</li>
        </ul>
      </div>
      <div className="seacrh col-3">
        <input type="text" placeholder='Search Product.....' />
      </div>
      <div className='lastbox col-4'>
        <ul className='lastpart m-0'>
          <li>Login</li>
          <li><Cart></Cart></li>
          <li>Contect Us</li>
        </ul>
      </div>
    </div>
  </header>
  )
}

export default Header