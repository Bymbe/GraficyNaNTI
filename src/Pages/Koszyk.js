import React, {useEffect, useState} from 'react'
import {db} from "../DataBase/init-firebase";
import {collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc} from "firebase/firestore";
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
    const [UzupełnioneDane, setUzupełnioneDane] = React.useState(false);
    const [Adress, setAdress] = useState("");
    const [Town, setTown] = useState("");
    const [Country, setCountry] = useState("");
    const [Email, setEmail] = useState("");
    const [Regulamin, setRegulamin] = useState(false);


    const [Karmy, setKarmy] = React.useState([]);


    useEffect(() => {
        getKoszyk();
    }, [])

    const getKoszyk = async () => {
        console.log(props.Login)
        if(props.Zalogowano === true){
            try{
                const DaneRef = await doc(db, props.Login, 'Dane');

                const docSnap = await getDoc(DaneRef);
                console.log(docSnap.data().KodPocztowy)
                if(docSnap.data().Adres === "" || docSnap.data().KodPocztowy === "" || docSnap.data().Kraj === ""){
                    setUzupełnioneDane(false);
                }
                else{
                    setUzupełnioneDane(true);
                }

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

    }

    const setAmaount = async (znak, id, aktualnaIlość) => {
        const KarmaRef = await doc(db, props.Login, 'Dane','Koszyk', id);
        if(znak === '+'){
            updateDoc(KarmaRef, {
                Amount: aktualnaIlość+1
            });
        }
        else{
            updateDoc(KarmaRef, {
                Amount: aktualnaIlość-1
            });
        }
        getKoszyk();
    }

    const deleteKarma = async (id) => {


        const KarmaRef = await doc(db, props.Login, 'Dane','Koszyk', id);
        deleteDoc(KarmaRef);
        getKoszyk();
    }

    const updateSuma = async () => {
        const suma = Karmy.reduce((acc, karma) => acc +(karma.Cena * karma.Amount), 0);
        console.log(suma);
        setSuma(suma);
    }

    useEffect(() => {
        updateSuma()

    }, [Karmy]);

    useEffect(()=>{
        setPayout(Suma);
    }, [Suma])

    const Payment = async () => {
        if(props.Zalogowano !== true){
            if(Adress === "" || Country === "" || Town === "" || Email === ""){
                alert("Uzupełnij dane adresowe")
            }
            return;
        }
        if (Regulamin === false) {
            alert('Zaznacz wszystkie wymagane pola')
            return;
        }
        alert("Przejście do płatności")

        try{
            /*Pobieranie produktów z koszyka*/
            const koszykSnapshot = await getDocs(collection(db, props.Login, 'Dane', 'Koszyk'));
            const koszykDocs = koszykSnapshot.docs;



            /*Nowe zamówienie w kolekcji zamówienia*/
            const currentDateTime = new Date().toISOString();
            const newOrderRef = doc(collection(db,props.Login, 'Dane', "Zamówienia"), currentDateTime);

            /*Dane do dokumentu*/
            const orderData = {
                createdAt: new Date().toLocaleString()
            }

            koszykDocs.forEach((doc) => {
                //orderData[`element${index + 1}`] = doc.id;
                orderData[doc.id] = doc.data().Amount;
                deleteKarma(doc.id);
                /*const KarmaRef = doc(db, props.Login, 'Dane','Koszyk', doc.id);
                deleteDoc(KarmaRef);*/
            });

            /*Ustawianie dokumentu w kolekcji "Zamówienia"*/
            await setDoc(newOrderRef, orderData);
            console.log("Order created with ID: ", currentDateTime);

        }catch(err){
            console.error("Error creating order: ", err);
        }

    }

    return (
        <div className="Koszyk">
            <br/><br/><br/><br/><br/><br/>
            <div className="Koszyk-Top"><img src={Pies}/></div>
            <div className="Koszyk-Content">
                <h1 id="Koszyk-Nagłówek">Koszyk</h1>
                <div className="Koszyk-Produkty">
                    <div className="Produkty">
                        <h1>Produkty</h1>
                        <ul>
                            {Karmy.map(karma => {

                                return (
                                    <li key={karma.id}>
                                        <img src={Karma} className="Produkty-Karma"/>
                                        <h2>{karma.id}</h2>
                                        <div className="Koszyk-Produkty-Ilość">
                                            <img src={Strzałka} onClick={() => {
                                                setAmaount('+', karma.id, karma.Amount)
                                            }}/>{/*po kliknięciu ustaw w bazie danych wartosć +1*/}
                                            <div id={`Karma-Ilość ${karma.id}`}>{karma.Amount}</div>
                                            {/*Karma.Ilosć*/}
                                            <img src={Strzałka} onClick={() => {
                                                setAmaount('-', karma.id, karma.Amount)
                                            }}/> {/*po kliknięciu ustaw w bazie danych wartosć -1*/}
                                        </div>
                                        <div id={`Cena ${karma.id}`} className="Produkty-Cena">{karma.Cena} zł</div>
                                        {/*Karma.Cena**Karma.Ilość*/}
                                        <img src={Krzyżyk}
                                             className="Produkty-Krzyżyk" onClick={() => {
                                            deleteKarma(karma.id)
                                        }}/> {/*Krzyżyk - usuń z bazy danych*/}
                                    </li>
                                )
                            })}

                            {/*<li key="Kwiaciara">
                                <img src={Karma} className="Produkty-Karma"/>
                                <h2>"Kwiaciara"</h2>
                                <div className="Koszyk-Produkty-Ilość">
                                    <img src={Strzałka}/> po kliknięciu ustaw w bazie danych wartosć +1
                                    <div id={`Karma-Ilość Kwiaciara`}>1</div>
                                    Karma.Ilosć
                                    <img src={Strzałka}/> po kliknięciu ustaw w bazie danych wartosć -1

                                </div>
                                <div id={`Cena Kwiaciara`} className="Produkty-Cena">49.99 zł</div>
                                Karma.Cena**Karma.Ilość
                                <img src={Krzyżyk} className="Produkty-Krzyżyk"/> Krzyżyk - usuń z bazy danych
                            </li>*/}
                        </ul>
                    </div>
                    <div className="Metoda-Płatności">
                        <h1>Metoda płatności</h1>
                        <div className="Koszyk-Ikonki">
                            <img src={Blik}/>
                            <img src={Przelewy}/>
                            <img src={PayPal}/>
                        </div>
                    </div>
                    <div className="Koszyk-Podsumowanie">
                        <h1>Podsumowanie</h1>
                        <div className="Koszyk-Podsumowanie-Pole">
                            <h2>Suma</h2>
                            <div id="Koszyk-Suma">{Suma} zł</div>
                            {/*trzeba mieć zmienną suma którą raz sie będzie ustawiać */}
                        </div>
                        <div className="Koszyk-Podsumowanie-Pole">
                            <h2>Koszt dostawy</h2>
                            <div id="Koszyk-KosztDostawy">0.00 zł</div>
                        </div>
                        <br/>
                        <div className="Koszyk-Podsumowanie-Pole">
                            <h2>Rabat</h2>
                            <div id="Koszyk-Rabat">0.00 zł</div>

                        </div>
                        <textarea rows="1" className="Rabat" placeholder="Kod rabatowy"></textarea>
                        <br/>
                        <div className="Koszyk-Podsumowanie-Pole">
                            <h2>Do zapłaty</h2>
                            <div id="Koszyk-DoZapłaty">{Payout} zł</div>
                        </div>
                        <div className="Koszyk-Kreska"></div>
                        {props.Zalogowano !== true ? (
                            <div className="Koszyk-UzupełnijDane">
                                <div>
                                    <label>E-mail</label>
                                    <textarea rows="1" onChange={(e) => setEmail(e.target.value)}></textarea>
                                </div>
                                <div>
                                    <label>Adres</label>
                                    <textarea rows="1" onChange={(e) => setAdress(e.target.value)}></textarea>
                                </div>
                                <div>
                                    <label>Kod pocztowy</label>
                                    <textarea rows="1" onChange={(e) => setTown(e.target.value)}></textarea>
                                </div>
                                <div>
                                    <label>Kraj</label>
                                    <textarea rows="1" onChange={(e) => setCountry(e.target.value)}></textarea>
                                </div>
                            </div>
                        ) : (<div style={{display: "none"}}></div>)}

                        <div className="Koszyk-CheckBox-Area">
                            <input type="checkbox" onChange={(e) => setRegulamin(!Regulamin)}/>
                            <h3 data-end="*">Akceptuję warunki regulaminu</h3>
                        </div>

                        {UzupełnioneDane === false && props.Zalogowano === true &&
                            <h4>Uzupełnij dane adresowe na swoim profilu, zanim będziesz mógł/a przejść dalej</h4>}
                        <button disabled={UzupełnioneDane ? false : true} onClick={Payment}>Zapłać</button>
                    </div>
                </div>

            </div>
            <div className="Koszyk-Bottom"><img src={Kot}/></div>

        </div>
    )
}

export default Koszyk;