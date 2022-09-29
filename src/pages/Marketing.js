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

                    <ul className="Blist">
                        <li>
                            <span>다국어 SNS 채널 활용 온라인 홍보 강화</span>
                            뉴미디어 시대 인터넷 및 모바일 관광 정보 수요증가에 따라 다국어 SNS 채널 운영으로 고객소통 중심의 다양한 부산의 모습과 정보를 담은 콘텐츠를 지속적으로 홍보하고 있습니다.
                        </li>
                        <li>
                            <span>온·오프라인 연계를 통한 뉴미디어 마케팅 확대</span>
                            온라인 채널 홍보와 오프라인 관광 상품의 연계를 통한 관광객 중심의 관광환경을 만들어 가는데 주력하고 있습니다.
                        </li>
                        <li>
                            <span>관광지도 및 홍보물 제작·지원</span>
                            부산을 방문하는 관광객들에게 최신 부산 관광 정보를 제공하기 위해 관광지도 및 홍보물을 제작·배부하고 있습니다.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Marketing;
