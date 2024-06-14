import './App.css';
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
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
import Historia  from "./Pages/Historia";
import Regulamin from "./Pages/Regulamin"
import DodajKarmy from "./Pages/DodajKarmy"
import KarmyAdmina from "./Pages/KarmyAdmina"
import Zamowienia from "./Pages/Zamowienia"
import AccessibilitySettings from "./Pages/accessibilitySettings"
import {useEffect, useState} from "react";
import {collection, deleteDoc, doc, getDocs} from "firebase/firestore";
import {db} from "./DataBase/init-firebase";

function App() {
    const [Zalogowano, setZalogowano] = useState(false);
    const [Login, setLogin] = useState('TempUser');
    const [Karma, setKarma] = useState("");
    const [PupilDoZmiany, setPupilDoZmiany] = useState("");
    const [Cookies, setCookies] = useState(true);
    const [WTrakcieKwestionariusza, setWTrakcieKwestionariusza] = useState(false);

    const handlePupilDoZmiany = (data) => {
        setPupilDoZmiany(data);
        console.log(data);
    }

    const cleanTemp = async () => {
        try{
            const TempRef = await doc(db, 'TempUser', "Temp");
            await deleteDoc(TempRef);

            const koszykSnapshot = await getDocs(collection(db, 'TempUser', 'Dane', 'Koszyk'));
            const koszykDocs = koszykSnapshot.docs;

            koszykDocs.forEach((document, index) => {

                const KarmaRef = doc(db, 'TempUser', 'Dane','Koszyk', document.id);
                deleteDoc(KarmaRef);

            });

            console.log("Wyczyszczono Temp")
        }catch(err){
            console.log(err)
        }

    }

    useEffect(() => {
        cleanTemp()
    }, [Login]);


  return (

    <div className="App">
      <Router>
        <Navbar Login={Login} Zalogowano={Zalogowano} handleCallBackZalogowo={setZalogowano} handleCallBackLogin={setLogin} />


        <Routes>
            <Route path="/" element={<Navigate to="/Home" replace={true} />} />
            <Route path="/Home" element={<Home Cookies={Cookies} handleCallBackCookies={setCookies} />} />
            <Route path="/Karmy" element={<Karmy Login={Login} handleCallBackKarma={setKarma}/>} />
            <Route path="/Konto" element={<Konto Login={Login} Zalogowano={Zalogowano} handleCallBackPupilDoZmiany={handlePupilDoZmiany} handleCallBackZalogowo={setZalogowano} handleCallBackLogin={setLogin} handleCallBackKarma={setKarma} /> } />
            <Route path="/Koszyk" element={<Koszyk Login={Login} Zalogowano={Zalogowano}/>} />
            <Route path="/Opinie" element={<Opinie />} />
            <Route path="/Pomoc" element={<Pomoc />} />
            <Route path="/DodajKarmy" element={<DodajKarmy />} />
            <Route path="/KarmyAdmina" element={<KarmyAdmina />} />
            <Route path="/Zamowienia" element={<Zamowienia />} />
            <Route path="/ONas" element={<ONas />} />
            <Route path="/Historia" element={<Historia Login={Login}/>} />
            <Route path="/Kwiaciara" element={<Kwiaciara Karma={Karma}/>} />
            <Route path="/Kwestionariusz" element={<Kwestionariusz Zalogowano={Zalogowano} PupilDoZmiany={PupilDoZmiany} Login={Login} handleCallBackZalogowo={setZalogowano} handleCallBackLogin={setLogin} handleCallBackKarma={setKarma} WTrakcieKwestionariusza={WTrakcieKwestionariusza} handleCallBackWTrakcie={setWTrakcieKwestionariusza}/>} />
            <Route path="/Register" element={<Register handleCallBackZalogowo={setZalogowano} handleCallBackLogin={setLogin}/>} />
            <Route path="/Regulamin" element={<Regulamin />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
