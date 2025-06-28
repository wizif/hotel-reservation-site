import './App.css';
import Navbar from './common/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Pages/Home';
import About from './Component/About/About';
import Gallery from './Component/gallery/Gallery';
// import Destinations from './Component/Destinations/Destinations';
import DestinationHome from './Component/HomeSection/Destina/DestinationHome';
import SinglePage from './SinglePage/SinglePage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path='/destinations'  element={<DestinationHome/>} />
          <Route path='/singlepage/:id'  element={<SinglePage/>} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
