import React from "react";
import "../css/Mice.scss";
const MICE = [
    { id: 1, src: "/assets/images/mice01.jpg", des: "세계 최초 2회 연속 ‘국제안전도시’ 공인" },
    { id: 2, src: "/assets/images/mice02.jpg", des: "부산을 대표하는 MICE 전문시설 벡스코" },
    { id: 3, src: "/assets/images/mice03.jpg", des: "국내 최초 스마트시티, 에코델타시티 개발" },
];

const Mice = () => {
    return (
        <div className="Mice">
            <div className="inner">
                {MICE.map((mc) => {
                    return (
                        <figure key={mc.id}>
                            <img src={process.env.PUBLIC_URL + mc.src} alt="" />
                            <div className="des">{mc.des}</div>
                        </figure>
                    );
                })}
            </div>
        </div>
    );
};

export default Mice;
