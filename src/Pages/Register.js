import React, {useState, useEffect} from "react";
import {collection, getDocs, doc, deleteDoc, updateDoc, addDoc} from "firebase/firestore";
import {db} from "../DataBase/init-firebase"

function Register() {

    const [Name, setName] = useState("");
    const [Surname, setSurname] = useState("");
    const [Login, setLogin] = useState('');
    const [Password, setPassword] = useState("");

    const createSubcollections = async (mainDocumentRef) => {


        try {
            await addDoc(collection(mainDocumentRef,'Zwierzęta'), {placeholderField: true});
            await addDoc(collection(mainDocumentRef,'Zamówienia'), {placeholderField: true});
            await addDoc(collection(mainDocumentRef,'Dane'), {Imię: Name, Nazwisko: Surname, Hasło: Password});
        } catch (error) {
            console.error(`Błąd przy tworzeniu podkolekcji : `, error); //'${subcollection}'
            throw error;
        }
    };

    const CreateUser = async () => {
        if (Login.trim() === '' || Password.trim() === '' || Name.trim() === '' || Surname.trim() === '') {
            alert('Nazwa kolekcji nie może być pusta.');
            return;
        }
        try {
            const mainDocumentRef = await addDoc(collection(db, Login), {placeholderField: true});
            await createSubcollections(doc(db, Login, mainDocumentRef.id));
            alert(`Kolekcja '${Login}' oraz jej podkolekcje zostały utworzone.`);
        }catch (error) {
            console.error("Błąd przy tworzeniu kolekcji: ", error);
            alert('Błąd przy tworzeniu kolekcji');
        }
    };

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


        </div>

    )


}

export default Register;