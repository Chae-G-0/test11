import React from "react";
import "../css/Marketing.scss";

const Marketing = () => {
    return (
        <div className="Marketing">
            <div className="inner">
                <div className="left">
                    <img src={process.env.PUBLIC_URL + "/assets/images/Marketing.jpg"} alt="" />
                </div>
                <div className="right">
                    <h3>부산 관광 홍보 및 활성화 활동</h3>
                    <ul className="Mlist">
                        <li >해외마케팅</li>
                        <li>팸트립 지원</li>
                        <li>관광 콘텐츠 개발</li>
                        <li>통합 홍보 마케팅</li>
                        <li>인센티브 지원</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Marketing;
