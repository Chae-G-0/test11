import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../css/MainBuss.scss";

const MainBuss = () => {
    const { MainBuss } = useSelector(state => state);
    const [on, setOn] = useState(false);
    useEffect(() => {
        const scrollEvent = () => {
            let sct = window.scrollY;
            sct > 700 ? setOn(true) : setOn(false);
        };
        window.addEventListener("scroll", scrollEvent);
        return () => {
            window.removeEventListener("scroll", scrollEvent);
        };
    }, []);

    return (
        <section className={`MainBuss csc ${on ? "on" : ""}`}>
            <div className="inner">
                <h2>주요 사업</h2>
                <p>부산관광공사는 지역의 역사, 문화, 예술 그리고 도시 전체를 활용한 지속가능관광의 기반을 만들겠습니다.</p>
                <div className="right">
                    {MainBuss.map((bs) => {
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
