import React from "react";
import "../css/Travel.scss";

const Travel = () => {
    return (
        <div className="Travel">
            <div className="inner">
                <div className="left">
                    <img src={process.env.PUBLIC_URL + "/assets/images/travel.jpg"} alt="" />
                </div>
                <div className="right">
                    <h3>용두산공원의 환상적인 전망</h3>
                    <p>부산 타워전망대를 방문하면 부산항대교를 비롯해 부산 시내와 영도를 감상할 수 있습니다. 용두산공원에서 산책하고 쇼핑의 메카인 광복로 거리를 경험해보세요.</p>
                    <table>
                        <tbody>
                            <tr>
                                <th>주소</th>
                                <td>부산 중구 용두산길 37-55</td>
                            </tr>
                            <tr>
                                <th>전화번호</th>
                                <td>051-601-1800</td>
                            </tr>
                            <tr>
                                <th>이용 시간</th>
                                <td>10:00-22:00</td>
                            </tr>
                            <tr>
                                <th>매표마감</th>
                                <td>영업종료 30분 전</td>
                            </tr>
                            <tr>
                                <th>대중교통</th>
                                <td>1호선(남포역) 7번 출구</td>
                            </tr>
                            <tr>
                                <th>건립 연도</th>
                                <td>1973년 10월 11일</td>
                            </tr>
                            <tr>
                                <th>전망대 높이</th>
                                <td>120 m</td>
                            </tr>
                            <tr>
                                <th>규모</th>
                                <td>4,283㎡</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Travel;
