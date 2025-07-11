import "./App.css"
import Navbar from "./common/Navbar"
import Home from "./Component/Pages/Home"
import About from "./Component/About/About"
import Gallery from "./Component/gallery/Gallery"
//import Destinations from "./Components/Destinations/Destinations"
//import DHome from "./Components/Destinations/Home"
import Destinations from "./Component/Destinations/Destinations"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SinglePage from "./SinglePage/SinglePage"

/*-------------blog------------ */
import Blog from "./Component/Blog/Blog"
import BlogSingle from "./Component/Blog/blog-single-page/BlogSingle"
import Testimonial from "./Component/Testimonial/Testimonial"
import Contact from "./Component/Contact/Contact"
// import Footer from "./common/f"
import Login from "./Component/login/Login"
import Register from "./Component/login/Register"
/*-------------blog------------ */

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/gallery' exact component={Gallery} />
          <Route path='/destinations' exact component={Destinations} />
          <Route path='/singlepage/:id' component={SinglePage} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/blogsingle/:id' component={BlogSingle} />
          <Route path='/testimonial' component={Testimonial} />
          <Route path='/contact' component={Contact} />
          <Route path='/sign-in' component={Login} />
          <Route path='/Register' component={Register} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App