import React from "react";
import Logo from "../Assets/Logo.svg";
import Koszyk from "../Assets/Koszyk.svg";
import Konto from "../Assets/Konto.svg";
import { Link } from "react-router-dom"

function Navbar() {
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
                <Link to="Konto"><img className="Navbar-icons" src={Konto}/></Link>
                <Link to="Koszyk"><img className="Navbar-icons" src={Koszyk}/></Link>

            </div>
        </div>
    )
}

export default Navbar;