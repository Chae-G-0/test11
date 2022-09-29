import React from "react";
import { Link } from "react-router-dom";
import "../css/MainBuss.scss";

const BUSS = [
    { id: 1, des: "관광사업", src: "/assets/images/mainCon01.JPG", link: "/Sub01" },
    { id: 2, des: "MICE사업", src: "/assets/images/mainCon02.JPG", link: "/Sub01" },
    { id: 3, des: "부산관광기업지원센터", src: "/assets/images/mainCon03.JPG", link: "/Sub01" },
    { id: 4, des: "마케팅사업", src: "/assets/images/mainCon04.JPG", link: "/Sub01" },
];

const MainBuss = () => {
    return (
        <section className="MainBuss csc">
            <div className="inner">
                <div className="left">
                    <h2>주요 사업</h2>
                    <p>부산관광공사는 지역의 역사, 문화, 예술 그리고 도시 전체를 활용한 지속가능관광의 기반을 만들겠습니다.</p>
                </div>
                <div className="right">
                    {BUSS.map((bs, idx) => {
                        return (
                            <figure key={bs.id}>
                                <Link to={bs.link}>
                                    <img src={process.env.PUBLIC_URL + bs.src} alt="" />
                                </Link>
                                <div className="des">{bs.des}</div>
                            </figure>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default MainBuss;
