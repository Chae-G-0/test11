import React from 'react'
import MainNav from './MainNav'

const Header = () => {
  return (
    <header className='Header'>
        <div className="inner">
            <h1>
                <a href="/">
                    <img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="" />
                </a>
            </h1>
            <nav className='gnb'>
                <MainNav/>
            </nav>
        </div>
    </header>
  )
}

export default Header