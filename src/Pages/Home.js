import React from 'react'
import Pies from "../Assets/piesek.png";
import Kot from "../Assets/kotek.png";
import Logo from "../Assets/Logo-Footer.svg";
import Twitter from "../Assets/Twitter.svg";


function Home() {

    return (
        <div className="Home">

            <div className="Home-Top">
                <br/><br/><br/><br/>
                <h1 id="HeaderMain-Home">Spersonalizowana karma dla Twojego pupila!</h1>
                <h3 id="Header-Home">Odpowiedz na kilka pytań na temat swojego pupila aby dostać propozycje dopasowanej
                    do jego potrzeb karmy </h3>
                <div>
                    <input type="text" id="PetNameInput-Home" placeholder="Wpisz imię Twojego pupila"/>
                </div>
                <div>
                    <button id="StartButton-Home">Zaczynamy!</button>
                </div>
                <img src={Pies}/>
            </div>

            <div className="Home-Middle">
                <div className="KarmyHeader-Home">
                    <h1 id="Karmy-Home">Karmy sezonowe</h1>
                </div>
                <br/>
                <div className="KarmyMainHome">
                <div className="KarmyBottom-Home">
                    <button className="KarmyButtonsL-Home">&lt;</button>
                    <button className="KarmyButtonsR-Home">&gt;</button>
                    <div className="KarmyBoxy-Home">
                        <h1 id="NazwaKarmy-Home">"Nazwa Karmy"</h1>
                        <img src={Pies}/>
                        <h2>Super dobra karma z płatków kwiatów</h2>
                        <button className="KarmyButtons2-Home">Czytaj więcej</button>
                        <button className="KarmyButtons3-Home">Zobacz!</button>
                    </div>
                    <div className="KarmyBoxy-Home">
                        <h1 id="NazwaKarmy-Home">"Nazwa Karmy"</h1>
                        <img src={Pies}/>
                        <h2>Super dobra karma z płatków kwiatów</h2>
                        <button className="KarmyButtons2-Home">Czytaj więcej</button>
                        <button className="KarmyButtons3-Home">Zobacz!</button>
                    </div>
                    <div className="KarmyBoxy-Home">
                        <h1 id="NazwaKarmy-Home">"Nazwa Karmy"</h1>
                        <img src={Pies}/>
                        <h2>Super dobra karma z płatków kwiatów</h2>
                        <button className="KarmyButtons2-Home">Czytaj więcej</button>
                        <button className="KarmyButtons3-Home">Zobacz!</button>
                    </div>
                </div>

                </div>

            </div>
            <div className="Home-Bottom">
                <img src={Kot}/>

            </div>



        </div>
    )
}

export default Home;