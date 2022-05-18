import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"

const Header = () => {
  return (
    <header className='header mb-5'>
        <div>
            <Link to='/' className='logo'>Shop</Link>
        </div>
        <div className='header-links'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/signup'>Signup</Link>
                </li>
                <li>
                    <Link to='/cart' className='cart'>
                        <i className='fas fa-shopping-cart'></i>
                    </Link>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header