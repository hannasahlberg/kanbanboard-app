import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BoardProvider } from "./context/BoardContext";
import BoardPage from "./pages/BoardPage";
import ColumnPage from "./pages/ColumnPage";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200">
        <Routes>
          <Route path="/" element={<BoardPage />} />
          <Route path="/column/:id" element={<ColumnPage />} />
        </Routes>
        </div>

  );
}