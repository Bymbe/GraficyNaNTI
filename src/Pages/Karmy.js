import React, {useEffect, useState} from 'react'
import App from "../App";
import Karma from "../Assets/karma.png";
import {Link} from "react-router-dom";
import {collection, doc, getDoc, getDocs, setDoc, updateDoc} from "firebase/firestore";
import {db} from "../DataBase/init-firebase";

function Karmy(props) {

    const [KarmyRef, setKarmyRef] = useState([]);
    const [Popup, setPopup] = useState(true);

    useEffect(() => {
        getKarmy();

    },[])

    const getKarmy = async () => {
        try{

            const karmyCollectionRef = await collection(db, 'Karmy');
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



    return (
        <div className="Karmy">
            <div className="Karmy-Header">
                <br/><br/><br/>
                <h1 id="HeaderMain-Karmy">Nasze Karmy</h1>
            </div>
            <div className="Shop">
                <div className="SearchingBar">
                    <h1 id="SB-Head">Filtry</h1>
                </div>

                {Popup ? (
                    <div className="Karmy-Popup">
                        <h1>Dodano do koszyka!</h1>
                        <button onClick={() => setPopup(false)}>Kontynuuj</button>
                    </div>
                ) : (<div style={{display: "none"}}></div>)}

                <div className={"flex-container"}>

                    {KarmyRef.map(karma => {
                        return (
                            <div className="FlexBoxy-Karmy">
                                <h1 id="NazwaKarmy-Karmy">{karma.id}</h1>
                                <img src={Karma}/>
                                <h3>{karma.Cena} zł</h3>
                                <h2>{karma.KrótkiOpis}</h2>
                                <Link to="/Kwiaciara" onClick={() => handleKarma(karma.id)}>
                                    <button className="KarmyButtons2-Karmy">Czytaj więcej</button>
                                </Link>
                                <button className="KarmyButtons3-Karmy" onClick={() => DodajDoKoszyka(karma.id, karma.Cena)}>Dodaj do koszyka</button>
                            </div>
                        )

                    })}




                    {/* <div className="FlexBoxy-Karmy">
                        <h1 id="NazwaKarmy-Karmy">"Kwiaciara"</h1>
                        <img src={Karma}/>
                        <h3>49,99 zł</h3>
                        <h2>Super dobra karma z płatków kwiatów</h2>
                        <Link to="/Kwiaciara">
                            <button className="KarmyButtons2-Karmy">Czytaj więcej
                            </button>
                        </Link>
                        <button className="KarmyButtons3-Karmy">Dodaj do koszyka</button>
                    </div>
                    <div className="FlexBoxy-Karmy">
                        <h1 id="NazwaKarmy-Karmy">"Wiosenna energia"</h1>
                        <img src={Karma}/>
                        <h3>49,99 zł</h3>
                        <h2>Warzywny miks na dłuższe dni</h2>
                        <Link to="/Karmy">
                            <button className="KarmyButtons2-Karmy">Czytaj więcej</button>
                        </Link>
                        <button className="KarmyButtons3-Karmy">Dodaj do koszyka</button>
                    </div>
                    <div className="FlexBoxy-Karmy">
                        <h1 id="NazwaKarmy-Karmy">"Sezonowy owoc"</h1>
                        <img src={Karma}/>
                        <h3>49,99 zł</h3>
                        <h2>Karma z kawałkami sezonowych truskawek</h2>
                        <Link to="/Karmy">
                            <button className="KarmyButtons2-Karmy">Czytaj więcej</button>
                        </Link>
                        <button className="KarmyButtons3-Karmy">Dodaj do koszyka</button>
                    </div>
                    <div className="FlexBoxy-Karmy">
                        <h1 id="NazwaKarmy-Karmy">"Na pyłki"</h1>
                        <img src={Karma}/>
                        <h3>49,99 zł</h3>
                        <h2>Wzmacnia odporność w sezonie alergicznym</h2>
                        <Link to="/Karmy">
                            <button className="KarmyButtons2-Karmy">Czytaj więcej</button>
                        </Link>
                        <button className="KarmyButtons3-Karmy">Dodaj do koszyka</button>
                    </div>
                    <div className="FlexBoxy-Karmy">
                        <h1 id="NazwaKarmy-Karmy">"W słońcu"</h1>
                        <img src={Karma}/>
                        <h3>49,99 zł</h3>
                        <h2>Na lśniącą sierść</h2>
                        <Link to="/Karmy">
                            <button className="KarmyButtons2-Karmy">Czytaj więcej</button>
                        </Link>
                        <button className="KarmyButtons3-Karmy">Dodaj do koszyka</button>
                    </div>
                    <div className="FlexBoxy-Karmy">
                        <h1 id="NazwaKarmy-Karmy">"Na ochłodę"</h1>
                        <img src={Karma}/>
                        <h3>49,99 zł</h3>
                        <h2>Karma wspomagająca linienie</h2>
                        <Link to="/Karmy">
                            <button className="KarmyButtons2-Karmy">Czytaj więcej</button>
                        </Link>
                        <button className="KarmyButtons3-Karmy">Dodaj do koszyka</button>
                    </div>
                    <div className="FlexBoxy-Karmy">
                        <h1 id="NazwaKarmy-Karmy">"Kwiaciara"</h1>
                        <img src={Karma}/>
                        <h3>49,99 zł</h3>
                        <h2>Super dobra karma z płatków kwiatów</h2>
                        <Link to="/Karmy">
                            <button className="KarmyButtons2-Karmy">Czytaj więcej</button>
                        </Link>
                        <button className="KarmyButtons3-Karmy">Dodaj do koszyka</button>
                    </div>
                    <div className="FlexBoxy-Karmy">
                        <h1 id="NazwaKarmy-Karmy">"Kwiaciara"</h1>
                        <img src={Karma}/>
                        <h3>49,99 zł</h3>
                        <h2>Super dobra karma z płatków kwiatów</h2>
                        <Link to="/Karmy">
                            <button className="KarmyButtons2-Karmy">Czytaj więcej</button>
                        </Link>
                        <button className="KarmyButtons3-Karmy">Dodaj do koszyka</button>
                    </div>
                    <div className="FlexBoxy-Karmy">
                        <h1 id="NazwaKarmy-Karmy">"Kwiaciara"</h1>
                        <img src={Karma}/>
                        <h3>49,99 zł</h3>
                        <h2>Super dobra karma z płatków kwiatów</h2>
                        <Link to="/Karmy">
                            <button className="KarmyButtons2-Karmy">Czytaj więcej</button>
                        </Link>
                        <button className="KarmyButtons3-Karmy">Dodaj do koszyka</button>
                    </div>
                    <div className="FlexBoxy-Karmy">
                        <h1 id="NazwaKarmy-Karmy">"Kwiaciara"</h1>
                        <img src={Karma}/>
                        <h3>49,99 zł</h3>
                        <h2>Super dobra karma z płatków kwiatów</h2>
                        <Link to="/Karmy">
                            <button className="KarmyButtons2-Karmy">Czytaj więcej</button>
                        </Link>
                        <button className="KarmyButtons3-Karmy">Dodaj do koszyka</button>
                    </div>
                    <div className="FlexBoxy-Karmy">
                        <h1 id="NazwaKarmy-Karmy">"Kwiaciara"</h1>
                        <img src={Karma}/>
                        <h3>49,99 zł</h3>
                        <h2>Super dobra karma z płatków kwiatów</h2>
                        <Link to="/Karmy">
                            <button className="KarmyButtons2-Karmy">Czytaj więcej</button>
                        </Link>
                        <button className="KarmyButtons3-Karmy">Dodaj do koszyka</button>
                    </div>*/}


                </div>

            </div>
        </div>
    )
}

export default Karmy;