import React, {useEffect, useState} from 'react'
import {db} from "../DataBase/init-firebase";
import {collection, doc, getDocs} from "firebase/firestore";
import Pies from "../Assets/piesek.png";
import Kot from "../Assets/kotek.png";

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
                <h1>Koszyk</h1>
                <div className="Koszyk-Produkty">
                    <div className="Produkty">
                        <h1>Produkty</h1>
                        <ul>
                            <li key="Kwiaciara">
                                <img/>
                                <h2>"Kwiaciara"</h2>
                                <div className="Koszyk-Produkty-Ilość">
                                    <img/> {/*po kliknięciu ustaw w bazie danych wartosć +1*/}
                                    <img/> {/*po kliknięciu ustaw w bazie danych wartosć -1*/}
                                    <div id={`Karma-Ilość Kwiaciara`}>1</div> {/*Karma.Ilosć*/}
                                </div>
                                <div id={`Cena Kwiaciara`}>49.99 zł</div> {/*Karma.Cena**Karma.Ilość*/}
                                <img/> {/*Krzyżyk - usuń z bazy danych*/}
                            </li>
                        </ul>
                    </div>

                    <h1>Metoda płatności</h1>
                    <div className="Koszyk-Ikonki">
                        <img/>
                        <img/>
                        <img/>
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