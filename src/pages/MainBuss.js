import React from "react";
import { Link } from "react-router-dom";
import "../css/MainBuss.scss";

const BUSS = [
    { id: 1, des: "세계 최초 2회 연속 '국제 안전 도시' 공인", span: "* 2019년 국제안전도시 공인센터(ISCCC)", src: "/assets/images/mice01.jpg", link: "/Sub01" },
    { id: 2, des: "국내 최초 스마트시티, 에코델타시티 개발", span: "* 2018년 국토부 선정", src: "/assets/images/mice03.jpg", link: "/Sub01" },
    { id: 3, des: "부산을 대표하는 MICE 전문시설 벡스코", span: "* 2018 대한민국 안전대상 우수기업부문", src: "/assets/images/mice02.jpg", link: "/Sub01" },
];

const MainBuss = () => {
    return (
        <section className="MainBuss csc">
            <div className="inner">
                <h2>주요 사업</h2>
                <p>부산관광공사는 지역의 역사, 문화, 예술 그리고 도시 전체를 활용한 지속가능관광의 기반을 만들겠습니다.</p>
                <div className="right">
                    {BUSS.map((bs) => {
                        return (
                            <figure key={bs.id}>
                                <img src={process.env.PUBLIC_URL + bs.src} alt="" />
                                <div className="des">
                                    {bs.des}
                                    <span>{bs.span}</span> 
                                </div>
                            </figure>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default MainBuss;
