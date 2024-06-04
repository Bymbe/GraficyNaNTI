import React, {useState} from "react";
import Logo from "../Assets/Logo.svg";
import Koszyk from "../Assets/Koszyk.svg";
import Konto from "../Assets/Konto.svg";
import Oczko from "../Assets/Oczko2.svg"
import { Link } from "react-router-dom"
import Popup from 'reactjs-popup';
import {doc, getDoc} from "firebase/firestore";
import {db} from "../DataBase/init-firebase";

function Navbar(props) {

    const [Login, setLogin] = useState('');
    const [Password, setPassword] = useState("");
    const [Zalogowano, setZalogowano] = useState(false);

    const Logowanie = async () => {
        if (Login.trim() === '' || Password.trim() === '') {
            alert('Nazwa kolekcji nie może być pusta.');
            return;
        }
        try{
            const DaneRef = doc(db, Login, "Dane");
            const dane = await getDoc(DaneRef);
            if(Password !== dane.data().Hasło){
                //console.log(dane.data().Hasło);
                alert('Błędne hasło')
            }
            else {
                alert('Logowanie powiodło się')
                setZalogowano(true);
                props.handleCallBackLogin(Login);
                props.handleCallBackZalogowo(Zalogowano);
            }
        }catch (error){
            console.error("Błąd przy logowaniu ", error);
            alert('Błąd przy logowaniu');
        }

    }


    return (
        <div className="navbar">
            <div className="navbar-left">
                <Link to="Home"><img className="Logo-navbar" src={Logo}/></Link>
                <div>
                    <Link to="Home"><h1 id="PawsomeProvisions-Navbar">Pawsome Provisions</h1></Link>
                </div>
            </div>

            <div className="navbar-middle">
                <li><Link to="ONas" className="Link">O nas</Link></li>
                <li><Link to="Opinie" className="Link">Opinie</Link></li>
                <li><Link to="Karmy" className="Link">Karmy</Link></li>
                <li><Link to="Pomoc" className="Link">Pomoc</Link></li>
            </div>
            <div className="navbar-right">
                {Zalogowano ? (<Link to="Konto"><img className="Navbar-icons" src={Konto}/></Link>) : (
                    <Popup trigger={<img className="Navbar-icons" src={Konto} />} position="bottom center">
                        <div className="navbar-popup">
                            <h1>Logowanie</h1>
                            <div className="navbar-popup-logowanie">
                                <textarea rows="1" type="text" value={Login} placeholder="Login"
                                          onChange={(e) => setLogin(e.target.value)}/>
                                <textarea rows="1" type="text" value={Password} placeholder="Hasło"
                                          onChange={(e) => setPassword(e.target.value)}/>
                                <button onClick={Logowanie}>Zaloguj</button>
                            </div>
                            <div className="navbar-popup-rejestracja">
                                <div></div>
                                <h2>Zarejestruj się <Link to="Register" id="Popup-Register-Link">tutaj</Link> </h2>
                            </div>
                        </div>
                    </Popup>
                )
                };
                <Link to="Koszyk"><img className="Navbar-icons" src={Koszyk}/></Link>

                <Popup trigger={<img className="Navbar-icons" src={Oczko} />} position="bottom center">
                    <div className="navbar-popup2">
                        <h1>Ustawienia dostępności</h1>
                        <div>
                            <button2 onClick={highContrast}>Większy kontrast</button2>
                        </div>
                        <div>
                            <button2 onClick={biggerFont}>Większy rozmiar tekstu</button2>
                        </div>


                    </div>
                </Popup>

            </div>
        </div>
    )
}

var isHighContrast = false;
var isBiggerTextSize = false;
function highContrast() {
    console.log("zmiana kontrastu");

    const root = document.documentElement;
    if (isHighContrast === false) {
        isHighContrast = true;
        root.style.setProperty('--textcolor', "#000000");
        root.style.setProperty('--footertextcolor', "#000000");
        root.style.setProperty('--bgcolor', "#F0F00F");
        root.style.setProperty('--registerbgcolor1', "#F0F00F");
        root.style.setProperty('--registerbgcolor2', "#F0F00F");
        root.style.setProperty('--registertextcolor', "#000000");

        //root.style.setProperty('--registertextcolor', "#000000");
        //root.style.setProperty('--registertextcolor', "#000000");
        //root.style.setProperty('--registertextcolor', "#000000");
    } else {
        isHighContrast = false;
        root.style.setProperty('--textcolor', "#F6F1CB");
        root.style.setProperty('--footertextcolor', "#5E3A1F");
        root.style.setProperty('--bgcolor', "null");
        root.style.setProperty('--registerbgcolor1', "#5E3A1F");
        root.style.setProperty('--registerbgcolor2', "#F6F1CB");
        root.style.setProperty('--registertextcolor', "#5E3A1F");

        //root.style.setProperty('--registertextcolor', "#000000");
        //root.style.setProperty('--registertextcolor', "#000000");
        //root.style.setProperty('--registertextcolor', "#000000");
    }
};

function biggerFont() {
    console.log("zmiana wielkosci czcionki");

    const root = document.documentElement;
    if(isBiggerTextSize === false) {
        isBiggerTextSize = true;
        root.style.setProperty('--additionaltextsize', "5px");
    } else {
        isBiggerTextSize = false;
        root.style.setProperty('--additionaltextsize', "0px");
    }
};

export default Navbar;