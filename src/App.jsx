import React, { Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import { TimerProvider } from './context/TimerContext';
import Navbar from './components/Navbar';
import './styles.scss';

const Home = React.lazy(() => import('./pages/Home'));
const Meditation = React.lazy(() => import('./pages/Meditation'));
const About = React.lazy(() => import('./pages/About'));

function App() {
  return (
    <TimerProvider>
      <HashRouter>
        <Navbar />
        <Suspense fallback={<div>Loading in Progress...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/meditation" element={<Meditation />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </TimerProvider>
  );
}

export default App;
