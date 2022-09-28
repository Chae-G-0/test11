import React, { useEffect, useState } from 'react'
import MainNav from './MainNav'
import '../css/Header.scss'

const Header = () => {
    const [on, setOn] = useState(false);
    useEffect(() => {
        const scrollEvent = () => {
            let sct = window.scrollY;
            sct > 0 ? setOn(true) : setOn(false);
        };
        window.addEventListener("scroll", scrollEvent);
        return () => {
            window.removeEventListener("scroll", scrollEvent);
        };
    }, []);
  return (
    <header className={`Header ${on ? "on" : ""}`}>
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