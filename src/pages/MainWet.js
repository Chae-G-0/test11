import React, { useEffect, useState } from "react";
import "../css/MainWet.scss";

//  TMP 1시간 기온 ℃
// 	WSD	풍속	m/s	10
// 	SKY	하늘상태	코드값	4
//	POP	강수확률	%	8

const MainWet = ({ wet }) => {
    const date = new Date().toLocaleDateString("en-GB").split("/").reverse().join("-");

    const nwet = wet?.filter((it) => it.category == "SKY" || it.category == "TMP" || it.category == "POP" || it.category == "WSD");

    // categoty
    const TMP = nwet[0].category.replace("TMP", "현재 기온");
    const WSD = nwet[1].category.replace("WSD", "풍속");
    const SKY = nwet[2].category.replace("SKY", "하늘 상태");
    const POP = nwet[3].category.replace("POP", "강수확률");

    // fcstValue replace를 이용해도 "맑음" 문자는 나오지만 그 이후의 "구름많음", "흐림" 문자는 원 상태 그대로의 코드값이 노출되기 때문에 밑의 방법으로 바꿔주었다.
    // const SKYValue = nwet[2].fcstValue.replace("1", "맑음" || "3", "구름 많음" || "4", "흐림");

    // SKYValue에 객체로 하늘상태 코드값을 key, 바꿀 문자를 value에 담고 SKYValue[nwet[2].fcstValue] fcstValue는 1, 3, 4 중에 하나가 나오므로 코드값에 해당하는 value인 문자가 출력된다.
    const SKYValue = {
        1: "맑음",
        3: "구름 많음",
        4: "흐림"
    }

    const [on, setOn] = useState(false);
    useEffect(() => {
        const scrollEvent = () => {
            let sct = window.scrollY;
            sct > 1100 ? setOn(true) : setOn(false);
            // console.log(sct);
        };
        window.addEventListener("scroll", scrollEvent);
        return () => {
            window.removeEventListener("scroll", scrollEvent);
        };
    }, []);

    return (
        <section className={`MainWet csc ${on ? "on" : ""}`}>
            <div className="inner">
                <div className="mwet">
                    <h3>오늘 부산의 날씨</h3>
                    <span>{date}</span>
                    {console.log(nwet)}
                    <div className="wbox">
                        <div className="category">
                            <ul>
                                <li>{TMP}</li>
                                <li>
                                    <span>{nwet[0].fcstValue}</span> ℃
                                </li>
                            </ul>
                            <ul>
                                <li>{WSD}</li>
                                <li>
                                    <span>{nwet[1].fcstValue}</span> m/s
                                </li>
                            </ul>
                            <ul>
                                <li>{SKY}</li>
                                <li>
                                    <span>{SKYValue[nwet[2].fcstValue]}</span>
                                </li>
                            </ul>
                            <ul>
                                <li>{POP}</li>
                                <li>
                                    <span>{nwet[3].fcstValue}</span> %
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainWet;
