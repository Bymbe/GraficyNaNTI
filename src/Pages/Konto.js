import React, {useEffect, useState} from 'react'
import {db} from "../DataBase/init-firebase";
import {collection, getDoc, getDocs,doc, deleteDoc, updateDoc, addDoc, setDoc} from "firebase/firestore";
import Królik from "../Assets/kroliczek.png";
import Strzałka from "../Assets/Strzałka.svg";
import TypPies from "../Assets/Pies_EBIZNES.png"
import TypKot from "../Assets/Kot-EBIZNES.png"
import TypKrólik from "../Assets/Królik_EBIZNES.png"



function Konto(props) {

    const [Name, setName] = useState("");
    const [Surname, setSurname] = useState("");
    const [Login, setLogin] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState("");
    const [Telephone, setTelephone] = useState("");
    const [Adress, setAdress] = useState("");
    const [Town, setTown] = useState("");
    const [Country, setCountry] = useState("");

    const [Pets, setPets] = useState([]);

    useEffect(() => {
        getPets();
    })

    const getPets = async () => {
        try {
            const DaneRef = await doc(db, props.Login, 'Dane');
            const petsCollecionRef = await collection(DaneRef,'Zwierzęta');
            const snapShot = await getDocs(petsCollecionRef);
            const documents = snapShot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setPets(documents);
        }catch(err) {
            console.error("Bład przy pobieraniu kolekcji: ",err);
            return [];
        }
    }

    useEffect( () => {
        getData()
    },[])


const getData = async () => {
        try{
            const docRef = doc(db,props.Login, "Dane");
            const docSnap = await getDoc(docRef);

            if(docSnap.exists()){
                setName(docSnap.data().Imię)
                setSurname(docSnap.data().Nazwisko)
                setEmail(docSnap.data().E_Mail)
                setTelephone(docSnap.data().Telefon);
                setAdress(docSnap.data().Adres)
                setTown(docSnap.data().Miasto)
                setCountry(docSnap.data().Kraj)
            }

        } catch (error){
            alert("Dokument nie istnieje");
        }
}

const OpenDrawer = (PetID) => {
    let element = document.getElementById(`Pet-Inf ${PetID}`);
    let element2 = document.getElementById(`Szuflada ${PetID}`);
    let element3 = document.getElementById(`Pet-Nagłówek ${PetID}`);
    //console.log(element.style.height);
    if(element.style.height === "0px"){

        element.style.height = "300px";
        element.style.padding = "10px 20px 10px 20px";
        element2.style.rotate = "-90deg";
        element3.style.borderRadius = "15px 15px 0px 0px";
        element3.style.transitionDelay = "0s";
    }
    else{
        element.style.height = "0px";
        element.style.padding = "0px 20px 0px 20px";
        element2.style.rotate = "0deg"
        element3.style.borderRadius = "15px";
        element3.style.transitionDelay = "0.5s";
    }
}
    return (
        <div className="Konto">
            <div className="Konto-Dane">
                <img src={Królik}/>

                <div className="Konto-Left">
                    <div className="Konto-Dane-Konta">
                        <h1>Dane konta</h1>
                        <h2>Imię i Nazwisko: {Name} {Surname}</h2><br/>
                        <h2>e-mail: {Email}</h2><br/>
                        <h2>tel.: {Telephone}</h2>
                    </div>
                </div>
                <h1 className="Konto-Nagłówek">Twoje dane</h1>
                <div className="Konto-Right">
                    <div className="Konto-Dane-TwójAdres">
                        <h1>Twój adres</h1>
                        <h2>{Adress}</h2>
                        <h2>{Town}</h2>
                        <h2>{Country}</h2>
                    </div>
                    <div className="Konto-Dane-Wysyłka">
                        <h1>Adresy do wysyłki</h1>
                        <h2>{Name} {Surname}</h2>
                        <h2>{Adress}</h2>
                        <h2>{Town}</h2>
                    </div>
                </div>
            </div>
            <div className="Pupile">
                <h1>Twoje Pupile</h1>
                <ul>

                    <li key="Rex">
                        <div className="Pupile-Nagłówek">
                            <h2 id={`Pet-Nagłówek Rex`}>Rex</h2>
                            <img className="Pupile-Guzik-Szuflada" id="Szuflada Rex" src={Strzałka} onClick={() => OpenDrawer("Rex")}/>
                        </div>

                        <div className="Pupiple-Informacje" id={`Pet-Inf Rex`} style={{height: 'fit-content'}}>
                            {'Pies' === 'Pies' &&
                                <img src={TypPies}/>
                            }
                            {'Pies' === 'Kot' &&
                                <img src={TypKot}/>
                            }
                            {'Pies' === 'Królik' &&
                                <img src={TypKrólik}/>
                            }
                            <p>Rasa: Test</p>
                            <p>Płeć: Test</p>
                            <p>Wiek: Test</p>
                            <p>Waga: Test</p>
                            <p>Dolegliwości: Test</p>
                            <button>Zobacz karmy</button>
                        </div>

                    </li>
                    {/*{Pets.map(pet => {
                        return (
                            <li key={pet.id}>
                                <div className="Pupile-Nagłówek">
                                    <h2 >{pet.id}</h2>
                                    <button onClick={OpenDrawer(`${pet.id}`)}><img/></button>
                                </div>

                                <div className="Pupiple-Informacje" id={`Pet-Inf ${pet.id}`} style={{height:'fit-content'}}>
                                    <p>Rasa: {pet.Rasa}</p>
                                    <p>Płeć: {pet.Płeć}</p>
                                    <p>Wiek: {pet.Wiek}</p>
                                    <p>Waga: {pet.Waga}</p>
                                    <p>Dolegliwości: {pet.Dolegliwości}</p>
                                    <button>Zobacz karmy</button>
                                </div>

                            </li>
                        )
                    })}*/}
                </ul>
            </div>
            <div className="Konto-Bottom">
                <img src={Królik}/>
            </div>
        </div>
    )
}



export default Konto;