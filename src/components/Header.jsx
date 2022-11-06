import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './styles/Header.css'

export default function Header () {

    const linkStyle = (isActive) => {
        return isActive ? "navbar__link active" : "navbar__link"
    }

    const handleBurgerClick = () => {
        document.getElementById('headerBurger').classList.toggle('active')
        document.getElementById('headerMenu').classList.toggle('active')
        document.body.classList.toggle('lock')
    }

    return(
        <div className='header'>
            <div className='header__box container'>
                <div className='header__logo'>
                    <img className='header__logo-icon' 
                    src={require('../img/news-logo.png')} 
                    /> NEWSOID
                </div>
                <div className="header__burger" id="headerBurger" onClick={handleBurgerClick}>
                    <span></span>
                </div>
                <nav className='header__navbar' id="headerMenu">
                    <NavLink className={({isActive})=>linkStyle(isActive)} to='/posts'>Posts</NavLink>
                    <NavLink className={({isActive})=>linkStyle(isActive)} to='/sources'>Sources</NavLink>
                    <NavLink className={({isActive})=>linkStyle(isActive)} to='/about'>About</NavLink>
                </nav>
            </div>
        </div>
    )
}