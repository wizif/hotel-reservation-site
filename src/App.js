import "./App.css";
import Navbar from "./common/Navbar";
import Home from "./Component/Pages/Home";
import About from "./Component/About/About";
import Gallery from "./Component/gallery/Gallery";
// import Destinations from "./Component/Destinations/Destinations";

import SinglePage from "./SinglePage/SinglePage";
import Blog from "./Component/Blog/Blog";
import BlogSingle from "./Component/Blog/blog-single-page/BlogSingle";
import Testimonial from "./Component/Testimonial/Testimonial";
import Contact from "./Component/Contact/Contact";
import Footer from "./common/Footer/Footer";
import Login from "./Component/login/Login";
import Register from "./Component/login/Register";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DestinationHome from "./Component/HomeSection/Destina/DestinationHome";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Gallery />} />
        <Route path="/destinationhome" element={<DestinationHome />} />
          <Route path='/singlepage/:id' element={<SinglePage />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blogsingle/:id' element={<BlogSingle />} />
          <Route path='/testimonial' element={<Testimonial />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/sign-in' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
