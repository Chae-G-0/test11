import React from "react";
import { useSelector } from "react-redux";
import "../css/Sub03.scss";

const Sub03 = () => {
    const { NOTICE } = useSelector((state) => state);

    // 바로 NOTICE.reverse() 하면 원본 배열이 훼손된다는 에러가 발생하므로 스프레드로 뿌렸다.
    const Rnotice = [...NOTICE].reverse();
    return (
        <section className="Subpage">
            <div className="Sh03"></div>
            <div className="inner sh sub03">
                <h2>공지사항</h2>
                {console.log(Rnotice)}
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
