import React from 'react'
import Sonia from "../Assets/Sonia.jpg";
import nagroda from "../Assets/nagroda.png";
import Sonia2 from "../Assets/Sonia2.jpg";
import Pies from "../Assets/piesek.png";

function DodajKarmy() {
    return (
        <div className="DodajKarmy">
            <br/><br/><br/><br/><br/><br/><br/>
            <div className="DodajKarmy-question">
                Dodaj Karmę wypełniając pola poniżej:
            </div>
            <div className="DodajKarmy-subheader">
                Nazwa Karmy:
            </div>
            <div>
                <input type="text" id="Nazwa" placeholder='Napisz coś...'></input>
            </div>
            <div className="DodajKarmy-subheader">
                Cena (w zł):
            </div>
            <div>
                <input type="text" id="Cena" placeholder='Napisz coś...'></input>
            </div>
            <div className="DodajKarmy-subheader">
                Krótki opis Karmy:
            </div>
            <div>
                <input type="text" id="KrotkiOpis" placeholder='Napisz coś...'></input>
            </div>
            <div className="DodajKarmy-subheader">
                Długi opis Karmy:
            </div>
            <div>
                <input type="text" id="DlugiOpis" placeholder='Napisz coś...'></input>
            </div>
            <div className="DodajKarmy-subheader">
                Gramatura produktu:
            </div>
            <input type="text" id="Gramatura" placeholder='Napisz coś...'></input>
            <div className="DodajKarmy-subheader">
                Dawkowanie:
            </div>
                <input type="text" id="dawkowanie" placeholder='Napisz coś...'></input>
            <div className="DodajKarmy-subheader">
                Wybierz rodzaj mięsa:
            </div>
            <div className="DodajKarmy-MeatType">
                <div className="BannedIngredientsCheck">
                    <input type="checkbox" id="ingredient1" name="kaczka" value="Kaczka"/>
                    <h10>Kaczka</h10>
                </div>
                <div className="BannedIngredientsCheck">
                    <input type="checkbox" id="ingredient2" name="kurczak" value="Kurczak"/>
                    <h10>Kurczak</h10>
                </div>
                <div className="BannedIngredientsCheck">
                    <input type="checkbox" id="ingredient3" name="wieprzowina" value="Wieprzowina"/>
                    <h10>Wieprzowina</h10>
                </div>
                <div className="BannedIngredientsCheck">
                    <input type="checkbox" id="ingredient4" name="wolowina" value="Wołowina"/>
                    <h10>Wołowina</h10>
                </div>
            </div>
            <div className="DodajKarmy-header">
                Dodaj kluczowe składniki:
            </div>
            <div className="DodajKarmy-subheader">
                Składnik 1:
            </div>
            <div>
                <input type="text" id="skladnik1" placeholder='Napisz coś...'></input>
            </div>
            <div className="DodajKarmy-subheader">
                Składnik 2:
            </div>
            <div>
                <input type="text" id="skladnik2" placeholder='Napisz coś...'></input>
            </div>
            <div className="DodajKarmy-subheader">
                Składnik 3:
            </div>
            <div>
                <input type="text" id="skladnik3" placeholder='Napisz coś...'></input>
            </div>
            <div className="DodajKarmy-subheader">
                Składnik 4:
            </div>
            <div>
                <input type="text" id="skladnik4" placeholder='Napisz coś...'></input>
            </div>
            <div className="DodajKarmy-header">
                Dodaj korzyści spożywania karmy:
            </div>
            <div className="DodajKarmy-subheader">
                Korzyść 1:
            </div>
            <div>
                <input type="text" id="korzysc1" placeholder='Napisz coś...'></input>
            </div>
            <div className="DodajKarmy-subheader">
                Korzyść 2:
            </div>
            <div>
                <input type="text" id="korzysc2" placeholder='Napisz coś...'></input>
            </div>
            <div className="DodajKarmy-subheader">
                Korzyść 3:
            </div>
            <div>
                <input type="text" id="korzysc3" placeholder='Napisz coś...'></input>
            </div>
            <div className="DodajKarmy-subheader">
                Korzyść 4:
            </div>
            <div>
                <input type="text" id="korzysc4" placeholder='Napisz coś...'></input>
            </div>
            <button>Dodaj Karmę</button>
        </div>
    )
}

export default DodajKarmy;