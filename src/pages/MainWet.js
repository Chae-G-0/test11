import React from "react";
import "../css/MainWet.scss";

const MainWet = ({ wet }) => {
    const date = new Date().toLocaleDateString("en-GB").split("/").reverse().join("-");

    const nwet = wet?.filter((it) => it.category == "SKY" || it.category == "TMP" || it.category == "POP" || it.category == "WSD");

    const TMP = nwet[0].category.replace("TMP", "현재 기온");
    const WSD = nwet[1].category.replace("WSD", "풍속");
    const SKY = nwet[2].category.replace("SKY", "하늘 상태");
    const POP = nwet[3].category.replace("POP", "강수확률");

    const SKYValue = nwet[2].fcstValue.replace("1", "맑음" || "3", "구름 많음" || "4", "흐림");

    return (
        <section className="MainWet csc">
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
                                    <span>{SKYValue}</span>
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
