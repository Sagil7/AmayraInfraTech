import logo from './logo.svg';

import './App.css';
import Coverimage from './Components/Coverimage/Coverimage';
import Aboutus from './Components/Aboutus/Aboutus';
import Projectcard from './Components/Cards/ProjectCard/Projectcard';
import Ourproject from './Components/OurProjects/Ourproject';
import Footer from './Components/Footer/Footer';
import Testimonial from './Components/Cards/Testimonial/Testimonial';
import Counter from './Components/Cards/Countercard/Counter';

function App() {
  return (
    <>
    <Coverimage/>
    <Aboutus/>
    <Ourproject/>
    <Testimonial/>
    <Counter/>
    <Footer/>
     
    </>
  );
}

export default App;
