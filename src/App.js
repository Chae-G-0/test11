import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Header";
import "./css/App.css";
import Main from "./pages/Main";
import Sub01 from "./pages/Sub01";
import Sub02 from "./pages/Sub02";
import Sub03 from "./pages/Sub03";

function App() {
    const [wet, setWet] = useState();

    useEffect(() => {
        const url =
            "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=ywRlJa7ppqDu3r%2BZgaoE4hxgKL03rb%2FZH6YKSCyaOqRJZa%2B7MMiFJBXuSswp2Hph6Go86ji9%2BmET3T%2BKutJnFg%3D%3D&numOfRows=10&pageNo=1&base_date=20220930&base_time=0500&nx=55&ny=127&dataType=JSON";
        const getWeather = async () => {
            const res = await axios.get(url).then((res) => setWet(res));
            const wdata = res.data.map((it) => {
                return {
                    date: it.baseDate,
                    cate: it.category,
                };
            });

            // console.log(res.data);
            // console.log(wdata);
        };
        getWeather();
    }, []);
    return (
        <>
            <Header />
            <Routes>
                {console.log(wet)}
                <Route path="/" element={<Main />} />
                <Route path="/Sub01" element={<Sub01 />} />
                <Route path="/Sub02" element={<Sub02 />} />
                <Route path="/Sub03" element={<Sub03 />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
