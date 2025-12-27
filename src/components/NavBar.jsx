import React from 'react'
import style from './NavBar.module.css'
const NavBar = () => {
  return (
    <nav className={style.NavBarContainer}>
        <div className={style.navItem}>
            <img src="/home-nav.svg" alt="logo" />
            <p>Home</p>
        </div>
         <div className={style.navItem}>
            <img src="/ai-nav.svg" alt="logo" />
            <p>Ai Optimise</p>
        </div>
         <div className={style.navItem}>
            <img src="/reward-nav.svg" alt="logo" />
            <p>Reward</p>
        </div>
    </nav>
  )
}

export default NavBar