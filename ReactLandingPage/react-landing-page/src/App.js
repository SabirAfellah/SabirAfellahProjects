
import './App.css';
import{ BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Linkshortener from './components/Linkshortener';
import Footer from './components/Footer';



function App() {
  return (
   
    <div>  
     <Navbar/>
     <Hero />
     <Linkshortener />
     <Footer />

    </div>
  );
}

export default App;
