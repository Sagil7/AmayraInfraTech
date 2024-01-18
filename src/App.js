import logo from './logo.svg';
import {
  BrowserRouter,Routes,Route,Link,} from "react-router-dom";

import './App.css';
import Coverimage from './Components/Coverimage/Coverimage';
import Aboutus from './Components/Aboutus/Aboutus';
import Projectcard from './Components/Cards/ProjectCard/Projectcard';
import Ourproject from './Components/OurProjects/Ourproject';
import Footer from './Components/Footer/Footer';
import Testimonial from './Components/Cards/Testimonial/Testimonial';
import Counter from './Components/Cards/Countercard/Counter';
import Navbar from './Components/NavBar/Navbar';
import Howitwork from './Components/Howitwork/Howitwork';
import About from './Pages/About'
import Projectpage from './Pages/Projectpage';
import Contactpage from './Pages/Contactpage';
import Home from './Pages/Home'

function App() {
  return (
    <>
    <Navbar/>
  

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projectpage />} />
        <Route path="/contact" element={<Contactpage />} />
      </Routes>
        <Footer/>

     
    </>
  );
}

export default App;
