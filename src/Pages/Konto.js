import React, {useEffect, useState} from 'react'
import {db} from "../DataBase/init-firebase";
import {collection, getDoc, getDocs,doc, deleteDoc, updateDoc, addDoc, setDoc, onSnapshot} from "firebase/firestore";
import Królik from "../Assets/kroliczek.png";
import Strzałka from "../Assets/Strzałka.svg";
import TypPies from "../Assets/Pies_EBIZNES.png"
import TypKot from "../Assets/Kot-EBIZNES.png"
import TypKrólik from "../Assets/Królik_EBIZNES.png"
import Ołówek from "../Assets/Ołówek.svg"
import Plus from "../Assets/Plus.svg"
import {Link} from "react-router-dom";



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
    const [EditingPet, setEditingPet] = useState("");

    const [Dane, setDane] = useState([]);
    const [Pets, setPets] = useState([]);

    const [RasaTemp, setRasaTemp] = useState("");
    const [PłećTemp, setPłećTemp] = useState("");
    const [WiekTemp, setWiekTemp] = useState("");
    const [MiesiącTemp, setMiesiącTemp] = useState("");
    const [WagaTemp, setWagaTemp] = useState("");
    const [SterylizedTemp, setSterylizedTemp] = useState("");
    const [AktywnośćTemp, setAktywnośćTemp] = useState("");

    const [EditAdressFlag, setEditAdressFlag] = useState(false);

    useEffect(() => {
        console.log("UseEfect->getPets");
        console.log(props.Login);
        getPets();

    },[])

    const getPets = async () => {
        try {
            const DaneRef = await doc(db, props.Login, 'Dane');

            const docSnap = await getDoc(DaneRef);

            if(docSnap.exists()){

                setDane(docSnap.data());

                setName(docSnap.data().Imię)
                setSurname(docSnap.data().Nazwisko)
                setEmail(docSnap.data().E_Mail)
                setTelephone(docSnap.data().Telefon);
                setAdress(docSnap.data().Adres)
                setTown(docSnap.data().KodPocztowy)
                setCountry(docSnap.data().Kraj)
            }

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


const OpenDrawer = (PetID) => {
        console.log(PetID);
    let element = document.getElementById(`Pet-Inf ${PetID}`);
    let element2 = document.getElementById(`Szuflada ${PetID}`);
    let element3 = document.getElementById(`Pet-Nagłówek ${PetID}`);
    //console.log(element.style.height);
    if(element.style.height === "0px"){

        element.style.height = "350px";
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

const EditPet = async (PetID) => {
        if(PetID === EditingPet){
            setEditingPet("");
            getPets();
        }
        else {
            try{
                const docRef = await getDoc(doc(db, props.Login, 'Dane','Zwierzęta', PetID));
                setRasaTemp(docRef.data().Rasa);
                setPłećTemp(docRef.data().Płeć);
                setWagaTemp(docRef.data().Waga);
                setWiekTemp(docRef.data().Wiek);
                setMiesiącTemp(docRef.data().Miesiące)
                setSterylizedTemp(docRef.data().Sterylizacja);
                setAktywnośćTemp(docRef.data().Aktywność);
            }catch (err){
                console.log(err);
            }
            setEditingPet(PetID);
            getPets();
        }
}

const UpdatePet = async (PetID) => {
    try{
        //const DaneRef = await doc(db, props.Login, 'Dane');
        //const petsCollecionRef = await collection(DaneRef,'Zwierzęta');
        await updateDoc(doc(db, props.Login, 'Dane','Zwierzęta', PetID), {
            Rasa: RasaTemp, Płeć: PłećTemp, Waga: WagaTemp, Wiek: WiekTemp, Miesiące: MiesiącTemp, Sterylizacja: SterylizedTemp, Aktywność: AktywnośćTemp
        });
        setEditingPet("");
        setRasaTemp("");
        setPłećTemp("");
        setWagaTemp("");
        setWiekTemp("");
        setMiesiącTemp("");
        setSterylizedTemp("");
        setAktywnośćTemp("");
        getPets();


    }catch(err) {
        console.log(err);
    }
}

const EditAdress =  async () => {
        if(EditAdressFlag === false){
            setEditAdressFlag(true)
        }
        else{
            setEditAdressFlag(false);
            try{
                await updateDoc(doc(db, props.Login, 'Dane'), {
                    Adres: Adress, KodPocztowy: Town, Kraj: Country
                });

            } catch (err){
                console.log(err)
            }
        }
        console.log(EditAdressFlag);
}
    return (
        <div className="Konto">
            <br/><br/><br/><br/><br/><br/>
            <div className="Konto-Dane">
                <img id="Konto-Królik-Top" src={Królik}/>

                <div className="Konto-Left">
                    <div className="Konto-Dane-Konta">
                        <h1>Dane konta</h1>
                        <h2>Imię i Nazwisko: {Dane.Imię} {Dane.Nazwisko}</h2><br/>
                        <h2>e-mail: {Dane.E_Mail}</h2><br/>
                        <h2>tel.: {Dane.Telefon}</h2>
                    </div>
                </div>
                <h1 className="Konto-Nagłówek">Twoje dane</h1>
                <div className="Konto-Right">
                    <div className="Konto-Dane-TwójAdres">

                        <h1>Twój adres <img className="Konto-Ołówek" src={Ołówek} onClick={() => EditAdress()}/></h1>
                        {EditAdressFlag ? (
                            <div><h2>Adres: <textarea rows="1" value={Adress}
                                                      onChange={(e) => setAdress(e.target.value)}></textarea></h2>
                                <h2> Kod pocztowy: <textarea rows="1" value={Town}
                                                             onChange={(e) => setTown(e.target.value)}></textarea></h2>
                                <h2>Kraj: <textarea rows="1" value={Country}
                                                    onChange={(e) => setCountry(e.target.value)}></textarea></h2></div>


                        ) : (<div><h2>Adres: {Adress}</h2>
                            <h2> Kod pocztowy: {Town}</h2>
                            <h2>Kraj: {Country}</h2></div>)
                        }

                    </div>
                    <div className="Konto-Dane-Wysyłka">
                        <h1>Adresy do wysyłki</h1>
                        <h2> Imię i Nazwisko: {Dane.Imię} {Dane.Nazwisko}</h2>
                        <h2>Adres: {Adress}</h2>
                        <h2> Kod pocztowy: {Town}</h2>
                    </div>
                </div>
            </div>
            <div className="Pupile">
                <h1>Twoje Pupile</h1>
                <ul>
                    {Pets.map(pet => {
                        /*return (*/
                        if (pet.id !== EditingPet) {
                            return (<li key={pet.id}>
                                <div className="Pupile-Nagłówek" id={`Pet-Nagłówek ${pet.id}`}>
                                    <h2>{pet.id}</h2>
                                    <img className="Pupile-Ołówek" src={Ołówek} onClick={() => EditPet(pet.id)}/>
                                    <img className="Pupile-Guzik-Szuflada" id={`Szuflada ${pet.id}`} src={Strzałka}
                                         onClick={() => OpenDrawer(`${pet.id}`)}/>

                                </div>

                                <div className="Pupiple-Informacje" id={`Pet-Inf ${pet.id}`}>
                                    {pet.Typ === "Pies" &&
                                        <img src={TypPies}/>
                                    }
                                    {pet.Typ === "Kot" &&
                                        <img src={TypKot}/>
                                    }
                                    {pet.Typ === "Królik" &&
                                        <img src={TypKrólik}/>
                                    }


                                    <p>Rasa: {pet.Rasa}</p>
                                    <p>Płeć: {pet.Płeć}</p>
                                    <p>Wiek: {pet.Wiek} lat i {pet.Miesiące} miesięcy</p>
                                    <p>Waga: {pet.Waga}</p>
                                    <p>Sterylizacja: {pet.Sterylizacja}</p>
                                    <p>Aktywnosć: {pet.Aktywność}</p>
                                    <div className="Pupile-Guziki">
                                        <Link to="/Kwiaciara" id="Zobacz-karmy"
                                              onClick={props.handleCallBackKarma(pet.PrzypisanaKarma)}>
                                            <button>Zobacz karmy</button>
                                        </Link>
                                        <Link to="/Kwestionariusz" id="Zaktualizuj-karmę" onClick={() => {
                                            props.handleCallBackPupilDoZmiany(`${pet.id}`)
                                        }}>
                                            <button>Zaktualizuj karmę</button>
                                        </Link>
                                    </div>


                                </div>

                            </li>)

                        } else {
                            return (<li key={pet.id}>
                                <div className="Pupile-Nagłówek">
                                    <h2 id={`Pet-Nagłówek ${pet.id}`}>{pet.id}</h2>
                                    <img className="Pupile-Ołówek" src={Ołówek} onClick={() => EditPet(pet.id)}/>
                                    <img className="Pupile-Guzik-Szuflada" id={`Szuflada ${pet.id}`} src={Strzałka}
                                         onClick={() => OpenDrawer(`${pet.id}`)}/>

                                </div>

                                <div className="Pupiple-Informacje" id={`Pet-Inf ${pet.id}`}>
                                    {pet.Typ === "Pies" &&
                                        <img src={TypPies}/>
                                    }
                                    {pet.Typ === "Kot" &&
                                        <img src={TypKot}/>
                                    }
                                    {pet.Typ === "Królik" &&
                                        <img src={TypKrólik}/>
                                    }
                                    <p>Rasa: <textarea rows="1" value={RasaTemp}
                                                       onChange={(e) => setRasaTemp(e.target.value)}></textarea></p>
                                    <p>Płeć: <textarea rows="1" value={PłećTemp}
                                                       onChange={(e) => setPłećTemp(e.target.value)}></textarea></p>
                                    <p>Wiek: <textarea rows="1" value={WiekTemp}
                                                       onChange={(e) => setWiekTemp(e.target.value)}></textarea> lat i
                                        <textarea rows="1" value={MiesiącTemp}
                                                  onChange={(e) => setMiesiącTemp(e.target.value)}></textarea> miesięcy
                                    </p>
                                    <p>Waga: <textarea rows="1" value={WagaTemp}
                                                       onChange={(e) => setWagaTemp(e.target.value)}></textarea></p>
                                    <p>Sterylizacja: <textarea rows="1" value={SterylizedTemp}
                                                               onChange={(e) => setSterylizedTemp(e.target.value)}></textarea>
                                    </p>
                                    <p>Aktywność: <textarea rows="1" value={AktywnośćTemp}
                                                            onChange={(e) => setAktywnośćTemp(e.target.value)}></textarea>
                                    </p>
                                    <button onClick={() => UpdatePet(`${pet.id}`)}>Zapisz</button>
                                </div>

                            </li>)
                        }
                        /*)*/

                        /*)*/
                    })}

                    <li className="Pupile-Dodaj">
                        <Link to="/Kwestionariusz" className="Link" id="Pupile-Link">
                            <h2>Dodaj nowego pupila</h2>
                            <img src={Plus}/>
                        </Link>
                    </li>


                </ul>
            </div>
            <div className="Konto-Bottom">
                <img src={Królik}/>
            </div>
        </div>
    )
}


export default Konto;