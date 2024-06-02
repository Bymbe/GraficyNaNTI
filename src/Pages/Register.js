import React, {useState, useEffect} from "react";
import {collection, getDoc, doc, deleteDoc, updateDoc, addDoc, setDoc} from "firebase/firestore";
import {db} from "../DataBase/init-firebase"
import { Link } from "react-router-dom"
import Kot from "../Assets/kotek.png"
import Pies from "../Assets/piesek.png"

function Register(props) {

    const [Name, setName] = useState("");
    const [Surname, setSurname] = useState("");
    const [Login, setLogin] = useState('');
    const [Email, setEmail] = useState('');
    const [Telephone, setTelephone] = useState("");
    const [Password, setPassword] = useState("");
    const [PasswordRepeated, setPasswordRepeated] = useState("");
    const [Zalogowano, setZalogowano] = useState(false);


    const CreateUser = async () => {
        if (Login.trim() === '' || Password.trim() === '' || Name.trim() === '' || Surname.trim() === ''|| Surname.trim() === '') {
            alert('Nazwa kolekcji nie może być pusta.');
            return;
        }
        if (Password !== PasswordRepeated) {
            alert('Hasła nie są takie same')
            return;
        }
        try {
            await setDoc(doc(db, Login,"Dane"),{Imię: Name, Nazwisko: Surname, Hasło: Password, E_Mail: Email, Telefon: Telephone} /*{placeholderField: true}*/);
            const mainDocumentRef = doc(db, Login, "Dane");

            await addDoc(collection(mainDocumentRef, "Zwierzęta"), {placeholderField: true});
            await addDoc(collection(mainDocumentRef, "Zamówienia"), {placeholderField: true});
            await addDoc(collection(mainDocumentRef, "Koszyk"), {placeholderField: true});

            /*await setDoc(doc(db, Login, "Dane", "Zwierzęta", "Burek"), {Rasa: "Golden Retriver"}); // Dodawanie Pupila*/
            setZalogowano(true);
            props.handleCallBackZalogowo(Zalogowano);
            props.handleCallBackLogin(Login);
            alert(`Kolekcja '${Login}' oraz jej podkolekcje zostały utworzone.`);
        }catch (error) {
            console.error("Błąd przy tworzeniu kolekcji: ", error);
            alert('Błąd przy tworzeniu kolekcji');
        }
    };

    return (
        <div className="Register-Page">
            <div className="Register-Page-BackgroundImages">
                <img src={Kot}/>
                <img src={Pies}/>
            </div>

            <div className="Register">
                <h1>Register</h1>

                <div>
                    <label htmlFor="Login">Login:</label>
                    <textarea rows="1" type="text" value={Login} onChange={(e) => setLogin(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="Password">Password:</label>
                    <textarea rows="1" type="text" value={Password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="Password">Repeat Password:</label>
                    <textarea rows="1" type="text" value={PasswordRepeated}
                              onChange={(e) => setPasswordRepeated(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="EMail">E-mail:</label>
                    <textarea rows="1" type="text" value={Email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="Imię">Imię:</label>
                    <textarea rows="1" type="text" value={Name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="Nazwisko">Nazwisko:</label>
                    <textarea rows="1" type="text" value={Surname} onChange={(e) => setSurname(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="Tel">Telefon:</label>
                    <textarea rows="1" type="text" value={Telephone} onChange={(e) => setTelephone(e.target.value)}/>
                </div>


                <button onClick={CreateUser}>Register</button>

                {Zalogowano ? (
                    <div>
                        <h1>Zakładanie konta zakończyło się sukcesem!</h1>
                        <h2>Możesz teraz przejść do swojego profilu</h2>
                        <Link to="/Konto">
                            <button>Przejdź do Profilu</button>
                        </Link>
                    </div>
                ) : (<div style={{display: "none"}}></div>)}
            </div>


        </div>

    )


}

export default Register;