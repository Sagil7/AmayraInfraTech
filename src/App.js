import logo from './logo.svg';
import {
  BrowserRouter,Routes,Route,Link,} from "react-router-dom";

import './App.css';

import Footer from './Components/Footer/Footer';
import Navbar from './Components/NavBar/Navbar';
import About from './Pages/About'
import Projectpage from './Pages/Projectpage';
import Contactpage from './Pages/Contactpage';
import Home from './Pages/Home'
import Testimonialpage from './Pages/Testimonialpage';

function App() {
  return (
    <>
    <Navbar/>
  

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projectpage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/Testimonial" element={<Testimonialpage />} />
      </Routes>
        <Footer/>

     
    </>
  );
}

export default App;
