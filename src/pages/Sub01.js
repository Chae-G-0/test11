import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Subpage.scss";
import Center from "./Center";
import Marketing from "./Marketing";
import Mice from "./Mice";
import Travel from "./Travel";

const BM = [
    {
        id: 1,
        title: "관광사업",
        des: "문화와 관광을 한 번에 즐길 수 있는 부산 대표 랜드마크\n 부산항이 넓게 내다보이며 360도 부산의 아름다운 전망을 볼 수 있는 용두산공원입니다.",
        tab: <Travel/>,
        link: "/Travel",
    },
    {
        id: 2,
        title: "마케팅",
        des: "부산 관광 홍보 및 활성화를 위해 해외 시장을 대상으로 다양한 마케팅을 추진하고 있습니다.",
        tab: <Marketing/>,
        link: "/Marketing",
    },
    {
        id: 3,
        title: "MICE",
        des: "MICE 유치 개최지원 국제회의를 부산에 유치·개최하는 학회, 단체, 협회, 기관 또는 법인을 지원합니다.",
        tab: <Mice/>,
        link: "/Mice",
    },
    {
        id: 4,
        title: "관광기업지원센터",
        des: "부산지역 '관광스타트업 육성'을 통한 관광창업활성화, 관광기업 지원을 통한\n '부산 관광 콘텐츠 및 관광상품 강화'와 '산관학 협력을 통한 관광시너지 배가'로 건강한 부산 '관광생태계를 조성'하는데 중점을 두고 있습니다.",
        tab: <Center/>,
        link: "/Center",
    },
];


const Sub01 = () => {
    const [IDX, setIDX] = useState(0);
    return (
        <section className="Subpage">
            <div className="Sh01"></div>
            <ul>
                {BM.map((bm, idx) => {
                    return (
                        <li
                            key={bm.id}
                            onClick={() => {
                                setIDX(idx);
                            }}
                            className={IDX === idx ? "on" : ""}>
                            {bm.title}
                        </li>
                    );
                })}
            </ul>
            <div className="tab">
                <div className="inner">
                    <h2>{BM[IDX].title}</h2>
                    <p>{BM[IDX].des}</p>
                </div>
                {BM[IDX].tab}
            </div>
        </section>
    );
};

export default Sub01;
