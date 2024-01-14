import React, { useState } from 'react'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import './navbar.css'

function NavBar() {

    const [menuOption, setMenuOption] = useState<string>("shop")

  return (
    <nav className="navbar">
        <div>
            <img src={logo} alt="" />
        </div>
        <ul className="navbar_menu">
            <li onClick={() => setMenuOption('shop')}>Shop{menuOption === 'shop' ? <hr/> : <></>}</li>
            <li onClick={() => setMenuOption('men')}>Men{menuOption === 'men' ? <hr/> : <></>}</li>
            <li onClick={() => setMenuOption('women')}>Women{menuOption === 'women' ? <hr/> : <></>}</li>
            <li onClick={() => setMenuOption('kids')}>Kids{menuOption === 'kids' ? <hr/> : <></>}</li>
        </ul>
        <div className='navbar_login-cart'>
            <button>Login</button>
            <img src={cart_icon} alt=""/>
            <div className="navbar_cart-count">0</div>
        </div>
    </nav>
  );
}

export default NavBar;
