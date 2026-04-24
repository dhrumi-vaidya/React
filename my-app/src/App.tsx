import { Routes, Route } from 'react-router-dom';

import Navbar from './common/navbar/Navbar';
import Footer from './common/footer/Footer';
import Home from './pages/home/Home';
import About from './pages/About/About';

import './App.css';

function App() {
  return (
    <div className="app-layout">
      <Navbar />

      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;