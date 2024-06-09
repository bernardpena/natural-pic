import { Route, Routes } from "react-router-dom";
import { PhotoProvider } from "./contexts/PhotoContext";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";

import Favorites from './views/Favorites';
import Home from './views/Home';
import NotPage from './views/NotPage';

import './App.css';

export default function App() {
  return (
    <PhotoProvider>
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/favoritos"
              element={<Favorites />}
            />
            <Route
              path="*" element={<NotPage />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </PhotoProvider>
  );
}

