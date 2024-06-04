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
import Register from "./Pages/Register";
import Kwestionariusz  from "./Pages/Kwestionariusz";
import AccessibilitySettings from "./Pages/accessibilitySettings"
import {useState} from "react";

function App() {
    const [Zalogowano, setZalogowano] = useState(false);
    const [Login, setLogin] = useState('');

    function CallBackZalogowano (data){
        setZalogowano(data);
    }

    function CallBackLogin (data){
        setLogin(data);
    }


  return (
    <div className="App">
      <Router>
        <Navbar Login={Login} Zalogowano={Zalogowano} handleCallBackZalogowo={CallBackZalogowano} handleCallBackLogin={CallBackLogin} />


        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Karmy" element={<Karmy />} />
            <Route path="/Konto" element={<Konto Login={Login} handleCallBackZalogowo={CallBackZalogowano} handleCallBackLogin={CallBackLogin}/> } />
            <Route path="/Koszyk" element={<Koszyk />} />
            <Route path="/Opinie" element={<Opinie />} />
            <Route path="/Pomoc" element={<Pomoc />} />
            <Route path="/ONas" element={<ONas />} />
            <Route path="/Kwestionariusz" element={<Kwestionariusz />} />
            <Route path="/Register" element={<Register handleCallBackZalogowo={CallBackZalogowano} handleCallBackLogin={CallBackLogin}/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
