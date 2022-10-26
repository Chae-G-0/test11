# 부산관광공사 홈페이지

## react, SPA, scss, react-slick, react-router-dom, react-redux, redux-toolkit

---

### 프로젝트 설명 및 기능 소개

* 부산관광공사 홈페이지를 리디자인한 SPA(Single Page Application) 웹사이트 입니다.
* react hook과 react-redux로 상태 관리를 했습니다.
* 메인페이지와 서브페이지로 구성되어 있으며, header의 메뉴를 클릭해 서브페이지로 이동할 수 있습니다.
* 기상정보를 안내하기 위해 공공데이터 기상청 단기예보 API를 받아 화면에 나타냈습니다.

#### 공공데이터 기상청 단기예보 API를 활용한 오늘의 날씨 보여주기

1. 기상청 API는 원하는 날짜를 url에 basedate로 입력해주어야 하기 때문에 <br/>
그날그날 변하는 날짜 값을 date에 할당하고 url에 넣어줬습니다.

```
const date = new Date().toLocaleDateString("en-GB").split("/").reverse().join("");
```

2. API를 받으려면 인증키 역시 입력해야 하지만 그대로 노출시키지 않기 위해 env파일에 인증키를 넣어 숨겨줬습니다.

```
    useEffect(() => {
        const url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=REACT_APP_API_KEY&numOfRows=10&pageNo=1&base_date=${date}&base_time=0500&nx=35&ny=129&dataType=JSON`;
        axios.get(url).then((res) => setWeather(res.data.response.body.items.item));
    }, []);
```

<img src="/public/assets/images/API.png">

3. 사용자들이 직관적으로 알아볼 수 있도록 원본 코드값을 filter, replace를 이용해 가공했습니다.

```
const nweat = weather?.filter((it) => it.category == "SKY" || it.category == "TMP" || it.category == "POP" || it.category == "WSD");
```
```
const TMP = nweat[0].category.replace("TMP", "현재 기온");
const WSD = nweat[1].category.replace("WSD", "풍속");
const SKY = nweat[2].category.replace("SKY", "하늘 상태");
const POP = nweat[3].category.replace("POP", "강수확률");
```

---

### 외부 리소스 & 라이브러리 및 플러그인

-   부산관광공사 홈페이지 소스(사진, 정보)
-   react-router-dom
-   react icon
-   react-fast-marquee
-   react slick
-   react redux
-   react redux toolkit
-   공공데이터 기상청 단기예보 API

---

포트폴리오용으로 제작된 웹사이트 입니다.
