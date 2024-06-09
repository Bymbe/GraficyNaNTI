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
import Kwiaciara from "./Pages/Kwiaciara";
import Pomoc from "./Pages/Pomoc";
import Register from "./Pages/Register";
import Kwestionariusz  from "./Pages/Kwestionariusz";
import AccessibilitySettings from "./Pages/accessibilitySettings"
import {useState} from "react";

function App() {
    const [Zalogowano, setZalogowano] = useState(false);
    const [Login, setLogin] = useState('');
    const [Karma, setKarma] = useState("");



    console.log(Karma)
  return (

    <div className="App">
      <Router>
        <Navbar Login={Login} Zalogowano={Zalogowano} handleCallBackZalogowo={setZalogowano} handleCallBackLogin={setLogin} />


        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Karmy" element={<Karmy Login={Login} handleCallBackKarma={setKarma}/>} />
            <Route path="/Konto" element={<Konto Login={Login} Zalogowano={Zalogowano} handleCallBackZalogowo={setZalogowano} handleCallBackLogin={setLogin} handleCallBackKarma={setKarma} /> } />
            <Route path="/Koszyk" element={<Koszyk Login={Login} Zalogowano={Zalogowano}/>} />
            <Route path="/Opinie" element={<Opinie />} />
            <Route path="/Pomoc" element={<Pomoc />} />
            <Route path="/ONas" element={<ONas />} />
            <Route path="/Kwiaciara" element={<Kwiaciara Karma={Karma}/>} />
            <Route path="/Kwestionariusz" element={<Kwestionariusz Zalogowano={Zalogowano} Login={Login} handleCallBackZalogowo={setZalogowano} handleCallBackLogin={setLogin} handleCallBackKarma={setKarma} />} />
            <Route path="/Register" element={<Register handleCallBackZalogowo={setZalogowano} handleCallBackLogin={setLogin}/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
