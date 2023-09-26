// eslint-disable-next-line
import Landing from './LandingPage/LandingPage';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home/Home';
import Detail from './Detail/Detail';
import Footer from './Footer/Footer';




export default function App() {
  return (
    <BrowserRouter>
    <div className="App">
   <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/detail:id" element={<Detail />} />
      <Route path="/footer" element={<Footer />} />
    </Routes>

    </div>
    </BrowserRouter>
  );
}