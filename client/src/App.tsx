import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FollowersPage } from "./pages/FollowersPage/FollowersPage";
import { HomePage } from "./pages/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="followers" element={<FollowersPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
