import "./App.css";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Footer from "./footer/Footer";
import MainPage from "./components/pages/main-page/MainPage";
import DetailPage from "./components/pages/detail-page/DetailPage";
import SearchResultPage from "./components/pages/search-result-page/SearchResultPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<MainPage />} />
        <Route path="/search/:keyword" element={<SearchResultPage />} />
        <Route path="/:package" element={<DetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
