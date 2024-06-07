import React, {useState} from 'react'
import {Link} from "react-router-dom";
import Karma from "../Assets/karma.png";
import {addDoc, collection, doc, setDoc} from "firebase/firestore";
import {db} from "../DataBase/init-firebase";

function Kwestionariusz(props) {

    const [Dalej, setDalej] = useState(false);
    const [DodajDoKoszyka, setDodajDoKoszyka] = useState(false);
    const [Rejestracja, setRejestracja] = useState(false);
    const [Name, setName] = useState("");
    const [Surname, setSurname] = useState("");
    const [Login, setLogin] = useState('');
    const [Email, setEmail] = useState('');
    const [Telephone, setTelephone] = useState("");
    const [Password, setPassword] = useState("");
    const [PasswordRepeated, setPasswordRepeated] = useState("");
    const [Zalogowano, setZalogowano] = useState(false);
    const [Regulamin, setRegulamin] = useState(false);

    const dalejFunction = async ()=> {
        setDalej(true);
        setRejestracja(false);
        return;
    }
    const DodajDoKoszykaFunction = async ()=> {
        setDodajDoKoszyka(true);
        setRejestracja(false);
        return;
    }

    const RejestracjaFunction = async ()=> {
        setRejestracja(true);
        setDalej(false);
        setDodajDoKoszyka(false);
        return;
    }

    const CreateUser = async () => {

        if (Regulamin === false) {
            alert('Zaznacz wszystkie wymagane pola')
            return;
        }

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

        <div className="Kwestionariusz">
            <div className="Kwestionariusz-header">
                SPERSONALIZOWANA KARMA DLA TWOJEGO PUPILA!
            </div>
            <div className="Kwestionariusz-subheader">
                Odpowiedz na kilka pytań na temat swojego pupila aby dostać propozycje dopasowanej do jego potrzeb karmy
            </div>
            <div className="Kwestionariusz-question">
                Jak wabi się twój pupil?
            </div>
            <div>
                <input type="text" id="PetNameInput" placeholder="Imię pupila"/>
            </div>
            <div className="Kwestionariusz-question">
                Jakiej rasy jest twój pupil?
            </div>
            <div className="RaceSelect">
                <select name="rasy" id="rasy">
                    <option value="Beagle">Beagle</option>
                    <option value="Chihuahua">Chihuahua</option>
                    <option value="GoldenRetirever">Golden Retriever</option>
                    <option value="Husky">Husky</option>
                    <option value="Jamnik">Jamnik</option>
                    <option value="Mieszaniec">Mieszaniec</option>
                    <option value="OwczarekNiemiecki">Owczarek Niemiecki</option>
                    <option value="Pudel">Pudel</option>
                    <option value="WestHighlandWhiteTerrier">West Highland White Terrier</option>
                </select>
            </div>
            <div className="Kwestionariusz-question">
                W jakim wieku jest twój pupil?
            </div>
            <div className="AgeSelect">
                <input type="text" id="PetAgeYearsInput" placeholder="Wiek pupila w latach"/>
                <h10>lata</h10>
                <input type="text" id="PetAgeMonthsInput" placeholder="Wiek pupila w miesiącach"/>
                <h10>miesiące</h10>
            </div>
            <div className="Kwestionariusz-question">
                Ile kilogramów waży twój pupil?
            </div>
            <div className="WeightSelect">
                <input type="text" id="PetWeightInput" placeholder="Waga pupila w kg"/>
            </div>
            <div className="Kwestionariusz-question">
                Czy twój pupil to pies czy suczka?
            </div>
            <div className="SexSelect">
                <select name="plec" id="plec">
                    <option value="samiec">Pies</option>
                    <option value="samica">Suczka</option>
                </select>
            </div>
            <div className="Kwestionariusz-question">
                Czy twój pupil jest po sterylizacji lub kastracji?
            </div>
            <div className="SterilizedSelect">
                <select name="sterylizacja" id="sterylizacja">
                    <option value="no">Nie</option>
                    <option value="yes">Tak</option>
                </select>
            </div>
            <div className="Kwestionariusz-question">
                Jak bardzo aktywny jest twój pupil?
            </div>
            <div className="ActivitySelect">
                <select name="activity" id="activity">
                    <option value="low">Mała aktywność</option>
                    <option value="medium">Przeciętna aktywność</option>
                    <option value="high">Wysoka aktywność</option>
                </select>
            </div>
            <div className="Kwestionariusz-question">
                Które ze składników chcesz wykluczyć z karmy?
            </div>
            <div>
                <h11>
                    Mięso:
                </h11>
            </div>
            <div className="BannedIngredientsCheck">
                <input type="checkbox" id="ingredient1" name="kaczka" value="Kaczka"/>
                <h10>Kaczka</h10>
            </div>
            <div className="BannedIngredientsCheck">
                <input type="checkbox" id="ingredient2" name="kurczak" value="Kurczak"/>
                <h10>Kurczak</h10>
            </div>
            <div className="BannedIngredientsCheck">
                <input type="checkbox" id="ingredient3" name="wieprzowina" value="Wieprzowina"/>
                <h10>Wieprzowina</h10>
            </div>
            <div className="BannedIngredientsCheck">
                <input type="checkbox" id="ingredient4" name="wolowina" value="Wołowina"/>
                <h10>Wołowina</h10>
            </div>
            <div>
                <h11>
                    Inne:
                </h11>
            </div>
            <div className="BannedIngredientsCheck">
                <input type="checkbox" id="ingredient5" name="gluten" value="Gluten"/>
                <h10>Gluten</h10>
            </div>
            <div className="BannedIngredientsCheck">
                <input type="checkbox" id="ingredient6" name="kukurydza" value="Kukurydza"/>
                <h10>Kukurydza</h10>
            </div>
            <div className="BannedIngredientsCheck">
                <input type="checkbox" id="ingredient7" name="zboza" value="Zboża"/>
                <h10>Zboża</h10>
            </div>
            <div>
                <button onClick={dalejFunction}>Dalej</button>
                <div className="ProponowanaKarma">
                    {Dalej ? (
                        <div className="Karma-popup">
                            <h1>Proponowana Karma</h1>

                            <h4>"Kwiaciara"</h4>
                            <img src={Karma}/>
                            <h3>49,99 zł</h3>
                            <h2>Super dobra karma z płatków kwiatów</h2>
                            <Link to="/Kwiaciara">
                                <button>Czytaj więcej</button>
                            </Link>
                            {Zalogowano ? (<Link to="/Koszyk">
                                <button>Dodaj do koszyka</button>
                            </Link>) : (
                                <button onClick={DodajDoKoszykaFunction}>Dodaj do koszyka</button>
                            )}

                            <h1></h1>


                            {/*<h2>Możesz teraz przejść do swojego profilu</h2>*/}
                            {/*<Link to="/Konto">*/}
                            {/*    <button>Przejdź do Profilu</button>*/}
                            {/*</Link>*/}
                        </div>
                    ) : (<div style={{display: "none"}}></div>)}
                </div>

            </div>

            <div className="DDK">
                {DodajDoKoszyka ? (
                    <div className="DodajDoKoszyka-Popup">
                        <h1>Czy chcesz założyć konto?</h1>
                        {/*<h2>Możesz teraz przejść do swojego profilu</h2>*/}

                        <button onClick={RejestracjaFunction}>Załóż konto</button>

                        <Link to="/Koszyk">
                            <button>Kupuję jednorazowo</button>
                        </Link>
                        <h2></h2>
                    </div>
                ) : (<div style={{display: "none"}}></div>)}

            </div>
            {Rejestracja ? (
            <div className="Rejestr">


                    <div className="RejestrPopup">

                        <div className="Register1">
                            <h1>Register</h1>
                            <h3></h3>

                            <div className="Register-Text-AreaKW">
                                <label htmlFor="Login">Login:</label>
                                <textarea rows="1" type="text" value={Login}
                                          onChange={(e) => setLogin(e.target.value)}/>
                            </div>
                            <div className="Register-Text-AreaKW">
                                <label htmlFor="Password">Password:</label>
                                <textarea rows="1" type="text" value={Password}
                                          onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <div className="Register-Text-AreaKW">
                                <label htmlFor="Password">Repeat Password:</label>
                                <textarea rows="1" type="text" value={PasswordRepeated}
                                          onChange={(e) => setPasswordRepeated(e.target.value)}/>
                            </div>
                            <div className="Register-Text-AreaKW">
                                <label htmlFor="EMail">E-mail:</label>
                                <textarea rows="1" type="text" value={Email}
                                          onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="Register-Text-AreaKW">
                                <label htmlFor="Imię">Imię:</label>
                                <textarea rows="1" type="text" value={Name} onChange={(e) => setName(e.target.value)}/>
                            </div>
                            <div className="Register-Text-AreaKW">
                                <label htmlFor="Nazwisko">Nazwisko:</label>
                                <textarea rows="1" type="text" value={Surname}
                                          onChange={(e) => setSurname(e.target.value)}/>
                            </div>
                            <div className="Register-Text-AreaKW">
                                <label htmlFor="Tel">Telefon:</label>
                                <textarea rows="1" type="text" value={Telephone}
                                          onChange={(e) => setTelephone(e.target.value)}/>
                            </div>
                            <div className="Register-CheckBox-AreaKW">
                                <input type="checkbox" onChange={(e) => setRegulamin(!Regulamin)}/>
                                <h3 data-end="*">Akceptuję warunki regulaminu</h3>
                            </div>


                            <button onClick={CreateUser}>Register</button>

                            {Zalogowano ? (
                                <div className="Register-Popup">
                                    <h1>Zakładanie konta zakończyło się sukcesem!</h1>
                                    <h2>Możesz teraz przejść do swojego profilu</h2>
                                    <Link to="/Konto">
                                        <button>Przejdź do Profilu</button>
                                    </Link>
                                </div>
                            ) : (<div style={{display: "none"}}></div>)}
                        </div>
                        {/*<h1>Czy chcesz założyć konto?</h1>*/}
                        {/*/!*<h2>Możesz teraz przejść do swojego profilu</h2>*!/*/}

                        {/*<button onClick={RejestracjaFunction}>Załóż konto</button>*/}

                        {/*<Link to="/Koszyk">*/}
                        {/*    <button>Kupuję jednorazowo</button>*/}
                        {/*</Link>*/}
                        {/*<h2></h2>*/}
                    </div>

            </div>
            ) : (<div style={{display: "none"}}></div>)}
        </div>
    )
}

export default Kwestionariusz;