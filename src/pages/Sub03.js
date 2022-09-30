import React from "react";
import "../css/Sub03.scss";

const Sub03 = () => {
    return (
        <section className="Subpage">
            <div className="Sh03"></div>
            <div className="inner sh">
                <h2>알림마당</h2>
                <table>
                    <caption>
                        공지사항
                    </caption>
                    <tbody>
                        <tr>
                            <th>제목</th>
                            <td>작성일자</td>
                        </tr>
                        <tr>
                            <th>등록된 게시물이 없습니다.</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Sub03;
