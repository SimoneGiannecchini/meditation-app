import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Meditation from "./pages/Meditation";
import About from "./pages/About";
import { TimerProvider } from "./context/TimerContext";
import Navbar from "./components/Navbar";
import './styles.scss';

function App() {
  return (
    <TimerProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meditation" element={<Meditation />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </TimerProvider>
  );
}

export default App;
