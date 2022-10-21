import React, { useEffect, useState } from "react";
import MainNav from "./MainNav";
import "../css/Header.scss";
import { Link } from "react-router-dom";

const Header = () => {

    const [on, setOn] = useState(false);

    // 스크롤을 내리면 header의 background가 변하는 효과를 위해 scroll값을 구하고 그 값이 0 이상일 때 on을 붙여주는 기능
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
                    <Link to="/">
                        <img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="" />
                    </Link>
                </h1>
                <nav className="gnb">
                    <MainNav />
                </nav>
            </div>
        </header>
    );
};

export default Header;
