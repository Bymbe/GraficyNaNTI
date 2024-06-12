import React from 'react'
import App from "../App";
import Ołówek from "../Assets/Ołówek.svg";
import Strzałka from "../Assets/Strzałka.svg";
import TypPies from "../Assets/Pies_EBIZNES.png";
import TypKot from "../Assets/Kot-EBIZNES.png";
import TypKrólik from "../Assets/Królik_EBIZNES.png";
import {Link} from "react-router-dom";

function Pomoc() {
    return (
        <div>
            <br/><br/><br/><br/><br/><br/>
            <ul className="Pomoc">
                <h1>Najczęstsze pytania:</h1>
                <li>
                    <input className="InputPomoc" type="radio" name="Pomoc" id="first" checked/>
                    <label className="LabelPomoc" htmlFor="first">Jak mogę kupić karmę?</label>
                    <div className="ContentPomoc">
                        <p>Naszą personalizowaną karmę można wybrać na dwa sposoby:
                            1. Samemu wybrać karmę z dostępnych karm w zakładce "Karmy".
                            2. Wypełnić formularz dotyczący pupila na stronie głównej, by otrzymać
                            propozycję karmy dopasowanej do potrzeb Twojego pupila.
                            Po wybraniu karmy należy nacisnąć przycisk "Dodaj do koszyka",
                            by karma znalazła się w Twoim koszyku (ikona koszyka w prawym górnym rogu),
                            gdzie można dokonać płatności. Podczas dokonywania płatności należy podać:
                            E-mail,
                            Adres,
                            Kod pocztowy, oraz
                            Kraj.
                        </p>
                        <Link to="/Karmy">
                            <button className="ButtonsPomoc">Zobacz dostępne karmy</button>
                        </Link>
                        <Link to="/Kwestionariusz">
                            <button className="ButtonsPomoc">Wypełnij formularz</button>
                        </Link>
                    </div>
                </li>
                <li>
                    <input className="InputPomoc" type="radio" name="Pomoc" id="second" checked/>
                    <label className="LabelPomoc" htmlFor="second">Jak mogę stworzyć konto?</label>
                    <div className="ContentPomoc">
                        <p>Aby stworzyć konto należy kliknąć ikonę w prawym górnym rogu, a następnie
                            nacisnąć przycisk "Zarejestruj się tutaj", który przeniesie nas do rejestracji.
                        </p>
                        <p> Lub kliknij przycisk poniżej i stwórz konto teraz!</p>
                        <Link to="/Register">
                            <button className="ButtonsPomoc">Stwórz konto</button>
                        </Link>
                    </div>
                </li>
                <li>
                    <input className="InputPomoc" type="radio" name="Pomoc" id="third"/>
                    <label className="LabelPomoc" htmlFor="third">Gdzie mogę dodać zwierzaka? Da się go później
                        edytować?</label>
                    <div className="ContentPomoc">
                        <p>Aby dodać zwierzaka należy mieć uprzednio stworzone konto i się na nie zalogować (ikona w
                            prawym górnym rogu).</p>
                        <button className="Buttons2Pomoc">Jeśli nie masz jeszcze konta:</button>
                        <Link to="/Register">
                            <button className="ButtonsPomoc">Stwórz konto</button>
                        </Link>
                        <p>Jeśli jesteś już zalogowany na swoim koncie, klikając na ikonę w prawym górnym
                            rogu należy przejść do zakładki "Profil". Po kliknięciu zostaniemy przeniesieni
                            do naszego profilu, gdzie znajdują się nasze dane oraz adres. Pod nimi znajdziemy
                            listę "Twoje Pupile", gdzie znajdują się Twoje zwierzaki. By edytować zwierzaka należy
                            nacisnąć ołówek znajdujący się przy jego imieniu. Pod listą wszystkich naszych zwierzaków
                            znaleźć możemy pasek z napisem "Dodaj swojego pupila". Po jego kliknięciu mamy możliwość
                            dodać nowego zwierzaka - wypełniając formularz. By zapisać pupila należy wcisnąć guzik
                            "Dodaj pupila". Zapisany zwierzak pojawi się na Twoim Profilu po odświerzemiu karty. </p>
                    </div>
                </li>
                <li>
                    <input className="InputPomoc" type="radio" name="Pomoc" id="fourth"/>
                    <label className="LabelPomoc" htmlFor="fourth">Jak można zmienić adres?</label>
                    <div className="ContentPomoc">
                        <p>Swój adres można edytować po zalogowaniu na konto. Klikając na ikonę w prawym górnym
                            rogu należy przejść do zakładki "Profil". Po kliknięciu zostaniemy przeniesieni
                            do naszego profilu, gdzie znajdują się nasze dane adresowe, które możemy edytować
                            pod przyciskiem ołówka.
                        </p>
                    </div>
                </li>
                <li>
                    <input className="InputPomoc" type="radio" name="Pomoc" id="fifth"/>
                    <label className="LabelPomoc" htmlFor="fifth">Gdzie można znaleźć zamówione kiedyś karmy?</label>
                    <div className="ContentPomoc">
                        <p>Złożone zamówienia znajdują się na naszym koncie (jeśli zamówienie było
                            realizowane za pomocą konta, jeśli nie, to nie mamy dostępu do historii zamówień).
                            Po zalogowaniu się na konto należy kliknąć ikonę w prawym górnym rogu, a następnie nacisnąć
                            "Historia zamówień", gdzie znajdziemy zrobione przez nas wcześniej zakupy. Znajdują się tam
                            informacje m.in.
                            o tym jakie ile karm było zamówione, czy za jaką cenę zrealizowaliśmy zamówienie. Mamy
                            również
                            możliwość ponowić zamówienie.</p>
                    </div>
                </li>
                <li>
                    <input className="InputPomoc" type="radio" name="Pomoc" id="sixth"/>
                    <label className="LabelPomoc" htmlFor="sixth">Moje zamówienie do mnie nie dotarło, co teraz?</label>
                    <div className="ContentPomoc">
                        <p>Jeśli zamówienie było składane za pomocą konta: </p>
                        <p>Prosimy wejść historię zamówień, która jest dostępna po zalogowaniu pod ikoną w prawym górnym
                            rogu. Jeśli zamówienie
                            widnieje w historii zamówień oznacza to, że dokonano zamówienia. Prosimy sprawdzić status
                            zamówienia.
                            Jeśli zamówienie ma status "niedostarczone", a minęło mniej niż 3 tygodnie od dokonania
                            zakupu,
                            prosimy o cierpliwość, gdyż zamówienie jest wciąż w trakcie realizacji. Gdy minęło więcej
                            niż 3 tygodnie od daty
                            dokonania zakupu lub, jeśli zamówienie ma status "dostarczone", prosimy jak najszybciej
                            skontaktować się z nami telefonicznie.
                            Jesteśmy dostępni pod numerem: +48 123 456 789</p>
                        <p>Jeśli zamówienie NIE było składane z użyciem konta:</p>
                        <p>Prosimy jak najszybciej skontaktować się z nami telefonicznie.
                            Jesteśmy dostępni pod numerem: +48 123 456 789 </p>
                    </div>
                </li>
                <li>
                    <input className="InputPomoc" type="radio" name="Pomoc" id="seventh"/>
                    <label className="LabelPomoc" htmlFor="seventh">Jak wypełnić formularz?</label>
                    <div className="ContentPomoc">
                        <p>Formularz można znaleźć na stronie głównej. Gdy go wypełnimy, otrzymamy propozycję
                            spersonalizowanej karmy dla naszego pupila.</p>
                        <p>Po otwarciu formularza należy wypełnić okienka:
                            Imię Pupila, Wybrać jakiej jest rasy, Określić w jakim wieku jest i ile kilogramów waży,
                            podać płeć, zaznaczyć czy jest po sterylizacji lub kastracji,
                            określić aktywność fizyczą pupila (mała aktywność - krótkie spacery
                            , pupil przesiaduje w domu, duża aktywność - pupil jest większość
                            czasu na dworze i może biegać, średnia aktywność - pupil spędza
                            przynajmniej 3h dziennie na powietrzu i może biegać). Następnie
                            należy zaznaczyć które składniki chcemy wykluczyć z karmy, jeśli
                            nasz pupil ma większe wymagania. By otrzymać propozycję karmy
                            klikamy przycisk "Zaproponuj Karmę", a poniżej pojawi nam się
                            karma dostosowana do potrzeb naszego pupila, którą albo możemy
                            dodać do koszyka przyciskiem "dodaj do koszyka" albo możemy
                            dowiedzieć się więcej o jej właściwościach, czy składnikach klikając
                            przycisk "Czytaj więcej". Po dodaniu karmy do koszyka znajduje
                            się ona już w koszyku (ikona koszyka w prawym górnym rogu). Klikając
                            ikonę możemy przejść już do płatności.</p>
                        <Link to="/Kwestionariusz">
                            <button className="ButtonsPomoc">Wypełnij formularz</button>
                        </Link>
                    </div>
                </li>
                <h1>Kontakt do nas:</h1>
                <div className="KontaktPomoc">
                    <h1> DANE ADRESOWE: </h1>
                    <div className="DanePomoc">Pawsome Provisions,
                        al.Szarkia 102,
                        00-100 Warszawa,
                    </div>
                    <div>NIP: 2134565444</div>
                    <div>KRS: 4365756887</div>
                    <h1> INFOLINIA: </h1>
                    <div className="DanePomoc">tel.: +48 123 456 789
                    </div>
                </div>
                <h1>Masz jeszcze jakieś pytania, problemy lub wątpliwości? Napisz do nas!</h1>
                <div className="MessagePomoc">
                    <h1>Napisz wiadomość:</h1>

                    <div className="MessagePomoc-Text-Area">
                        <label htmlFor="Email">Podaj swój E-mail:</label>
                        <textarea rows="1" type="text"/>
                    </div>
                    <div className="MessagePomoc-Text-Area">
                        <label htmlFor="Message">Twoja wiadomość:</label>
                        <input rows="4" cols="50" type="text" placeholder={"Napisz coś..."}/>
                    </div>
                    <button className="ButtonPomoc" type="submit">Wyślij wiadomość</button>
                </div>
            </ul>
        </div>
    )
}

export default Pomoc;