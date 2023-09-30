// eslint-disable-next-line
import Landing from './components/LandingPage/LandingPage';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import Footer from './components/Footer/Footer';
import About from './components/About/About';




export default function App() {
  return (
    <BrowserRouter>
    <div className="App">
   <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/detail:id" element={<Detail />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/About" element={<About />} />
    </Routes>

    </div>
    </BrowserRouter>
  );
}