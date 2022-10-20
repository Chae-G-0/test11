import React from "react";
import "../css/Subpage.scss";
import "../css/Sub02.scss";

const TRAFFIC = [
    {
        id: 1,
        taf: "도시철도",
        des: "부산 도시철도는 1호선부터 4호선과 부산김해경전철, 동해선 등이 시내 주요 장소 및 부산광역시와 경상남도 김해시, 양산시와 연결되어 편리하게 원하는 장소로 이동할 수 있습니다. 오전 5시부터 23시 59분까지 운행되며, 역별로 첫차와 막차시간이 다르며, 시간대별로 배차시간이 다릅니다. 자세한 사항은 홈페이지 또는 역내에 게시된 시간표를 참고하시기 바랍니다.",
    },
    {
        id: 2,
        taf: "버스",
        des: "부산의 버스는 산이 많은 부산의 지형적 특성상 산지를 오르락내리락하는 노선이 많습니다. 오래된 마을의 좁은 길도 유유히 운전할 수 있는 베테랑 버스 기사님들이 안전하고 빠르게 목적지까지 갈 수 있게 해줍니다. 버스는 일반버스, 좌석버스 급행일반좌석버스, 급행좌석버스, 마을버스가 있습니다. 일반버스와(1~500번대)와 좌석버스(58-1,203,221 및 300번대),급행버스(일반좌석)1000번대, 급행버스(직행좌석)2000번대로 구분할 수 있습니다. 심야버스는 따로 없고 각 노선의 버스가 밤11시40분이 지나면 할증 요금이 붙습니다.",
    },
    {
        id: 3,
        taf: "공항리무진",
        des: "김해국제공항에서 해운대 신시가지를 연결하는 노선으로 동서고가로와 황령산 터널을 거쳐, 공항과 해운대를 빠르게 잇습니다. 김해공항에서 해운대해수욕장 까지 307번 노선과 같지만 리무진버스는 남천동, 광안동, 수영교차로를 경유해서 갑니다. 소요시간은 1시간 정도로 도시철도와 비슷하지만, 짐이 많아 환승이 번거로우면 공항리무진을 이용하는 것이 편리합니다.",
    },
    {
        id: 4,
        taf: "교통카드",
        des: "교통카드는 교통수단 탑승 및 이용을 위해 사용되는 전자화폐로 편의점 등 교통카드 결재가 지원되는 곳에서 현금과 동일하게 사용할 수 있습니다. 교통카드 구매 후 원하는 액수만큼 충전하여 사용하며, 사용 시 마다 금액이 차감되고, 교통수단 이용료 할인 및 환승 할인혜택을 받을 수 있습니다.교통카드로는 하나로카드를 정식으로 지원하며, 김해포유카드를 포함한 타 지역 마이비카드와 티머니, 캐시비, 후불교통카드로 환승 할인을 받을 수 있습니다. 교통카드 충전은 부산도시철도 역내 충전기, 동해선 광역전철 전 역사 그리고 편의점, 부산은행에서 충전이 가능합니다.",
    },
];

const WEATHER = [
    {
        id: 1,
        taf: "봄",
        des: "부산의 봄은 타지역보다 조금 일찍 시작합니다. 3월에서 5월까지 이어지는 봄에는 아침저녁으로는 서늘하고 낮에는 따뜻한 날씨입니다. 특히, 4월 초 아름답게 만개한 벚꽃은 부산의 자랑입니다. 삼락공원 낙동제방벚꽃길, , 해운대 달맞이길, 동래 온천천 모두 벚꽃 명소로 유명한 곳입니다. 따뜻하고 아름다운 부산을 즐겨보시기 바랍니다.",
    },
    {
        id: 2,
        taf: "여름",
        des: "6월부터 8월까지 이어지는 부산의 여름은 25~35°C 정도의 더운 날씨입니다. 6월 말부터 7월 말 사이에는 장마가 시작됩니다. 해운대, 송정, 광안리 바닷가에는 해수욕과 서핑을 즐기는 사람들로 북적이는 시즌입니다. 부산의 다채로운 해양 액티비티를 즐길 수 있는 최고의 시즌이라 할 수 있습니다.",
    },
    {
        id: 3,
        taf: "가을",
        des: "부산의 가을은 10~25°C 의 온도로 9월부터 11월까지 이어집니다. 샛노랗게 물든 단풍의 아름다움을 즐길 수 있는 계절입니다. 특히, 10월은 부산에서 1년 중 가장 화려한 달로 꼽힐만큼 많은 문화 예술 행사가 준비되어있습니다. 축제의 게절이라 불리우는 부산의 가을은 놓쳐서는 안 될 시즌입니다.",
    },
    {
        id: 4,
        taf: "겨울",
        des: "-10~10°C 로 매우 추운 겨울날씨입니다. 하지만 부산의 겨울은 다른 지역보다 다소 따뜻한 것으로 알려져 있습니다. 날씨가 살짝 풀릴 때쯤 부산을 방문하면 따뜻한 겨울을 느낄 수 있습니다. 겨울 부산의 매력을 느낄 수 있는 많은 장소에서 잊지못할 추억을 만들어보세요.",
    },
];

const Sub02 = ({ wet }) => {
    // const date = new Date().toLocaleDateString();

    //  TMP 1시간 기온 ℃
    // 	WSD	풍속	m/s	10
    // 	SKY	하늘상태	코드값	4
    //	POP	강수확률	%	8

    const date = new Date().toLocaleDateString("en-GB").split("/").reverse().join("-");

    const nwet = wet?.filter((it) => it.category == "SKY" || it.category == "TMP" || it.category == "POP" || it.category == "WSD");

    // categoty

    // const TMP = nwet[0].category.replace("TMP", "현재 기온");
    // const WSD = nwet[1].category.replace("WSD", "풍속");
    // const SKY = nwet[2].category.replace("SKY", "하늘 상태");
    // const POP = nwet[3].category.replace("POP", "강수확률");

    // fcstValue
    // const SKYValue = nwet[2].fcstValue.replace("1", "맑음" || "3", "구름 많음" || "4", "흐림");

    // console.log(TMP);
    // console.log(POP);
    // console.log(SKY);
    // console.log(WSD);

    return (
        <section className="Subpage">
            <div className="Sh02"></div>
            <div className="inner sh">
                <h2>부산여행정보</h2>
                <p>The Best Bleisure City, 부산으로의 방문을 환영합니다. 당신이 즐길 수 있는 최고의 마이스 도시, 부산으로의 여행을 준비해보세요.</p>
                {/* <div className="wet">
                    <h3>오늘 부산의 날씨</h3>
                    <span>{date}</span>
                    <div className="wbox">
                        {nwet &&
                            nwet.map((it, idx) => {
                                return (
                                    <ul key={idx}>
                                        <li>{it.category}</li>
                                        <li>{it.fcstValue}</li>
                                        {console.log(wet.category)}
                                    </ul>
                                );
                            })}
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
                </div> */}
                <div className="box">
                    <div className="left">
                        <h3>부산 교통 정보</h3>
                        <ul>
                            {TRAFFIC.map((bus) => {
                                return (
                                    <li key={bus.id}>
                                        <span>{bus.taf}</span>
                                        {bus.des}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="right">
                        <h3>부산 날씨 정보</h3>
                        <ul>
                            {WEATHER.map((wea) => {
                                return (
                                    <li key={wea.id}>
                                        <span>{wea.taf}</span>
                                        {wea.des}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sub02;
