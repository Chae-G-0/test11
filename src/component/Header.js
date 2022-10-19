import React, { useEffect, useState } from "react";
import MainNav from "./MainNav";
import "../css/Header.scss";
import { Link } from "react-router-dom";

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
                    <Link to="/">
                        <img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="" />
                    </Link>
                </h1>
                <nav className="gnb">
                    <MainNav />
                </nav>
                {/* <div className="hwet">
                    <ul>
                        <li>현재기온 11 ℃</li>
                        <li>풍속 3.2 m/s</li>
                        <li>하늘상태 맑음</li>
                        <li>강수확률 0%</li>
                    </ul>
                </div> */}
            </div>
        </header>
    );
};

export default Header;
