import './App.css';
import Footer from './components/Footer';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import Testimonials from './components/testimonials';
import Work from './components/work';
function App() {
  return (
    <div className="App">
     <Home/>
     <About/>
     <Work/>
     <Testimonials/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
