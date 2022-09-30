import React from "react";
import "../css/Footer.scss";
import { FiFacebook, FiYoutube, FiTwitter, FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";
import FamilyLink from "./FamilyLink";

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="inner">
                <div className="ft">
                    <h2>
                        <Link to="/">
                            <img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="" />
                        </Link>
                    </h2>
                    <dl>
                        <dt>개인정보처리방침</dt>
                        <dd>찾아오시는 길</dd>
                        <dd>전자메일무단수집거부</dd>
                        <dd>
                            부산관광안내 <span>1330</span>
                        </dd>
                    </dl>

                    <div className="inpo">
                        <dl>
                            <dt>
                                <address>부산광역시 해운대구 센텀중앙로 79 센텀사이언스파크 18층, 별관 3층 (48058)</address>
                            </dt>
                            <dd>
                                <a href="#!">TEL : 051-780-2111</a>
                            </dd>
                            <dd>
                                <a href="#!">FAX : 051-780-2119</a>
                            </dd>
                            <dd>COPYRIGHT 2019 부산관광공사. ALL RIGHTS RESERVED.</dd>
                        </dl>
                    </div>
                    <div className="sns">
                        <ul>
                            <li>
                                <a href="#!">
                                    <FiFacebook />
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <FiTwitter />
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <FiInstagram />
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <FiYoutube />
                                </a>
                            </li>
                        </ul>
                    </div>
                <div className="FamilyLink">
                    <FamilyLink />
                </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
