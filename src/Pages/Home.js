import React, {useState} from 'react'
import Pies from "../Assets/piesek.png";
import Kot from "../Assets/kotek.png";
import Karma from "../Assets/karma.png";
import politykaPrywatnosci from "./politykaPrywatnosci.pdf";

import Logo from "../Assets/Logo-Footer.svg";
import Twitter from "../Assets/Twitter.svg";
import {Link} from "react-router-dom";


function Home(props) {

    const [Cookie, setCookie] = useState(true);

    const CookieFunction = async ()=> {
        setCookie(false);

        return;
    }

    return (

        <div className="Home">
            <br/><br/><br/><br/><br/><br/>
            {Cookie ? (
                <div className="Home-cookies">
                    <h1>Pliki cookie</h1>
                    <h2>
                        Używamy niezbędnych plików cookie, aby zapewnić prawidłowe działanie naszego
                        Systemu. Dodatkowo, my i nasi partnerzy możemy stosować opcjonalne pliki cookie
                        w celach takich jak analiza i targetowanie/reklama. Aby korzystać z opcjonalnych
                        plików cookie, wymagana jest Twoja zgoda, którą można udzielić, klikając
                        „Zaakceptuj”. Jeśli nie wyrażasz zgody na korzystanie z opcjonalnych
                        plików cookie, wystarczy kliknąć „Odrzuć”. Pamiętaj
                        , że zawsze masz możliwość wycofania udzielonej zgody, zmieniając odpowiednie
                        ustawienia. Korzystanie z plików cookie może wiązać się z przetwarzaniem Twoich
                        danych osobowych. W takich przypadkach Check Systems Sp. z o.o. jest
                        administratorem tych danych. Więcej informacji na ten temat znajdziesz w naszej
                        Polityce Prywatności.</h2>

                    <button onClick={CookieFunction}>Zaakceptuj</button>
                    <button onClick={CookieFunction}>Odrzuć</button>
                    <a href={politykaPrywatnosci} target="_blank">Polityka Prywatności</a>


                    <h1></h1>
                </div>
            ) : (<div style={{display: "none"}}></div>)}
            <div className="Home-Top">
                <br/><br/><br/><br/>

                <h1 id="HeaderMain-Home">Spersonalizowana karma dla Twojego pupila!</h1>
                <h3 id="Header-Home">Odpowiedz na kilka pytań na temat swojego pupila aby dostać propozycje dopasowanej
                    do jego potrzeb karmy </h3>
                <div>
                    <input type="text" id="PetNameInput-Home" placeholder="Wpisz imię Twojego pupila"/>
                </div>

                <div>
                    <Link to="/Kwestionariusz">
                        <button>Zaczynamy!</button>
                    </Link>
                </div>

                <img src={Pies}/>

            </div>

            <div className="Home-Middle">
                <div className="KarmyHeader-Home">
                    <h1 id="Karmy-Home">Karmy sezonowe</h1>
                </div>
                <br/>
                <div className="KarmyMain-Home">
                    <div className="KarmyBottom-Home">
                        {/*<button className="KarmyButtonsL-Home">&lt;</button>*/}
                        {/*<button className="KarmyButtonsR-Home">&gt;</button>*/}
                        {/*<div className="KarmyDekoracyjnieL-Home"></div>*/}
                        {/*<div className="KarmyDekoracyjnieR-Home"></div>*/}
                        <div className="KarmyDiv-Home">
                            <div className="KarmyBoxy-Home">
                                <h1 id="NazwaKarmy-Home">"Kwiaciara"</h1>
                                <img src={Karma}/>
                                <h2>Super dobra karma z płatków kwiatów</h2>
                                <Link to="/Karmy">
                                    <button className="KarmyButtons2-Home">Czytaj więcej</button>
                                </Link>
                                <button className="KarmyButtons3-Home">Dodaj do koszyka</button>
                            </div>
                            <div className="KarmyBoxy-Home">
                                <h1 id="NazwaKarmy-Home">"Wiosenna energia"</h1>
                                <img src={Karma}/>
                                <h2>Warzywny miks na dłuższe dni</h2>
                                <Link to="/Karmy">
                                    <button className="KarmyButtons2-Home">Czytaj więcej</button>
                                </Link>
                                <button className="KarmyButtons3-Home">Dodaj do koszyka</button>
                            </div>
                            <div className="KarmyBoxy-Home">
                                <h1 id="NazwaKarmy-Home">"Sezonowy owoc"</h1>
                                <img src={Karma}/>
                                <h2>Karma z kawałkami sezonowych truskawek</h2>
                                <Link to="/Karmy">
                                    <button className="KarmyButtons2-Home">Czytaj więcej</button>
                                </Link>
                                <button className="KarmyButtons3-Home">Dodaj do koszyka</button>
                            </div>
                        </div>
                        <div className="KarmyDiv-Home">
                            <div className="KarmyBoxy-Home">
                                <h1 id="NazwaKarmy-Home">"Na pyłki"</h1>
                                <img src={Karma}/>
                                <h2>Wzmacnia odporność w sezonie alergicznym</h2>
                                <Link to="/Karmy">
                                    <button className="KarmyButtons2-Home">Czytaj więcej</button>
                                </Link>
                                <button className="KarmyButtons3-Home">Dodaj do koszyka</button>
                            </div>
                            <div className="KarmyBoxy-Home">
                                <h1 id="NazwaKarmy-Home">"W słońcu"</h1>
                                <img src={Karma}/>
                                <h2>Na lśniącą sierść</h2>
                                <Link to="/Karmy">
                                    <button className="KarmyButtons2-Home">Czytaj więcej</button>
                                </Link>
                                <button className="KarmyButtons3-Home">Dodaj do koszyka</button>
                            </div>
                            <div className="KarmyBoxy-Home">
                                <h1 id="NazwaKarmy-Home">"Na ochłodę"</h1>
                                <img src={Karma}/>
                                <h2>Karma wspomagająca linienie</h2>
                                <Link to="/Karmy">
                                    <button className="KarmyButtons2-Home">Czytaj więcej</button>
                                </Link>
                                <button className="KarmyButtons3-Home">Dodaj do koszyka</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="Home-Bottom">
                <img src={Kot}/>

            </div>


            {/*<div className="Home-Bottom">*/}
            {/*    <img src={Kot}/>*/}

            {/*</div>*/}


        </div>
    )
}

export default Home;