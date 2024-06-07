import React, {useState} from 'react'
import {Link} from "react-router-dom";
import Karma from "../Assets/karma.png";

function Kwestionariusz(props) {

    const [Dalej, setDalej] = useState(false);
    const [DodajDoKoszyka, setDodajDoKoszyka] = useState(false);

    const dalejFunction = async ()=> {
        setDalej(true);
        return;
    }
    const DodajDoKoszykaFunction = async ()=> {
        setDodajDoKoszyka(true);
        return;
    }

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
                            <button onClick={DodajDoKoszykaFunction}>Dodaj do koszyka</button>
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
                        <Link to="/Register">
                            <button>Załóż konto</button>
                        </Link>
                        <Link to="/Koszyk">
                            <button>Kupuję jednorazowo</button>
                        </Link>
                        <h2></h2>
                    </div>
                ) : (<div style={{display: "none"}}></div>)}
            </div>

        </div>
    )
}

export default Kwestionariusz;