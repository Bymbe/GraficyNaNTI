import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import ONas from "./Pages/ONas";
import Karmy from "./Pages/Karmy";
import Konto from "./Pages/Konto";
import Koszyk from "./Pages/Koszyk";
import Opinie from "./Pages/Opinie";
import Pomoc from "./Pages/Pomoc";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Karmy" element={<Karmy />} />
            <Route path="/Konto" element={<Konto />} />
            <Route path="/Koszyk" element={<Koszyk />} />
            <Route path="/Opinie" element={<Opinie />} />
            <Route path="/Pomoc" element={<Pomoc />} />
            <Route path="/ONas" element={<ONas />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
