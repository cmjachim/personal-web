import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    
    <Router>
      <div className="App">

      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      <BackToTop/>

      <Footer/>
      </div>

    </Router>
  );
}

export default App;
