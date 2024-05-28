import React from "react";
import Logo from "../Assets/Logo-Footer.svg";
import Facebook from "../Assets/Facebook.svg";
import Instagram from "../Assets/Instagram.svg";
import Twitter from "../Assets/Twitter.svg";

function Footer() {
    return (
        <div className="Footer">
            <div className="Footer-Top"></div>
            <div className="Footer-Logo">
                <img className="Logo-Footer" src={Logo}/>
                <h1 id="PawsomeProvisions-Footer">Pawsome Provisions</h1>
            </div>
            <div className="Footer-Dane">
                <div className="Footer-Text">
                    <h1>DANE ADRESOWE</h1>
                    <div>Pawsome Provisions<br/>al.Szarkia 102<br/>00-100 Warszawa</div>
                </div>
                <div className="Footer-Text">
                    <h1>SKONTAKTUJ SIĘ Z NAMI</h1>
                    <div>INFOLINIA<br/>tel.: 123 456 789</div>
                </div>
            </div>
            <div className="Footer-Socjale">
                <h1>Znajdź nas na:</h1>
                <img src={Facebook}/>
                <img src={Instagram}/>
                <img src={Twitter}/>
            </div>
            <div className="Footer-Bottom">
                <div></div>
                <h2>Copyright © 2024 Pawsome Provisiona. All Rights Reserved.</h2>
            </div>
        </div>
    )
}

export default Footer;