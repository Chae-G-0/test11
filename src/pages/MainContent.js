import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "../css/MainContent.scss";

const CONTENT = [
    {
        id: 1,
        tit: "부산시티투어버스",
        des: "부티와함께 떠나는 부산 자유여행 부산시티투어버스와 함께 부산의 명소를 다니는 3가지 노선을 이용할 수 있습니다. 운행시간은 기상 및 교통사정에 따라서 변경될 수 있습니다.",
        scr: "/assets/images/tour01.png",
    },
    {
        id: 2,
        tit: "태종대유원지",
        des: "영도 해안을 따라 약 9.1km의 최남단에 위치한 부산 대표아이콘 태종대 태종대 곳곳을 다 누비며 절경을 감상한다는 뜻의 순우리말 '다누비' 순환열차를 타고 떠나는 천혜의 절경을 감상해보세요.",
        scr: "/assets/images/tour02.png",
    },
    {
        id: 3,
        tit: "황령산 전망쉼터",
        des: "부산전역이 파노라마로 펼쳐지는 부산 대표 야경명소 부산 전역을 내려다 볼 수 있는 경관 감상의 최적지 황령산 전망쉼터에서 커피한잔의 여유를 즐기며 부산의 절경을 감상해보세요.",
        scr: "/assets/images/tour03.jpg",
    },
    {
        id: 4,
        tit: "낙동강 생태탐방선",
        des: "자연과 함께하는 낙동강 에코투어!낙동강의 푸르른 자연환경을 맘껏 누리고 낙동강 지역 특유의 전통문화를 생태해설사와 함께 즐겨보세요.",
        scr: "/assets/images/tour04.jpg",
    },
];

const MainContent = () => {
    const [slideNum, setSlideNum] = useState(0);
    const SLIDE = useRef(null);

    return (
        <section className="MainContent csc">
            <h2>관광사업</h2>
            <p>부산의 다양한 관광사업에 관하여 알려드립니다.</p>
            <div className="inner">
                <Slider autoplay={false} arrows={false} afterChange={(index) => setSlideNum(index)} ref={SLIDE} className={"content_slide"}>
                    {CONTENT.map((img, idx) => {
                        return (
                            <figure key={img.id} className={slideNum === "idx" ? "on" : ""}>
                                <img src={process.env.PUBLIC_URL + img.scr} alt="" />
                            </figure>
                        );
                    })}
                </Slider>
                <div className="txtBox">
                    <div className="txt">
                        <div className="tit">{CONTENT[slideNum].tit}</div>
                        <p>{CONTENT[slideNum].des}</p>
                    </div>
                    <div className="num">
                        <span>0{slideNum + 1}</span> / 0{CONTENT.length}
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
