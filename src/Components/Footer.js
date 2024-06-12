import React from "react";
import Logo from "../Assets/Logo-Footer.svg";
import Facebook from "../Assets/Facebook.svg";
import Instagram from "../Assets/Instagram.svg";
import Twitter from "../Assets/Twitter.svg";
import {Link} from "react-router-dom";

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
                    <div>Pawsome Provisions<br/>al.Szarika 102<br/>Warszawa 00-100 <br/>NIP: 2134565444<br/>KRS: 4365756887</div>
                </div>
                <div className="Footer-Text">
                    <h1>SKONTAKTUJ SIĘ Z NAMI</h1>
                    <div>INFOLINIA<br/>tel.: 123 456 789</div>
                </div>
            </div>
            <div className="Footer-Socjale">
                <h1>Znajdź nas na:</h1>
                <Link to="http://facebook.com">
                    <img src={Facebook}/>
                </Link>
                <Link to="http://instagram.com">
                    <img src={Instagram}/>
                </Link>
                <Link to="http://twitter.com">
                    <img src={Twitter}/>
                 </Link>
            </div>
            <div className="Footer-Bottom">
                <div></div>
                <h2>Copyright © 2024 Pawsome Provisiona. All Rights Reserved.</h2>
            </div>
        </div>
    )
}

export default Footer;