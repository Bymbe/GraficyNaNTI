import React, {useEffect, useRef, useState} from 'react'
import {Link, useLocation} from "react-router-dom";
import Karma from "../Assets/karma.png";
import {addDoc, collection, doc, getDoc, getDocs, query, setDoc, updateDoc, where} from "firebase/firestore";
import {db} from "../DataBase/init-firebase";

function Kwestionariusz(props) {
    /*Flagi*/
    const [Dalej, setDalej] = useState(false);
    const [DodajDoKoszyka, setDodajDoKoszyka] = useState(false);
    const [Rejestracja, setRejestracja] = useState(false);
    const [Zalogowano, setZalogowano] = useState(false);
    const [PopupDodanie, setPopupDodanie] = useState(false);

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
    const [WybranaKarma, setWybranaKarma] = useState("");
    const [CenaWybranejKarmy, setCenaWybranejKarmy] = useState(49.99);

    /*Updatowanie Pupila*/
    const [DanePupila, setDanePupila] = useState([]);
    const firstRender = useRef(true);
    /*Filtry*/
    const [selectedMeatTypes, setSelectedMeatTypes] = useState([]);
    const [selectedDolegliwosci, setSelectedDolegliwosci] = useState([]);
    const [karmy, setKarmy] = useState([]);

    /*const location = useLocation();*/

/*    useEffect(() => {
        const currentPath = location.pathname;

        return () => {
            if(props.WTrakcieKwestionariusza === false){
                console.log("useEffect-> W trakcie = false")
                /!*addPet();*!/
            }

            console.log('Opuszczono trasę:', currentPath);
        };
    }, [location]);*/

    const handleCheckboxChange = (meatType) => {
        setSelectedMeatTypes((prevSelected) =>
            prevSelected.includes(meatType)
                ? prevSelected.filter((type) => type !== meatType)
                : [...prevSelected, meatType]
        );
    };

    const handleDolegliwoscChange = (dolegliwosc) => {
        setSelectedDolegliwosci((prevSelected) =>
            prevSelected.includes(dolegliwosc)
                ? prevSelected.filter((item) => item !== dolegliwosc)
                : [...prevSelected, dolegliwosc]
        );
    };

    useEffect(() => {
        setPupilName(props.ImiePupila)
    }, []);



    const dalejFunction = async ()=> {
        console.log("DalejFunction")

        setDalej(true);
        setRejestracja(false);

        try {
            const karmyCollection = collection(db, 'Karmy');

            let meatTypesQuery;
            if (selectedMeatTypes.length > 0) {
                meatTypesQuery = query(
                    karmyCollection,
                    where('MeatType', 'not-in', selectedMeatTypes)
                );
            } else {
                meatTypesQuery = query(karmyCollection);
            }

            const querySnapshot = await getDocs(meatTypesQuery);
            let result = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

            if (selectedDolegliwosci.length > 0) {
                result = result.filter(item => selectedDolegliwosci.includes(item.Dolegliwość));
            }

            setKarmy(result);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }

        /*const element = document.getElementById("Dalej");
        element.scrollIntoView({behavior: "smooth"});*/
        return;
    }

    const DodajDoKoszykaFunction = async (karmaID)=> {
        console.log("DodajDoKoszykaFunction")
        setDodajDoKoszyka(true);
        setRejestracja(false);
        setWybranaKarma(karmaID)
        return;
    }

    const RejestracjaFunction = async ()=> {
        console.log("RejestracjaFunction")
        setRejestracja(true);
        setDalej(false);
        setDodajDoKoszyka(false);

        /*const element = document.getElementById("Register");
        element.scrollIntoView({behavior: "smooth"});*/
        return;
    }


    useEffect(() => {

        console.log(props.WTrakcieKwestionariusza)
        if(props.WTrakcieKwestionariusza === true){
            console.log("UseEffect -> getTemp")

            getTemp();
            return;
        }

        if(props.Zalogowano === true && props.PupilDoZmiany !== ""){
            console.log("UseEffect -> getPet")
            getPet();
            return;
        }
    }, [props.Zalogowano, props.PupilDoZmiany]);

    /*useEffect(() => {
        if(props.ImiePupila !== ""){
            setPupilName(props.ImiePupila);
        }
    },[])*/

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false; // Ustawiamy flagę na false po pierwszym renderze
            return;
        }

        if (DanePupila && Object.keys(DanePupila).length > 0 && props.WTrakcieKwestionariusza === false) {
            console.log("UseEffect -> DanePupila normalne")
            setPupilName(props.PupilDoZmiany);
            setPupilBreed(DanePupila.Rasa);
            setPupilAge(DanePupila.Wiek);
            setPupilMonth(DanePupila.Miesiące);
            setPupilWeight(DanePupila.Waga);
            setPupilGender(DanePupila.Płeć);
            setPupilSterylized(DanePupila.Sterylizacja);
            setPupilActif(DanePupila.Aktywność);

        }

        if(props.WTrakcieKwestionariusza === true){
            console.log("UseEffect -> DanePupila W trakcie")

            setPupilName(DanePupila.Nazwa);
            setPupilBreed(DanePupila.Rasa);
            setPupilAge(DanePupila.Wiek);
            setPupilMonth(DanePupila.Miesiące);
            setPupilWeight(DanePupila.Waga);
            setPupilGender(DanePupila.Płeć);
            setPupilSterylized(DanePupila.Sterylizacja);
            setPupilActif(DanePupila.Aktywność);
            setDalej(DanePupila.DalejFlag)
            setSelectedMeatTypes(DanePupila.FlagiMięso || [])
            setSelectedDolegliwosci(DanePupila.FlagiDol || [])
            props.handleCallBackWTrakcie(false);
            console.log("Dalej falg", DanePupila.DalejFlag);
        }


    }, [DanePupila]);

    /*useEffect(() => {
        console.log(PupilWeight)
    }, [PupilWeight]);*/


    const getPet = async () => {
        console.log("getPet")
        try{
            const PupilRef = await doc(db, props.Login,'Dane', 'Zwierzęta', props.PupilDoZmiany);
            const snapShot = await getDoc(PupilRef);
            setDanePupila(snapShot.data());

            console.log(snapShot.data());
            console.log(DanePupila.Rasa);

        }catch (err){
            console.log(err);
        }
    }

    const getTemp = async () => {
        console.log("getTemp")
        try{
            const PupilRef = await doc(db, props.Login,'Temp');
            const snapShot = await getDoc(PupilRef);
            setDanePupila(snapShot.data());


        }catch (err){
            console.log(err);
        }
    }

    const koszykTemp = async () => {
        console.log("koszykTemp")
        try{
            await setDoc(doc(db, 'TempUser', "Dane", "Koszyk", WybranaKarma), {Cena: CenaWybranejKarmy, Amount: 1});
        }catch (err){
            console.log(err);
        }
    }

    const addOnlyPet = async () => {
        try{
            props.handleCallBackWTrakcie(false);
            if(props.PupilDoZmiany !== ""){
                const PupilRef = await doc(db, props.Login, 'Dane','Zwierzęta', props.PupilDoZmiany);
                await updateDoc(PupilRef, {
                    Wiek: PupilAge, Miesiące: PupilMonth, Waga: PupilWeight, Sterylizacja: PupilSterylized,  Aktywność: PupilActif, PrzypisanaKarma: WybranaKarma
                })
            }
            else{
                console.log("addOnlyPet, Pupil do zmiany pusty");
                await setDoc(doc(db, props.Login, "Dane", "Zwierzęta", PupilName), {Typ: PupilType, Rasa: PupilBreed, Wiek: PupilAge, Miesiące: PupilMonth, Waga: PupilWeight, Płeć: PupilGender, Sterylizacja: PupilSterylized,  Aktywność: PupilActif, PrzypisanaKarma: WybranaKarma });

            }
            setPopupDodanie(true);
        }catch (err){
            console.log(err)
        }
    }


    const addPet = async (karma) => {
        console.log("addPet")
        setWybranaKarma(karma);
        try{
            if(props.WTrakcieKwestionariusza === false && props.PupilDoZmiany === ""){
                props.handleCallBackKarma(karma)
                props.handleCallBackWTrakcie(true);
                console.log("addPet if PupilWeight: ", PupilWeight)
                console.log("addPet if Login: ", props.Login)
                await setDoc(doc(db, props.Login, "Temp"), {Nazwa: PupilName, Typ: PupilType, Rasa: PupilBreed, Wiek: PupilAge, Miesiące: PupilMonth, Waga: PupilWeight, Płeć: PupilGender, Sterylizacja: PupilSterylized,  Aktywność: PupilActif, PrzypisanaKarma: karma, DalejFlag: Dalej, FlagiMięso: selectedMeatTypes, FlagiDol: selectedDolegliwosci });

            }
            else{
                props.handleCallBackWTrakcie(false);
                if(props.PupilDoZmiany !== ""){
                    console.log("PupilDoZmiany");
                    const PupilRef = await doc(db, props.Login, 'Dane','Zwierzęta', props.PupilDoZmiany);
                    await updateDoc(PupilRef, {
                        Wiek: PupilAge, Miesiące: PupilMonth, Waga: PupilWeight, Sterylizacja: PupilSterylized,  Aktywność: PupilActif, PrzypisanaKarma: karma
                    })
                }
                else{
                    console.log("add Pet Pupildozmiany = pusty");
                    await setDoc(doc(db, props.Login, "Dane", "Zwierzęta", PupilName), {Typ: PupilType, Rasa: PupilBreed, Wiek: PupilAge, Miesiące: PupilMonth, Waga: PupilWeight, Płeć: PupilGender, Sterylizacja: PupilSterylized,  Aktywność: PupilActif, PrzypisanaKarma: karma });

                }
                //console.log(props.Zalogowano);
                await setDoc(doc(db, props.Login, "Dane", "Koszyk", karma), {Cena: CenaWybranejKarmy, Amount: 1});
                setPopupDodanie(true);
            }


        }catch(err){
            console.log(err)
        }
    }

    const CreateUser = async () => {
        console.log("CreateUser")
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
            await setDoc(doc(db, Login,"Dane"),{Imię: Name, Nazwisko: Surname, Hasło: Password, E_Mail: Email, Telefon: Telephone, Adres: "", Kraj: "", KodPocztowy: ""} /*{placeholderField: true}*/);
            await setDoc(doc(db, Login, "Dane", "Zwierzęta", PupilName), {Typ: PupilType, Rasa: PupilBreed, Wiek: PupilAge, Miesiące: PupilMonth, Waga: PupilWeight, Płeć: PupilGender, Sterylizacja: PupilSterylized,  Aktywność: PupilActif, PrzypisanaKarma: WybranaKarma });
            await setDoc(doc(db, Login, "Dane", "Koszyk", WybranaKarma), {Cena: CenaWybranejKarmy, Amount: 1});

            setZalogowano(true);
            props.handleCallBackZalogowo(true);
            props.handleCallBackLogin(Login);
            props.handleCallBackWTrakcie(false);
            //alert(`Kolekcja '${Login}' oraz jej podkolekcje zostały utworzone.`);
        }catch (error) {
            console.error("Błąd przy tworzeniu kolekcji: ", error);
            alert('Błąd przy tworzeniu kolekcji');
        }
    };

    return (

        <div className="Kwestionariusz">
            <br/><br/><br/><br/><br/><br/>
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
                <input type="text" value={PupilName} placeholder="Imię pupila"
                       id="PetNameInput"
                       onChange={(e) => setPupilName(e.target.value)}/> {/*value={Zalogowano ? {pupil.id} : ""}*/}
            </div>
            <div className="Kwestionariusz-question">
                Jakiej rasy jest twój pupil?
            </div>
            <div className="RaceSelect">
                <select name="rasy" id="rasy" value={PupilBreed} onChange={(e) => setPupilBreed(e.target.value)}>
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
                <input type="text"
                       id="PetAgeYearsInput" value={PupilAge} placeholder="Wiek pupila w latach"
                       onChange={(e) => setPupilAge(e.target.value)}/>
                <h10>lata</h10>
                <input type="text"
                       id="PetAgeMonthsInput" value={PupilMonth} placeholder="Wiek pupila w miesiącach"
                       onChange={(e) => setPupilMonth(e.target.value)}/>
                <h10>miesiące</h10>
            </div>
            <div className="Kwestionariusz-question">
                Ile kilogramów waży twój pupil?
            </div>
            <div className="WeightSelect">
                <input type="text" placeholder="Waga pupila w kg"
                       id="PetWeightInput" value={PupilWeight}
                       onChange={(e) => setPupilWeight(e.target.value)}/>
            </div>
            <div className="Kwestionariusz-question">
                Czy twój pupil to pies czy suczka?
            </div>
            <div className="SexSelect">
                <select name="plec" id="plec" value={PupilGender} onChange={(e) => setPupilGender(e.target.value)}>
                    <option value="samiec">Pies</option>
                    <option value="samica">Suczka</option>
                </select>
            </div>
            <div className="Kwestionariusz-question">
                Czy twój pupil jest po sterylizacji lub kastracji?
            </div>
            <div className="SterilizedSelect">
                <select name="sterylizacja" id="sterylizacja" value={PupilSterylized}
                        onChange={(e) => setPupilSterylized(e.target.value)}>
                    <option value="Nie">Nie</option>
                    <option value="Tak">Tak</option>
                </select>
            </div>
            <div className="Kwestionariusz-question">
                Jak bardzo aktywny jest twój pupil?
            </div>
            <div className="ActivitySelect">
                <select name="activity" id="activity" value={PupilActif}
                        onChange={(e) => setPupilActif(e.target.value)}>
                    <option value="Mała aktywność">Mała aktywność</option>
                    <option value="Przeciętna aktywność">Przeciętna aktywność</option>
                    <option value="Wysoka aktywność">Wysoka aktywność</option>
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
                <input type="checkbox" id="ingredient1" name="kaczka" value="Kaczka"
                       checked={selectedMeatTypes.includes("Kaczka")} onChange={() => handleCheckboxChange('Kaczka')}/>
                <h10>Kaczka</h10>
            </div>
            <div className="BannedIngredientsCheck">
                <input type="checkbox" id="ingredient2" name="kurczak" value="Kurczak"
                       checked={selectedMeatTypes.includes("Kurczak")}
                       onChange={() => handleCheckboxChange('Kurczak')}/>
                <h10>Kurczak</h10>
            </div>
            <div className="BannedIngredientsCheck">
                <input type="checkbox" id="ingredient3" name="wieprzowina" value="Wieprzowina"
                       checked={selectedMeatTypes.includes("Wieprzowina")}
                       onChange={() => handleCheckboxChange('Wieprzowina')}/>
                <h10>Wieprzowina</h10>
            </div>
            <div className="BannedIngredientsCheck">
                <input type="checkbox" id="ingredient4" name="wolowina" value="Wołowina"
                       checked={selectedMeatTypes.includes("Wołowina")}
                       onChange={() => handleCheckboxChange('Wołowina')}/>
                <h10>Wołowina</h10>
            </div>
            <div className="BannedIngredientsCheck">
                <input type="checkbox" id="ingredient5" name="vege" value="Vege"
                       checked={selectedMeatTypes.includes("Vege")} onChange={() => handleCheckboxChange('Vege')}/>
                <h10>Vege</h10>
            </div>

            <div className="Kwestionariusz-question">
                Wybierz dolegliwość Twojego Pupila?
            </div>
            <div className="BannedIngredientsCheck">
                <input type="checkbox" id="dole1" name="Odporność" value="Odporność"
                       checked={selectedDolegliwosci.includes("Odporność")}
                       onChange={() => handleDolegliwoscChange('Odporność')}/>
                <h10>Słaba odporność</h10>
            </div>
            <div className="BannedIngredientsCheck">
                <input type="checkbox" id="dole2" name="Trawienie" value="Trawienie"
                       checked={selectedDolegliwosci.includes("Trawienie")}
                       onChange={() => handleDolegliwoscChange('Trawienie')}/>
                <h10>Problemy z trawieniem</h10>
            </div>
            <div className="BannedIngredientsCheck">
                <input type="checkbox" id="dole3" name="Sierść" value="Sierść"
                       checked={selectedDolegliwosci.includes("Sierść")}
                       onChange={() => handleDolegliwoscChange('Sierść')}/>
                <h10>Problemy z sierścią</h10>
            </div>
              <div>
                <button onClick={dalejFunction}>Zaproponuj Karmę</button>
              <div className="ProponowanaKarma">
                    {Dalej === true &&
                            <div className="flex-container">
                                {console.log(Dalej)}
                                {karmy.map(karma => (
                                    <div className="FlexBoxy-Karmy" key={karma.id}>
                                        {/*//<h1>Proponowana Karma</h1>*/}
                                        <h4>{karma.id}</h4>
                                        <img src={Karma} alt={karma.KrótkiOpis}/>
                                        <h3>{karma.Cena} zł</h3>
                                        <h2>{karma.KrótkiOpis}</h2>
                                        <Link to="/Kwiaciara" onClick={() => addPet(karma.id)}>
                                            <button className="KarmyButtons2-Karmy">Czytaj więcej</button>
                                        </Link>
                                        {props.Zalogowano ? (

                                            <button className="KarmyButtons2-Karmy" onClick={() => addPet(karma.id)}>Dodaj do koszyka</button>) : (

                                            <button className="KarmyButtons2-Karmy" onClick={() => DodajDoKoszykaFunction(karma.id)}>Dodaj do koszyka</button>
                                        )}
                                    </div>
                                ))}
                            </div>}


                    {PopupDodanie ? (
                        <div className="Kwestionariusz-Popup-Dodanie">
                            <h1>Pupil oraz karma zostały pomyślnie dodane do Twojego konta!</h1>
                            <Link className="Link" to="/Konto">
                                <button>Przejdź do profilu</button>
                            </Link>

                        </div>
                    ) : (<div style={{display: "none"}} id="Dalej"></div>)}
                </div>
            {props.Zalogowano ? (<button onClick={() => addOnlyPet()}>Dodaj Pupila</button>) : (
                    <div style={{display: "none"}} id="Dalej"></div>)}
            </div>

            <div className="DDK">
                {console.log(DodajDoKoszyka)}
                {DodajDoKoszyka ? (
                    <div className="DodajDoKoszyka-Popup">
                        <h1>Czy chcesz założyć konto?</h1>

                        <button onClick={RejestracjaFunction}>Załóż konto</button>

                        <Link to="/Koszyk" onClick={koszykTemp}>
                            <button>Kupuję jednorazowo</button>
                            {/*Dodanie karmy dla wirtualnego użytkownika -> DodajKarmę(db,Virtual,Dane,Koszyk,NazwaKarmy*/}
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
                                <input rows="1" type="password" value={Password}
                                          onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <div className="Register-Text-AreaKW">
                                <label htmlFor="Password">Repeat Password:</label>
                                <input rows="1" type="password" value={PasswordRepeated}
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
                                <div className="Kwestionariusz-Register-Popup">
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