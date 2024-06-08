import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import Karma from "../Assets/karma.png";
import {addDoc, collection, doc, setDoc} from "firebase/firestore";
import {db} from "../DataBase/init-firebase";

function Kwestionariusz(props) {

    /*Flagi*/
    const [Dalej, setDalej] = useState(false);
    const [DodajDoKoszyka, setDodajDoKoszyka] = useState(false);
    const [Rejestracja, setRejestracja] = useState(false);
    const [Zalogowano, setZalogowano] = useState(false);

    /*Rejestracja */
    const [Name, setName] = useState("");
    const [Surname, setSurname] = useState("");
    const [Login, setLogin] = useState('');
    const [Email, setEmail] = useState('');
    const [Telephone, setTelephone] = useState("");
    const [Password, setPassword] = useState("");
    const [PasswordRepeated, setPasswordRepeated] = useState("");
    const [Regulamin, setRegulamin] = useState(false);

    /*Pupil*/
    const [PupilType, setPupilType] = useState("Pies");
    const [PupilName, setPupilName] = useState("");
    const [PupilBreed, setPupilBreed] = useState("Beagle");
    const [PupilAge, setPupilAge] = useState("");
    const [PupilMonth, setPupilMonth] = useState("");
    const [PupilWeight, setPupilWeight] = useState("");
    const [PupilGender, setPupilGender] = useState("Pies");
    const [PupilSterylized, setPupilSterylized] = useState("Nie");
    const [PupilActif, setPupilActif] = useState("Mała aktywność");
    const [WybranaKarma, setWybranaKarma] = useState("Kwiaciara");
    const [CenaWybranejKarmy, setCenaWybranejKarmy] = useState(49.99);

    const dalejFunction = async ()=> {
        setDalej(true);
        setRejestracja(false);

        const element = document.getElementById("Dalej");
        element.scrollIntoView({behavior: "smooth"});
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

        const element = document.getElementById("Register");
        element.scrollIntoView({behavior: "smooth"});
        return;
    }

    useEffect(() => {
        if(props.Zalogowano === true && props.UpdatingPet !== ""){
            getPet(props.UpdatingPet);
        }
    }, []);

    const getPet = async (PetID) => {

    }

    const CreateUser = async () => {

        if (Regulamin === false) {
            alert('Zaznacz wszystkie wymagane pola')
            return;
        }

        if (Login.trim() === '' || Password.trim() === '' || Name.trim() === '' || Surname.trim() === '') {
            alert('Nazwa kolekcji nie może być pusta.');
            return;
        }

        if (Password !== PasswordRepeated) {
            alert('Hasła nie są takie same')
            return;
        }
        try {
            await setDoc(doc(db, Login,"Dane"),{Imię: Name, Nazwisko: Surname, Hasło: Password, E_Mail: Email, Telefon: Telephone} /*{placeholderField: true}*/);
            await setDoc(doc(db, Login, "Dane", "Zwierzęta", PupilName), {Typ: PupilType, Rasa: PupilBreed, Wiek: PupilAge, Miesiące: PupilMonth, Waga: PupilWeight, Płeć: PupilGender, Sterylizacja: PupilSterylized,  Aktywność: PupilActif, PrzypisanaKarma: WybranaKarma });
            await setDoc(doc(db, Login, "Dane", "Koszyk", WybranaKarma), {Cena: CenaWybranejKarmy, Amount: 1});

            setZalogowano(true);
            props.handleCallBackZalogowo(true);
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
                <input type="text" id="PetNameInput" placeholder="Imię pupila"   onChange={(e) => setPupilName(e.target.value)}/> {/*value={Zalogowano ? {pupil.id} : ""}*/}
            </div>
            <div className="Kwestionariusz-question">
                Jakiej rasy jest twój pupil?
            </div>
            <div className="RaceSelect">
                <select name="rasy" id="rasy"  onChange={(e) => setPupilBreed(e.target.value)}>
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
                <input type="text" id="PetAgeYearsInput" placeholder="Wiek pupila w latach" onChange={(e) => setPupilAge(e.target.value + ' lat')}/>
                <h10>lata</h10>
                <input type="text" id="PetAgeMonthsInput" placeholder="Wiek pupila w miesiącach" onChange={(e) => setPupilMonth(e.target.value + ' miesięcy')}/>
                <h10>miesiące</h10>
            </div>
            <div className="Kwestionariusz-question">
                Ile kilogramów waży twój pupil?
            </div>
            <div className="WeightSelect">
                <input type="text" id="PetWeightInput" placeholder="Waga pupila w kg" onChange={(e) => setPupilWeight(e.target.value)}/>
            </div>
            <div className="Kwestionariusz-question">
                Czy twój pupil to pies czy suczka?
            </div>
            <div className="SexSelect">
                <select name="plec" id="plec" onChange={(e) => setPupilGender(e.target.value)}>
                    <option value="samiec">Pies</option>
                    <option value="samica">Suczka</option>
                </select>
            </div>
            <div className="Kwestionariusz-question">
                Czy twój pupil jest po sterylizacji lub kastracji?
            </div>
            <div className="SterilizedSelect">
                <select name="sterylizacja" id="sterylizacja" onChange={(e) => setPupilSterylized(e.target.value)}>
                    <option value="no">Nie</option>
                    <option value="yes">Tak</option>
                </select>
            </div>
            <div className="Kwestionariusz-question">
                Jak bardzo aktywny jest twój pupil?
            </div>
            <div className="ActivitySelect">
                <select name="activity" id="activity" onChange={(e) => setPupilActif(e.target.value)}>
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
                        <div className="Karma-popup" id="Dalej">
                            <h1>Proponowana Karma</h1>

                            <h4>{WybranaKarma}</h4>
                            <img src={Karma}/>
                            <h3>{CenaWybranejKarmy} zł</h3>
                            <h2>Super dobra karma z płatków kwiatów</h2>
                            <Link to="/Kwiaciara" onClikc={props.handleCallBackKarma(WybranaKarma)}>
                                <button>Czytaj więcej</button>
                            </Link>
                            {Zalogowano ? (<Link to="/Koszyk">
                                <button>Dodaj do koszyka</button>  {/*Dodanie karmy dla zalogowanego użytkownika i pupila i karmę dla Pupila -> DodajKarmę(db,Login,Dane,Koszyk,NazwaKarmy*/}
                            </Link>) : (
                                <button onClick={DodajDoKoszykaFunction}>Dodaj do koszyka</button>
                            )}

                        </div>
                    ) : (<div style={{display: "none"}} id="Dalej"></div>)}
                </div>

            </div>

            <div className="DDK">
                {DodajDoKoszyka ? (
                    <div className="DodajDoKoszyka-Popup">
                        <h1>Czy chcesz założyć konto?</h1>

                        <button onClick={RejestracjaFunction}>Załóż konto</button>

                        <Link to="/Koszyk">
                            <button>Kupuję jednorazowo</button> {/*Dodanie karmy dla wirtualnego użytkownika -> DodajKarmę(db,Virtual,Dane,Koszyk,NazwaKarmy*/}
                        </Link>
                        <h2></h2>
                    </div>
                ) : (<div style={{display: "none"}}></div>)}

            </div>
            {Rejestracja ? (
            <div className="Rejestr">


                    <div className="RejestrPopup" id="Register">

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
            ) : (<div style={{display: "none"}} id="Register"></div>)}
        </div>
    )
}

export default Kwestionariusz;