import React, { useEffect, useState } from "react";
import "../css/MainWeat.scss";

//  TMP 1시간 기온 ℃
// 	WSD	풍속	m/s	10
// 	SKY	하늘상태	코드값	4
//	POP	강수확률	%	8

const MainWet = ({ weather }) => {
    const date = new Date().toLocaleDateString("en-GB").split("/").reverse().join("-");


    // 기상청 단기예보 API에는 14가지의 다양한 기상 정보가 담겨있다. 그 중 필요한 정보만 보여주기 위해 filter를 이용해 4가지 정보만 걸러냈다.
    const nweat = weather?.filter((it) => it.category == "SKY" || it.category == "TMP" || it.category == "POP" || it.category == "WSD");

    // categoty 코드값을 사용자들이 직관적으로 알 수 있도록 replace로 문자열을 치환했다.
    const TMP = nweat[0].category.replace("TMP", "현재 기온");
    const WSD = nweat[1].category.replace("WSD", "풍속");
    const SKY = nweat[2].category.replace("SKY", "하늘 상태");
    const POP = nweat[3].category.replace("POP", "강수확률");

    // const SKYValue = nweat[2].fcstValue.replace("1", "맑음" || "3", "구름 많음" || "4", "흐림");
    
    // fcstValue replace를 이용해도 "맑음" 문자는 나오지만 그 이후의 "구름많음", "흐림" 문자는 원 상태 그대로의 코드값이 노출되기 때문에 밑의 방법으로 바꿔주었다.
    

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
        };
        window.addEventListener("scroll", scrollEvent);
        return () => {
            window.removeEventListener("scroll", scrollEvent);
        };
    }, []);

    return (
        <section className={`MainWeat csc ${on ? "on" : ""}`}>
            <div className="inner">
                <div className="mweat">
                    <h3>오늘 부산의 날씨</h3>
                    <span>{date}</span>
                    {console.log(nweat)}
                    <div className="wbox">
                        <div className="category">
                            <ul>
                                <li>{TMP}</li>
                                <li>
                                    <span>{nweat[0].fcstValue}</span> ℃
                                </li>
                            </ul>
                            <ul>
                                <li>{WSD}</li>
                                <li>
                                    <span>{nweat[1].fcstValue}</span> m/s
                                </li>
                            </ul>
                            <ul>
                                <li>{SKY}</li>
                                <li>
                                    <span>{SKYValue[nweat[2].fcstValue]}</span>
                                </li>
                            </ul>
                            <ul>
                                <li>{POP}</li>
                                <li>
                                    <span>{nweat[3].fcstValue}</span> %
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
