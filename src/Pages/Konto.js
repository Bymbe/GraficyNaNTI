import React, {useEffect, useState} from 'react'
import {db} from "../DataBase/init-firebase";
import {collection, getDoc, getDocs,doc, deleteDoc, updateDoc, addDoc, setDoc} from "firebase/firestore";
import Królik from "../Assets/kroliczek.png";



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
                {/*<ul>

                    {Pets.map(pet => {
                        return (
                            <li key={pet.id}>
                                <h2 className="Pupile-Nagłówek">{pet.id}</h2>
                                <div className="Pupiple-Informacje">
                                    <p>Rasa: {pet.Rasa}</p>
                                    <p>Płeć: {pet.Płeć}</p>
                                    <p>Wiek: {pet.Wiek}</p>
                                    <p>Waga: {pet.Waga}</p>
                                    <p>Dolegliwości: {pet.Dolegliwości}</p>
                                    <button>Zobacz karmy</button>
                                </div>

                            </li>
                        )
                    })}
                </ul>*/}
            </div>
            <div className="Konto-Bottom">
                <img src={Królik}/>
            </div>
        </div>
    )
}

export default Konto;