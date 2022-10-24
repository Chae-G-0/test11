import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "../css/MainContent.scss";

const MainContent = () => {
    const [slideNum, setSlideNum] = useState(0);
    const SLIDE = useRef(null);
    const { MainContent } = useSelector((state) => state);

    return (
        <section className="MainContent csc">
            <h2>관광사업</h2>
            <p>부산의 다양한 관광사업에 관하여 알려드립니다.</p>
            <div className="inner">
                <Slider autoplay={false} arrows={false} afterChange={(index) => setSlideNum(index)} ref={SLIDE} className={"content_slide"}>
                    {MainContent.map((img) => {
                        return (
                            <figure key={img.id} className={slideNum === "idx" ? "on" : ""}>
                                <img src={process.env.PUBLIC_URL + img.scr} alt="" />
                            </figure>
                        );
                    })}
                </Slider>
                <div className="txtBox">
                    <div className="txt">
                        <div className="tit">{MainContent[slideNum].tit}</div>
                        <p>{MainContent[slideNum].des}</p>
                    </div>
                    <div className="num">
                        <span>0{slideNum + 1}</span> / 0{MainContent.length}
                    </div>
                </div>
                <div className="arrows">
                    <i className="xi-angle-left" onClick={() => SLIDE.current.slickPrev()}></i>
                    <i className="xi-angle-right" onClick={() => SLIDE.current.slickNext()}></i>
                </div>
            </div>
        </section>
    );
};

export default MainContent;
