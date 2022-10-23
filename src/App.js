import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Header";
import "./css/App.css";
import Main from "./pages/Main";
import Sub01 from "./pages/Sub01";
import Sub02 from "./pages/Sub02";
import Sub03 from "./pages/Sub03";
import Sub04 from "./pages/Sub04";

function App() {
    const [weather, setWeather] = useState("");

    // 기상청 단기예보 API를 받아오기 위해서는 basedate에 원하는 날짜를 yyyymmdd(20221021) 와 같이 8자리 숫자로 빈칸이나 특수기호 없이 입력해주어야 한다. 오늘 날짜를 알 수 있는 toLocaleDateString에 특수기호를 없애고 date에 할당해 url에 넣어 단기예보를 받을 수 있게 했다. 
    const date = new Date().toLocaleDateString("en-GB").split("/").reverse().join("");

    useEffect(() => {
        const url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=ywRlJa7ppqDu3r%2BZgaoE4hxgKL03rb%2FZH6YKSCyaOqRJZa%2B7MMiFJBXuSswp2Hph6Go86ji9%2BmET3T%2BKutJnFg%3D%3D&numOfRows=10&pageNo=1&base_date=${date}&base_time=0500&nx=35&ny=129&dataType=JSON`;
        axios.get(url).then((res) => setWeather(res.data.response.body.items.item));
    }, []);

    return (
        <>
            {weather ? (
                <>
                    <Header />
                    <Routes>
                        {console.log(weather)}
                        <Route path="/" element={<Main weather={weather} />} />
                        <Route path="/Sub01/*" element={<Sub01 />} />
                        <Route path="/Sub02" element={<Sub02 />} />
                        <Route path="/Sub03" element={<Sub03 />} />
                        <Route path="/Sub04" element={<Sub04 />} />
                    </Routes>
                    <Footer />
                </>
            ) : (
                <div>로딩중</div>
            )}
        </>
    );
}

export default App;
