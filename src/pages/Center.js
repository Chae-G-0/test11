import React from "react";
import "../css/Center.scss";

const Center = () => {
    return (
        <div className="Center">
            <div className="inner">
                <div className="left">
                    <h3>추진배경 및 필요성</h3>
                    <ul>
                        <li>
                            <span>성장하는 도시</span>
                            관광사업체 전국 4위, 매출액 전국 5위, 관광사업체 종사자 수 전국 5위(2017년)
                        </li>
                        <li>
                            <span>지속 가능 성장</span>
                            최근 5년간 사업체 성장률 평균 15% 지속적 증가
                        </li>
                        <li>
                            <span>벤처보육 최적지</span>
                            관광벤처기업 19개로 지역에선 부산 최다 소재
                        </li>
                        <li>
                            <span>성공하는 창업</span>
                            전국 광역시 중 가장 활발한 창업과 스타트업 기업의 성공 잠재력 보유
                        </li>
                    </ul>
                </div>
                <div className="right">
                    <h3>시설안내</h3>
                    <ul>
                        <li>
                            <span>1F</span>
                            방문자센터 (안내데스크/일자리상담소/기업입주공간/여행업계 공유사무실)
                        </li>
                        <li>
                            <span>2F</span>
                            사무공간 (기업입주공간/센터운영사무실/커뮤니티라운지/소, 중회의실4개)
                        </li>
                        <li>
                            <span>3F</span>
                            인큐베이팅공간 (기업입주공간/대회의실/공유오피스)
                        </li>
                        <li>
                            <span>4F</span>
                            커뮤니티공간 (콘텐츠미디어실/야외문화공간)
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Center;
