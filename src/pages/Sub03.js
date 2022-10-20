import React from "react";
import "../css/Sub03.scss";

const NOTICE = [
    {
        id: 1,
        tit: "한눈에 보는 2022년 부산 관광정책",
        write: "부산관광공사",
        date: "2022-03-23",
        view: "1127",
    },
    {
        id: 2,
        tit: "사회적거리두기에 따른 사업장 운영시간 변경 안내(2022.4.4.~)",
        write: "부산관광공사",
        date: "2022-04-04",
        view: "232",
    },
    {
        id: 3,
        tit: "사회적거리두기에 따른 사업장 운영시간 변경 안내(2022.4.12.~) ",
        write: "관광사업팀",
        date: "2022-04-12",
        view: "226",
    },
    {
        id: 4,
        tit: "사회적거리두기에 따른 사업장 운영시간 변경 안내(2022.4.18.~)",
        write: "관광사업팀",
        date: "2022-03-23",
        view: "1127",
    },
    {
        id: 5,
        tit: "2022.6.6.(월) 현충일 정기휴무일 변경 안내",
        write: "부산관광공사",
        date: "2022-05-30",
        view: "210",
    },
    {
        id: 6,
        tit: "2022. 7. 5.(화) 홈페이지 서비스 일시 중지 안내",
        write: "부산관광공사",
        date: "2022-06-30",
        view: "171",
    },
    {
        id: 7,
        tit: "공공기관 고객만족도 조사 관련 개인정보 제3자 제공사항 알림",
        write: "ESG경영팀",
        date: "2022-07-01",
        view: "37",
    },
    {
        id: 8,
        tit: "보행자 우선도로 시행 알림(7.12.)",
        write: "ESG경영팀",
        date: "2022-07-25",
        view: "93",
    },
    {
        id: 9,
        tit: "2022년 을지연습 안내",
        write: "ESG경영팀",
        date: "2022-08-12",
        view: "166",
    },
    {
        id: 10,
        tit: "2022.9.9. ~ 9.12. 추석연휴기간 사업장 운영 시간 안내",
        write: "ESG경영팀",
        date: "2022-09-07",
        view: "119",
    },
];

const Rnotice = NOTICE.reverse()

const Sub03 = () => {
    return (
        <section className="Subpage">
            <div className="Sh03"></div>
            <div className="inner sh sub03">
                <h2>알림마당</h2>
                <table>
                    <tbody>
                        <tr>
                            <th className="num">번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>작성일자</th>
                            <th>조희수</th>
                        </tr>
                        {Rnotice.map((it, idx) => {
                            return (
                                <tr key={it.id}>
                                    <td>{it.id}</td>
                                    <td className="write">{it.tit}</td>
                                    <td>{it.write}</td>
                                    <td>{it.date}</td>
                                    <td>{it.view}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Sub03;
