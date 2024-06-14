import React, {useEffect, useState} from 'react'
import Sonia from "../Assets/Sonia.jpg";
import nagroda from "../Assets/nagroda.png";
import Sonia2 from "../Assets/Sonia2.jpg";
import Pies from "../Assets/piesek.png";
import {doc, setDoc} from "firebase/firestore";
import {db} from "../DataBase/init-firebase";


function DodajKarmy() {


    const [NazwaKarmy, setNazwaKarmy] = useState("");
    const [CenaKarmy, setCenaKarmy] = useState(0);
    const [KOpis, setKOpis] = useState("");
    const [DOpis, setDOpis] = useState("");
    const [GramaturaKarmy, setGramaturaKarmy] = useState("");
    const [MeatType, setMeatType] = useState("");
    const [Składnik1, setSkładnik1] = useState("");
    const [Składnik2, setSkładnik2] = useState("");
    const [Składnik3, setSkładnik3] = useState("");
    const [Składnik4, setSkładnik4] = useState("");
    const [Składnik5, setSkładnik5] = useState("");
    const [Korzyść1, setKorzyść1] = useState("");
    const [Korzyść2, setKorzyść2] = useState("");
    const [Korzyść3, setKorzyść3] = useState("");
    const [Korzyść4, setKorzyść4] = useState("");

    const handleMeatTypeChange = (value) => {
        setMeatType(value);
    }

    const createKarma = async () => {
        try {
            await setDoc(doc(db, 'Karmy', NazwaKarmy), {
                DługiOpis: DOpis,
                Korzyść1: Korzyść1,
                Korzyść2: Korzyść2,
                Korzyść3: Korzyść3,
                Korzyść4: Korzyść4,
                KrótkiOpis: KOpis,
                MeatType: MeatType,
                Nazwa: NazwaKarmy,
                Składnik1: Składnik1,
                Składnik2: Składnik2,
                Składnik3: Składnik3,
                Składnik4: Składnik4,
                Składnik5: Składnik5
            });
            alert(`DOdano Karmę ${NazwaKarmy} `);

        } catch (err) {
            console.log('Błąd przy dodawaniu Karmy', err);
        }
    }


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
                <input type="text" id="Nazwa" placeholder='Napisz coś...' onChange={(e) => setNazwaKarmy(e.target.value)}></input>
            </div>
            <div className="DodajKarmy-subheader">
                Cena (w zł):
            </div>
            <div>
                <input type="text" id="Cena" placeholder='Napisz coś...' onChange={(e) => setCenaKarmy(e.target.value)}></input>
            </div>
            <div className="DodajKarmy-subheader">
                Krótki opis Karmy:
            </div>
            <div>
                <input type="text" id="KrotkiOpis" placeholder='Napisz coś...' onChange={(e) => setKOpis(e.target.value)}></input>
            </div>
            <div className="DodajKarmy-subheader">
                Długi opis Karmy:
            </div>
            <div>
                <input type="text" id="DlugiOpis" placeholder='Napisz coś...' onChange={(e) => setDOpis(e.target.value)}></input>
            </div>
            <div className="DodajKarmy-subheader">
                Gramatura produktu (w kg):
            </div>
            <input type="text" id="Gramatura" placeholder='Napisz coś...' onChange={(e) => setGramaturaKarmy(e.target.value)}></input>
            <div className="DodajKarmy-subheader">
                Wybierz rodzaj mięsa:
            </div>
            <div className="DodajKarmy-MeatType">
                <div className="BannedIngredientsCheck">
                    <input type="checkbox" id="ingredient1" name="kaczka" value="Kaczka" checked={MeatType === 'Kaczka'}
                           onChange={() => handleMeatTypeChange('Kaczka')}/>
                    <h10>Kaczka</h10>
                </div>
                <div className="BannedIngredientsCheck">
                    <input type="checkbox" id="ingredient2" name="kurczak" value="Kurczak"
                           checked={MeatType === 'Kurczak'} onChange={() => handleMeatTypeChange('Kurczak')}/>
                    <h10>Kurczak</h10>
                </div>
                <div className="BannedIngredientsCheck">
                    <input type="checkbox" id="ingredient3" name="wieprzowina" value="Wieprzowina"
                           checked={MeatType === 'Wieprzowina'} onChange={() => handleMeatTypeChange('Wieprzowina')}/>
                    <h10>Wieprzowina</h10>
                </div>
                <div className="BannedIngredientsCheck">
                    <input type="checkbox" id="ingredient4" name="wolowina" value="Wołowina"
                           checked={MeatType === 'Wołowina'} onChange={() => handleMeatTypeChange('Wołowina')}/>
                    <h10>Wołowina</h10>
                </div>
                <div className="BannedIngredientsCheck">
                    <input type="checkbox" id="ingredient5" name="vege" value="Vege"
                           checked={MeatType === 'Vege'} onChange={() => handleMeatTypeChange('Vege')}/>
                    <h10>Vege</h10>
                </div>
            </div>
            <div className="DodajKarmy-header">
                Dodaj kluczowe składniki:
            </div>
            <div className="DodajKarmy-subheader">
                Składnik 1:
            </div>
            <div>
                <input type="text" id="skladnik1" placeholder='Napisz coś...' onChange={(e) => setSkładnik1(e.target.value)}></input>
            </div>
            <div className="DodajKarmy-subheader">
                Składnik 2:
            </div>
            <div>
                <input type="text" id="skladnik2" placeholder='Napisz coś...' onChange={(e) => setSkładnik2(e.target.value)}></input>
            </div>
            <div className="DodajKarmy-subheader">
                Składnik 3:
            </div>
            <div>
                <input type="text" id="skladnik3" placeholder='Napisz coś...' onChange={(e) => setSkładnik3(e.target.value)}></input>
            </div>
            <div className="DodajKarmy-subheader">
                Składnik 4:
            </div>
            <div>
                <input type="text" id="skladnik4" placeholder='Napisz coś...' onChange={(e) => setSkładnik4(e.target.value)}></input>
            </div>
            <div className="DodajKarmy-subheader">
                Składnik 5:
            </div>
            <div>
                <input type="text" id="skladnik5" placeholder='Napisz coś...' onChange={(e) => setSkładnik5(e.target.value)}></input>
            </div>
            <div className="DodajKarmy-header">
                Dodaj korzyści spożywania karmy:
            </div>
            <div className="DodajKarmy-subheader">
                Korzyść 1:
            </div>
            <div>
                <input type="text" id="korzysc1" placeholder='Napisz coś...' onChange={(e) => setKorzyść1(e.target.value)}></input>
            </div>
            <div className="DodajKarmy-subheader">
                Korzyść 2:
            </div>
            <div>
                <input type="text" id="korzysc2" placeholder='Napisz coś...' onChange={(e) => setKorzyść2(e.target.value)}></input>
            </div>
            <div className="DodajKarmy-subheader">
                Korzyść 3:
            </div>
            <div>
                <input type="text" id="korzysc3" placeholder='Napisz coś...' onChange={(e) => setKorzyść3(e.target.value)}></input>
            </div>
            <div className="DodajKarmy-subheader">
                Korzyść 4:
            </div>
            <div>
                <input type="text" id="korzysc4" placeholder='Napisz coś...' onChange={(e) => setKorzyść4(e.target.value)}></input>
            </div>
            <button onClick={createKarma}>Dodaj Karmę</button>
        </div>
    )
}

export default DodajKarmy;