import React, {useEffect, useState} from 'react'
import App from "../App";
import Karma from "../Assets/karma.png";
import {Link} from "react-router-dom";
import {collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc} from "firebase/firestore";
import {db} from "../DataBase/init-firebase";
import { query, where } from 'firebase/firestore';

function Karmy(props) {

    const [KarmyRef, setKarmyRef] = useState([]);
    const [Popup, setPopup] = useState(false);
    const [MeatFilter, setMeatFilter] = useState(null);
    const [CenaFilter, setCenaFilter] = useState("");


    useEffect(() => {
        getKarmy();

    },[])

    useEffect(() => {
        getKarmy();

    },[MeatFilter, CenaFilter]);

    const handleMeatTypeChange = (value) => {
        setMeatFilter(value);
    }

    const handleCenaFilterChange = (value) => {
        setCenaFilter(value);
    }

    const getKarmy = async () => {
        try{

            let karmyCollectionRef = collection(db, 'Karmy');
            if (MeatFilter) {
                karmyCollectionRef = query(karmyCollectionRef, where('MeatType', '==', MeatFilter));
            }
            if (CenaFilter !== "") {
                if(CenaFilter === ">"){
                    karmyCollectionRef = query(karmyCollectionRef, where('Cena', '>=', 100));
                } else if(CenaFilter === "<"){
                    karmyCollectionRef = query(karmyCollectionRef, where('Cena', '<', 50));
                } else {
                    karmyCollectionRef = query(karmyCollectionRef, where('Cena', '>', 50));
                    karmyCollectionRef = query(karmyCollectionRef, where('Cena', '<', 100));
                }

            }

            const snapShot = await getDocs(karmyCollectionRef);
            const documents = snapShot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setKarmyRef(documents);

        }catch(err){
            console.log(err);
        }
    }

    const handleKarma =  (KarmaID) => {
        console.log(KarmaID);
        props.handleCallBackKarma(KarmaID);
    }

    const UsuńKarmę = async (KarmaID) => {
        try{
            const KarmaRef = await doc(db, 'Karmy', KarmaID);
            await deleteDoc(KarmaRef);
            getKarmy();
        }catch(err){
            console.log(err);
        }
    }


    const DodajDoKoszyka = async (KarmaID, KarmaCena) => {
        setPopup(true);
        try{
            const KarmaRef = await doc(db, props.Login, 'Dane','Koszyk', KarmaID);
            const snapShot = await getDoc(KarmaRef);
            if(snapShot.exists()){
                updateDoc(KarmaRef, {
                    Amount: (snapShot.data().Amount +1 )
                });

            } else {
                await setDoc(doc(db, props.Login, 'Dane','Koszyk',KarmaID), {Amount: 1, Cena: KarmaCena});
            }


        }catch(err){
            console.log(err);
        }
    }

    const ClearFilters = () => {
        setMeatFilter(null);
        setCenaFilter("")
    }



    return (
        <div className="Karmy">
            <br/><br/><br/><br/><br/><br/>
            <div className="Karmy-Header">
                <br/><br/><br/>
                <h1 id="HeaderMain-Karmy">Nasze Karmy</h1>
                <h3>* każda pozycja zawiera 3kg karmy</h3>
            </div>
            <div className="Shop">
                <div className="SearchingBar">
                    <h1 id="SB-Head">Filtry</h1>
                    <div>
                        <h2>Typ mięsa</h2>
                        <div>
                            <input type="checkbox" id="ingredient1" name="kaczka" value="Kaczka"
                                   checked={MeatFilter === 'Kaczka'}
                                   onChange={() => handleMeatTypeChange('Kaczka')}/>
                            <h3>Kaczka</h3>
                        </div>
                        <div>
                            <input type="checkbox" id="ingredient2" name="kurczak" value="Kurczak"
                                   checked={MeatFilter === 'Kurczak'} onChange={() => handleMeatTypeChange('Kurczak')}/>
                            <h3>Kurczak</h3>
                        </div>
                        <div>
                            <input type="checkbox" id="ingredient3" name="wieprzowina" value="Wieprzowina"
                                   checked={MeatFilter === 'Wieprzowina'}
                                   onChange={() => handleMeatTypeChange('Wieprzowina')}/>
                            <h3>Wieprzowina</h3>
                        </div>
                        <div>
                            <input type="checkbox" id="ingredient4" name="wolowina" value="Wołowina"
                                   checked={MeatFilter === 'Wołowina'}
                                   onChange={() => handleMeatTypeChange('Wołowina')}/>
                            <h3>Wołowina</h3>
                        </div>
                        <div>
                            <input type="checkbox" id="ingredient5" name="vege" value="Vege"
                                   checked={MeatFilter === 'Vege'} onChange={() => handleMeatTypeChange('Vege')}/>
                            <h3>Vege</h3>
                        </div>

                        <h2>Cena</h2>
                        <div>
                            <input type="checkbox" checked={CenaFilter === '<'}
                                   onChange={() => handleCenaFilterChange('<')}/>
                            <h3>Mniej niż 50zł</h3>
                        </div>
                        <div>
                            <input type="checkbox" checked={CenaFilter === '<>'}
                                   onChange={() => handleCenaFilterChange('<>')}/>
                            <h3>Między 50zł a 100zł</h3>
                        </div>
                        <div>
                            <input type="checkbox" checked={CenaFilter === '>'}
                                   onChange={() => handleCenaFilterChange('>')}/>
                            <h3>Więcej niż 100zł</h3>
                        </div>

                        <button onClick={ClearFilters}>Wyczyść Filtry</button>
                    </div>
                </div>

                {Popup ? (
                    <div className="Karmy-Popup">
                        <h1>Dodano do koszyka!</h1>
                        <button onClick={() => setPopup(false)}>Kontynuuj</button>
                    </div>
                ) : (<div style={{display: "none"}}></div>)}

                <div className={"flex-container"}>
                    {props.Login === "admin" &&
                        <div className="FlexBoxy-Karmy">

                            <Link to="/DodajKarmy">
                                <button className="KarmyButtons2-KarmyAdmina">+</button>
                            </Link>
                            <h1 id="NazwaKarmy-Karmy">Dodaj nową karmę</h1>

                        </div>}


                    {KarmyRef.map(karma => {
                        return (
                            <div className="FlexBoxy-Karmy" key={karma.id}>
                                {props.Login === 'admin' &&
                                    <button className="KarmyButtons3-KarmyAdmina" onClick={() => UsuńKarmę(karma.id)}> -
                                        Usuń tą karmę</button>}

                                <h1 id="NazwaKarmy-Karmy">{karma.id}</h1>
                                <img src={Karma}/>
                                <h3>{karma.Cena} zł</h3>
                                <h2>{karma.KrótkiOpis}</h2>
                                <Link to="/Kwiaciara" onClick={() => handleKarma(karma.id)}>
                                    <button className="KarmyButtons2-Karmy">Czytaj więcej</button>
                                </Link>
                                <button className="KarmyButtons3-Karmy"
                                        onClick={() => DodajDoKoszyka(karma.id, karma.Cena)}>Dodaj do koszyka
                                </button>
                            </div>
                        )
                    })}
                </div>

            </div>
            <h1></h1>

        </div>
    )
}

export default Karmy;