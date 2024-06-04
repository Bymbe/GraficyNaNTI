import React, {useEffect, useState} from 'react'
import {db} from "../DataBase/init-firebase";
import {collection, doc, getDocs} from "firebase/firestore";
import Pies from "../Assets/piesek.png";
import Kot from "../Assets/kotek.png";
import Karma from "../Assets/Karma.svg";
import Krzyżyk from "../Assets/Krzyżyk.svg";
import Strzałka from "../Assets/Strzałka.svg";
import Blik from "../Assets/Blik.svg";
import Przelewy from "../Assets/Przelew24.svg";
import PayPal from "../Assets/PayPal.svg";


function Koszyk(props) {

    const [Suma, setSuma] = React.useState(0);
    const [Payout, setPayout] = React.useState(0);

    const [Karmy, setKarmy] = React.useState([]);


    useEffect(() => {
        getKoszyk();
    }, [])

    const getKoszyk = async () => {
        try{
            const DaneRef = await doc(db, props.Login, 'Dane');
            const basketCollecionRef = await collection(DaneRef,'Koszyk');

            const snapShot = await getDocs(basketCollecionRef);
            const documents = snapShot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setKarmy(documents);
        }catch(err){
            console.error("Bład przy pobieraniu kolekcji: ",err);
            return [];
        }
    }

    const setAmaount = async () => {

    }

    return (
        <div className="Koszyk">
            <div className="Koszyk-Top"><img src={Pies}/></div>
            <div className="Koszyk-Content">
                <h1 id="Koszyk-Nagłówek">Koszyk</h1>
                <div className="Koszyk-Produkty">
                    <div className="Produkty">
                        <h1>Produkty</h1>
                        <ul>
                            <li key="Kwiaciara">
                                <img src={Karma} className="Produkty-Karma"/>
                                <h2>"Kwiaciara"</h2>
                                <div className="Koszyk-Produkty-Ilość" >
                                    <img src={Strzałka}/> {/*po kliknięciu ustaw w bazie danych wartosć +1*/}
                                    <div id={`Karma-Ilość Kwiaciara`}>1</div> {/*Karma.Ilosć*/}
                                    <img src={Strzałka}/> {/*po kliknięciu ustaw w bazie danych wartosć -1*/}

                                </div>
                                <div id={`Cena Kwiaciara`} className="Produkty-Cena">49.99 zł</div> {/*Karma.Cena**Karma.Ilość*/}
                                <img src={Krzyżyk} className="Produkty-Krzyżyk"/> {/*Krzyżyk - usuń z bazy danych*/}
                            </li>
                        </ul>
                    </div>

                    <h1>Metoda płatności</h1>
                    <div className="Koszyk-Ikonki">
                        <img src={Blik}/>
                        <img src={Przelewy}/>
                        <img src={PayPal}/>
                    </div>
                    <div className="Koszyk-Podsumowanie">
                        <h1>Posumowanie</h1>
                        <div>
                            <h2>Suma</h2>
                            <div id="Koszyk-Suma"></div> {/*trzeba mieć zmienną suma którą raz sie będzie ustawiać */}

                        </div>
                        <div>
                            <h2>Koszt dostawy</h2>
                            <div id="Koszyk-KosztDostawy"></div>
                        </div>
                        <div>
                            <h2>Rabat</h2>
                            <div id="Koszyk-Rabat"></div>
                        </div>
                        <div>
                            <h2>Do zapłaty</h2>
                            <div id="Koszyk-DoZapłaty"></div>
                        </div>
                        <div></div> {/*kreseczka*/}
                        <button>Zapłać</button>
                    </div>
                </div>

            </div>
            <div className="Koszyk-Bottom"><img src={Kot}/></div>

        </div>
    )
}

export default Koszyk;