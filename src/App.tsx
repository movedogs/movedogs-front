import "./App.css";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Footer from "./footer/Footer";
import MainPage from "./components/pages/main-page/MainPage";
import DetailPage from "./components/pages/detail-page/DetailPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<MainPage />} />
        <Route path="/search-result" element={<div />} />
        <Route path="/:package" element={<DetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
