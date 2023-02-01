import "./App.css";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Footer from "./footer/Footer";
import MainPage from "./components/pages/main-page/MainPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<MainPage />} />
        <Route path="/:package" element={<div />} />
        <Route path="/search-result" element={<div />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
