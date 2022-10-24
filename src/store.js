import { configureStore, createSlice } from "@reduxjs/toolkit";
import Center from "./pages/Center";
import Marketing from "./pages/Marketing";
import Mice from "./pages/Mice";
import Travel from "./pages/Travel";

const MainContent = createSlice({
    name: "content",
    initialState: [
        {
            id: 1,
            tit: "부산시티투어버스",
            des: "부티와함께 떠나는 부산 자유여행 부산시티투어버스와 함께 부산의 명소를 다니는 3가지 노선을 이용할 수 있습니다. 운행시간은 기상 및 교통사정에 따라서 변경될 수 있습니다.",
            scr: "/assets/images/tour01.png",
        },
        {
            id: 2,
            tit: "태종대유원지",
            des: "영도 해안을 따라 약 9.1km의 최남단에 위치한 부산 대표아이콘 태종대 태종대 곳곳을 다 누비며 절경을 감상한다는 뜻의 순우리말 '다누비' 순환열차를 타고 떠나는 천혜의 절경을 감상해보세요.",
            scr: "/assets/images/tour02.png",
        },
        {
            id: 3,
            tit: "황령산 전망쉼터",
            des: "부산전역이 파노라마로 펼쳐지는 부산 대표 야경명소 부산 전역을 내려다 볼 수 있는 경관 감상의 최적지 황령산 전망쉼터에서 커피한잔의 여유를 즐기며 부산의 절경을 감상해보세요.",
            scr: "/assets/images/tour03.jpg",
        },
        {
            id: 4,
            tit: "낙동강 생태탐방선",
            des: "자연과 함께하는 낙동강 에코투어!낙동강의 푸르른 자연환경을 맘껏 누리고 낙동강 지역 특유의 전통문화를 생태해설사와 함께 즐겨보세요.",
            scr: "/assets/images/tour04.jpg",
        },
    ],
});

const MainBuss = createSlice({
    name: "BUSS",
    initialState: [
        { id: 1, des: "세계 최초 2회 연속 \n'국제 안전 도시' 공인", span: "* 2019년 국제안전도시 공인센터(ISCCC)", src: "/assets/images/mice01.jpg", link: "/Sub01" },
        { id: 2, des: "국내 최초 스마트시티, \n에코델타시티 개발", span: "* 2018년 국토부 선정", src: "/assets/images/mice03.jpg", link: "/Sub01" },
        { id: 3, des: "부산을 대표하는 \nMICE 전문시설 벡스코", span: "* 2018 대한민국 안전대상 우수기업부문", src: "/assets/images/mice02.jpg", link: "/Sub01" },
    ],
});

const Fslide = createSlice({
    name: "Fslide",
    initialState: [
        { id: 1, src: "/assets/images/fSlide01.gif", link: "#!" },
        { id: 2, src: "/assets/images/fSlide02.gif", link: "#!" },
        { id: 3, src: "/assets/images/fSlide03.gif", link: "#!" },
        { id: 4, src: "/assets/images/fSlide04.gif", link: "#!" },
        { id: 5, src: "/assets/images/fSlide05.gif", link: "#!" },
        { id: 6, src: "/assets/images/fSlide06.gif", link: "#!" },
        { id: 7, src: "/assets/images/fSlide07.gif", link: "#!" },
        { id: 8, src: "/assets/images/fSlide08.gif", link: "#!" },
        { id: 9, src: "/assets/images/fSlide09.gif", link: "#!" },
        { id: 10, src: "/assets/images/fSlide10.gif", link: "#!" },
        { id: 11, src: "/assets/images/fSlide11.gif", link: "#!" },
        { id: 12, src: "/assets/images/fSlide12.gif", link: "#!" },
        { id: 13, src: "/assets/images/fSlide13.gif", link: "#!" },
        { id: 14, src: "/assets/images/fSlide14.gif", link: "#!" },
        { id: 15, src: "/assets/images/fSlide15.gif", link: "#!" },
        { id: 16, src: "/assets/images/fSlide16.gif", link: "#!" },
        { id: 17, src: "/assets/images/fSlide17.gif", link: "#!" },
    ],
});

