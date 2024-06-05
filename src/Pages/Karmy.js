import React from 'react'
import App from "../App";
import Karma from "../Assets/karma.png";
import {Link} from "react-router-dom";

function Karmy() {
    return (
        <div className="Karmy">
            <div className="Karmy-Header">
                <br/><br/><br/>
                <h1 id="HeaderMain-Karmy">Nasze Karmy</h1>
            </div>
            <div className="Shop">
                <div className="SearchingBar">
                    <h1 id="SB-Head">Filtry</h1>
                </div>

                <div className={"flex-container"}>
                    <div className="FlexBoxy-Karmy">
                        <h1 id="NazwaKarmy-Karmy">"Kwiaciara"</h1>
                        <img src={Karma}/>
                        <h3>49,99 zł</h3>
                        <h2>Super dobra karma z płatków kwiatów</h2>
                        <Link to="/Kwiaciara">
                            <button className="KarmyButtons2-Karmy">Czytaj więcej
                            </button>
                        </Link>
                        <button className="KarmyButtons3-Karmy">Dodaj do koszyka</button>
                    </div>
                    <div className="FlexBoxy-Karmy">
                        <h1 id="NazwaKarmy-Karmy">"Wiosenna energia"</h1>
                        <img src={Karma}/>
                        <h3>49,99 zł</h3>
                        <h2>Warzywny miks na dłuższe dni</h2>
                        <Link to="/Karmy">
                            <button className="KarmyButtons2-Karmy">Czytaj więcej</button>
                        </Link>
                        <button className="KarmyButtons3-Karmy">Dodaj do koszyka</button>
                    </div>
                    <div className="FlexBoxy-Karmy">
                        <h1 id="NazwaKarmy-Karmy">"Sezonowy owoc"</h1>
                        <img src={Karma}/>
                        <h3>49,99 zł</h3>
                        <h2>Karma z kawałkami sezonowych truskawek</h2>
                        <Link to="/Karmy">
                            <button className="KarmyButtons2-Karmy">Czytaj więcej</button>
                        </Link>
                        <button className="KarmyButtons3-Karmy">Dodaj do koszyka</button>
                    </div>
                    <div className="FlexBoxy-Karmy">
                        <h1 id="NazwaKarmy-Karmy">"Na pyłki"</h1>
                        <img src={Karma}/>
                        <h3>49,99 zł</h3>
                        <h2>Wzmacnia odporność w sezonie alergicznym</h2>
                        <Link to="/Karmy">
                            <button className="KarmyButtons2-Karmy">Czytaj więcej</button>
                        </Link>
                        <button className="KarmyButtons3-Karmy">Dodaj do koszyka</button>
                    </div>
                    <div className="FlexBoxy-Karmy">
                        <h1 id="NazwaKarmy-Karmy">"W słońcu"</h1>
                        <img src={Karma}/>
                        <h3>49,99 zł</h3>
                        <h2>Na lśniącą sierść</h2>
                        <Link to="/Karmy">
                            <button className="KarmyButtons2-Karmy">Czytaj więcej</button>
                        </Link>
                        <button className="KarmyButtons3-Karmy">Dodaj do koszyka</button>
                    </div>
                    <div className="FlexBoxy-Karmy">
                        <h1 id="NazwaKarmy-Karmy">"Na ochłodę"</h1>
                        <img src={Karma}/>
                        <h3>49,99 zł</h3>
                        <h2>Karma wspomagająca linienie</h2>
                        <Link to="/Karmy">
                            <button className="KarmyButtons2-Karmy">Czytaj więcej</button>
                        </Link>
                        <button className="KarmyButtons3-Karmy">Dodaj do koszyka</button>
                    </div>
                    <div className="FlexBoxy-Karmy">
                        <h1 id="NazwaKarmy-Karmy">"Kwiaciara"</h1>
                        <img src={Karma}/>
                        <h3>49,99 zł</h3>
                        <h2>Super dobra karma z płatków kwiatów</h2>
                        <Link to="/Karmy">
                            <button className="KarmyButtons2-Karmy">Czytaj więcej</button>
                        </Link>
                        <button className="KarmyButtons3-Karmy">Dodaj do koszyka</button>
                    </div>
                    <div className="FlexBoxy-Karmy">
                        <h1 id="NazwaKarmy-Karmy">"Kwiaciara"</h1>
                        <img src={Karma}/>
                        <h3>49,99 zł</h3>
                        <h2>Super dobra karma z płatków kwiatów</h2>
                        <Link to="/Karmy">
                            <button className="KarmyButtons2-Karmy">Czytaj więcej</button>
                        </Link>
                        <button className="KarmyButtons3-Karmy">Dodaj do koszyka</button>
                    </div>
                    <div className="FlexBoxy-Karmy">
                        <h1 id="NazwaKarmy-Karmy">"Kwiaciara"</h1>
                        <img src={Karma}/>
                        <h3>49,99 zł</h3>
                        <h2>Super dobra karma z płatków kwiatów</h2>
                        <Link to="/Karmy">
                            <button className="KarmyButtons2-Karmy">Czytaj więcej</button>
                        </Link>
                        <button className="KarmyButtons3-Karmy">Dodaj do koszyka</button>
                    </div>
                    <div className="FlexBoxy-Karmy">
                        <h1 id="NazwaKarmy-Karmy">"Kwiaciara"</h1>
                        <img src={Karma}/>
                        <h3>49,99 zł</h3>
                        <h2>Super dobra karma z płatków kwiatów</h2>
                        <Link to="/Karmy">
                            <button className="KarmyButtons2-Karmy">Czytaj więcej</button>
                        </Link>
                        <button className="KarmyButtons3-Karmy">Dodaj do koszyka</button>
                    </div>
                    <div className="FlexBoxy-Karmy">
                        <h1 id="NazwaKarmy-Karmy">"Kwiaciara"</h1>
                        <img src={Karma}/>
                        <h3>49,99 zł</h3>
                        <h2>Super dobra karma z płatków kwiatów</h2>
                        <Link to="/Karmy">
                            <button className="KarmyButtons2-Karmy">Czytaj więcej</button>
                        </Link>
                        <button className="KarmyButtons3-Karmy">Dodaj do koszyka</button>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Karmy;