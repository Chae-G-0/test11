import React from "react";
import "../css/Subpage.scss";
import "../css/Sub04.scss";

const Sub04 = () => {
    return (
        <section className="Subpage">
            <div className="Sh04"></div>
            <div className="inner sh">
                <h2>비전 및 경영목표</h2>
                <p>부산의 관광가치를 창조하는 글로벌 플랫폼 공기업</p>
                <div className="value">
                    <h3>핵심가치</h3>
                    <ul>
                        <li>전문</li>
                        <li>가치창출</li>
                        <li>상생</li>
                        <li>소통</li>
                    </ul>
                </div>
                <table className="sub04Table">
                    <thead>
                        <tr>
                            <th className="tdtit">전략목표</th>
                            <th>전문성 기반 관광사업 선진운영</th>
                            <th>미래성장동력 구축기반 마련</th>
                            <th>지역사회에 활력을 주는 사회적가치 창출</th>
                            <th>지속가능 경영체계 구축</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowspan="3" className="tdtit">전략과제</td>
                            <td>트렌드 반영 관광자원 및 콘텐츠 확보</td>
                            <td>신성장사업 발굴기반 확보</td>
                            <td>지역상생을 통한 균형발전 선도</td>
                            <td>효율적인 기관운영을 통한 재무구조 개선</td>
                        </tr>
                        <tr>
                            <td>국제관광도시 브랜드 마케팅 강화</td>
                            <td>데이터 수집·분석·활용기능 확대</td>
                            <td>공공기관 사회적책임 적극 이행</td>
                            <td>직무 중심의 인사운영체계 도입</td>
                        </tr>
                        <tr>
                            <td>MICE 및 축제진흥을 통한 관광생태계 구축</td>
                            <td>적극적 기업지원으로 관광산업 회복 견인</td>
                            <td>코로나 대응 안전한 환경 조성</td>
                            <td>상생·협력의 조직문화 구현</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Sub04;
