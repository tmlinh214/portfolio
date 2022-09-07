/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function Header() {
  return (
    <header>
        <nav class='nav'>
            <ul class = 'nav--list'>
                <li className='nav--item'><a href="#home" className='nav--link'>Home</a></li>
                <li className='nav--item'><a href="#about" className='nav--link'>About me</a></li>
                <li className='nav--item'><a href="#projects" className='nav--link'>My projects</a></li>
                <li className='nav--item'><a href="#contact" className='nav--link'>Contact</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header