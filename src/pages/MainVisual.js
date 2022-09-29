import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "../css/MainVisual.scss";

const SLIDE = [
    { id: 1, des: "광안대교", dot: "" },
    { id: 2, des: "오륙도", dot: "" },
    { id: 3, des: "해운대 마린시티", dot: "" },
    { id: 4, des: "감천문화마을", dot: "" },
    { id: 5, des: "다대포", dot: "" },
];

const MainVisual = () => {
    const [IDX, setIDX] = useState();
    useEffect(() => {
        setIDX(0);
    }, []);
    const mainSlide = useRef(null);
    const setting = {
        arrows: false,
        autoplay: 1,
        pauseOnFocus: false,
        pauseOnHover: false,
        afterChange: (idx) => setIDX(idx),
    };
    return (
        <section className="MainVisual">
            <Slider {...setting} ref={mainSlide}>
                {SLIDE.map((sl, idx) => {
                    return (
                        <figure key={sl.id} className={"item0" + sl.id + (idx === IDX ? " on" : "")}>
                            <div className="inner">
                                <strong>{sl.des}</strong>
                            </div>
                        </figure>
                    );
                })}
            </Slider>
            <div className="slogan">
                <div className="inner">
                    <span>WORLD EXPO 2030 BUSAN KOREA</span>
                    <p>2030 부산월드엑스포 유치를 기원합니다</p>
                </div>
            </div>
            <div className="slideT">
                {SLIDE.map((dots, idx) => {
                    return <li key={dots.id} className={idx === IDX ? " on" : ""} onClick={() => mainSlide.current.slickGoTo(idx)}></li>;
                })}
            </div>
        </section>
    );
};

export default MainVisual;