const MICE = createSlice({
    name: "MICE",
    initialState: [
        { id: 1, src: "/assets/images/mice01.jpg", des: "세계 최초 2회 연속 ‘국제안전도시’ 공인" },
        { id: 2, src: "/assets/images/mice02.jpg", des: "부산을 대표하는 MICE 전문시설 벡스코" },
        { id: 3, src: "/assets/images/mice03.jpg", des: "국내 최초 스마트시티, 에코델타시티 개발" },
    ],
});

const NOTICE = createSlice({
    name: "NOTICE",
    initialState: [
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
    ],
});

const BM = createSlice({
    name: "BM",
    initialState: [
        {
            id: 1,
            title: "관광사업",
            des: "문화와 관광을 한 번에 즐길 수 있는 부산 대표 랜드마크\n 부산항이 넓게 내다보이며 360도 부산의 아름다운 전망을 볼 수 있는 용두산공원입니다.",
            tab: <Travel />,
            link: "/Travel",
        },
        {
            id: 2,
            title: "마케팅",
            des: "부산 관광 홍보 및 활성화를 위해 해외 시장을 대상으로 다양한 마케팅을 추진하고 있습니다.",
            tab: <Marketing />,
            link: "/Marketing",
        },
        {
            id: 3,
            title: "MICE",
            des: "MICE 유치 개최지원 국제회의를 부산에 유치·개최하는 학회, 단체, 협회, 기관 또는 법인을 지원합니다.",
            tab: <Mice />,
            link: "/Mice",
        },
        {
            id: 4,
            title: "관광기업지원센터",
            des: "부산지역 '관광스타트업 육성'을 통한 관광창업활성화, 관광기업 지원을 통한\n '부산 관광 콘텐츠 및 관광상품 강화'와 '산관학 협력을 통한 관광시너지 배가'로 건강한 부산 '관광생태계를 조성'하는데 중점을 두고 있습니다.",
            tab: <Center />,
            link: "/Center",
        },
    ],
});

const SLIDE = createSlice({
    name: "SLIDE",
    initialState: [
        { id: 1, des: "광안대교", dot: "" },
        { id: 2, des: "오륙도", dot: "" },
        { id: 3, des: "해운대 마린시티", dot: "" },
        { id: 4, des: "감천문화마을", dot: "" },
        { id: 5, des: "다대포", dot: "" },
    ],
});

const TRAFFIC = createSlice({
    name: "TRAFFIC",
    initialState: [
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
    ],
});

const WEATHER = createSlice({
    name: "WEATHER",
    initialState: [
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
    ],
});

const FLINK = createSlice({
    name: "FLINK",
    initialState: [
        { id: 0, name: "Family Link", link: "/" },
        { id: 1, name: "부산시티투어", link: "http://citytourbusan.com/ko/00main/main.php" },
        { id: 2, name: "부산컨벤션뷰로", link: "https://bto.or.kr/cvb/Main.do" },
        { id: 3, name: "VISIT BUSAN", link: "https://www.visitbusan.net/kr/index.do" },
    ],
});

const test = createSlice({
    name: "chae",
    initialState: "test",
});

export default configureStore({
    reducer: {
        test: test.reducer,
        MainContent: MainContent.reducer,
        MainBuss: MainBuss.reducer,
        Fslide: Fslide.reducer,
        MICE: MICE.reducer,
        NOTICE: NOTICE.reducer,
        BM: BM.reducer,
        SLIDE: SLIDE.reducer,
        FLINK: FLINK.reducer,
        TRAFFIC: TRAFFIC.reducer,
        WEATHER: WEATHER.reducer,
    },
});
