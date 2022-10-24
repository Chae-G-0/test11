import React from "react";
import "../css/Subpage.scss";
import "../css/Sub02.scss";
import { useSelector } from "react-redux";

const Sub02 = () => {
    const { TRAFFIC, WEATHER } = useSelector(state => state)
    return (
        <section className="Subpage">
            <div className="Sh02"></div>
            <div className="inner sh">
                <h2>부산여행정보</h2>
                <p>The Best Bleisure City, 부산으로의 방문을 환영합니다. 당신이 즐길 수 있는 최고의 마이스 도시, 부산으로의 여행을 준비해보세요.</p>
                <div className="box">
                    <div className="left">
                        <h3>부산 교통 정보</h3>
                        <ul>
                            {TRAFFIC.map((bus) => {
                                return (
                                    <li key={bus.id}>
                                        <span>{bus.taf}</span>
                                        {bus.des}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="right">
                        <h3>부산 날씨 정보</h3>
                        <ul>
                            {WEATHER.map((wea) => {
                                return (
                                    <li key={wea.id}>
                                        <span>{wea.taf}</span>
                                        {wea.des}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sub02;
