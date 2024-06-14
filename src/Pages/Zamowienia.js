import React from 'react'
import App from "../App";
import {Link} from "react-router-dom";
import Karma from "../Assets/karma.png";

function Zamowienia() {
    return (
        <div className="Zamowienia">
            <br/><br/><br/><br/><br/><br/><br/>
                <h1>Zamówienia</h1>

            <div className="Zamownienia-Conteiner">

                <div className="Zamowienie">

                    <div className="ZamowienieTop">

                        <div className="Zamowienie-Dane">
                            <br/>
                            <h2>Numer Zamówienia:</h2>
                            <div className="NumerZamownia">
                                <h4> #123453667</h4>
                            </div>
                            <h2>Adres:</h2>
                            <div className="Adres">
                                <h4> Jakas tam 14, Gdzieś tam</h4>
                                <br/>
                            </div>

                        </div>
                        <div className="Zamowienie-Status">
                            <br/>
                            <h3>Status:</h3>
                            <select>
                                <option value="W realizaji">W realizacji</option>
                                <option value="Wysłane">Wysłane</option>
                            </select>
                        </div>
                    </div>
                    <div className="ZamowienieProdukty">
                        <div className="ProduktyHead">Produkty</div>
                        <div className="Produkty">
                            <div className="Produkt">
                                <div className="Ilosc">2x</div>
                                <div className="Nazwa">Karma</div>
                            </div>
                            <div className="Produkt">
                                <div className="Ilosc">1x</div>
                                <div className="Nazwa">Karma</div>
                            </div>
                        </div>
                        <h2></h2>
                    </div>
                </div>

            </div>

            <h1></h1>

        </div>
    )
}

export default Zamowienia;