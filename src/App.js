import { Route, Router, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Header";
import "./css/App.css";
import Main from "./pages/Main";
import Sub01 from "./pages/Sub01";
import Sub02 from "./pages/Sub02";
import Sub03 from "./pages/Sub03";

function App() {
    return (
        <>
            <Header />
              <Routes>
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
