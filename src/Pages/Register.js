import React, {useState, useEffect} from "react";
import {collection, getDoc, doc, deleteDoc, updateDoc, addDoc, setDoc} from "firebase/firestore";
import {db} from "../DataBase/init-firebase"

function Register(props) {

    const [Name, setName] = useState("");
    const [Surname, setSurname] = useState("");
    const [Login, setLogin] = useState('');
    const [Password, setPassword] = useState("");
    const [Zalogowano, setZalogowano] = useState(false);

    /*const createSubcollections = async (mainDocumentRef) => {


        try {
            await addDoc(collection(mainDocumentRef,'Zwierzęta'), {placeholderField: true});
            await addDoc(collection(mainDocumentRef,'Zamówienia'), {placeholderField: true});
            await addDoc(collection(mainDocumentRef,'Dane'), {Imię: Name, Nazwisko: Surname, Hasło: Password});
        } catch (error) {
            console.error(`Błąd przy tworzeniu podkolekcji : `, error); //'${subcollection}'
            throw error;
        }
    };*/

    const CreateUser = async () => {
        if (Login.trim() === '' || Password.trim() === '' || Name.trim() === '' || Surname.trim() === '') {
            alert('Nazwa kolekcji nie może być pusta.');
            return;
        }
        try {
            await setDoc(doc(db, Login,"Dane"),{Imię: Name, Nazwisko: Surname, Hasło: Password} /*{placeholderField: true}*/);
            const mainDocumentRef = doc(db, Login, "Dane");

            await addDoc(collection(mainDocumentRef, "Zwierzęta"), {placeholderField: true});
            await addDoc(collection(mainDocumentRef, "Zamówienia"), {placeholderField: true});

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

    /*const Logowanie = async () => {
        if (Login.trim() === '' || Password.trim() === '') {
            alert('Nazwa kolekcji nie może być pusta.');
            return;
        }
        try{
            const DaneRef = doc(db, Login, "Dane");
            const dane = await getDoc(DaneRef);
            if(Password !== dane.data().Hasło){
                //console.log(dane.data().Hasło);
                alert('Błędne hasło')
            }
            else {
                alert('Logowanie powiodło się')
            }
        }catch (error){
            console.error("Błąd przy logowaniu ", error);
            alert('Błąd przy logowaniu');
        }

    }*/


    return (
        <div>
            <div>Register</div>

            <div>
                <label htmlFor="Login">Login:</label>
                <textarea rows="1" type="text" value={Login} onChange={(e) => setLogin(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="Password">Password:</label>
                <textarea rows="1" type="text" value={Password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="Name">Name:</label>
                <textarea rows="1" type="text" value={Name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="Surname">Surname:</label>
                <textarea rows="1" type="text" value={Surname} onChange={(e) => setSurname(e.target.value)}/>
            </div>

            <button onClick={CreateUser}>Register</button>

            {/*<div>Logowanie</div>
            <div>
                <label htmlFor="Login">Login:</label>
                <textarea rows="1" type="text" value={Login} onChange={(e) => setLogin(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="Password">Password:</label>
                <textarea rows="1" type="text" value={Password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button onClick={Logowanie}>Login</button>
            <div>Imię: {Name} Surname: {Surname}</div>

*/}
        </div>

    )


}

export default Register;