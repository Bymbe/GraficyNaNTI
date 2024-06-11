import React from 'react'
import Sonia from "../Assets/Sonia.jpg";
import nagroda from "../Assets/nagroda.png";
import Sonia2 from "../Assets/Sonia2.jpg";
import Pies from "../Assets/piesek.png";

function ONas() {
    return (
        <div className="ONas">
            <div className="NaszaFirmaONas">
                <h1>Jak powstała nasza firma?</h1>
                <div className="OkienkoONas">
                    <img src={Sonia}/>
                    <div>
                        Pierwszą spersonalizowaną Karmę stworzyliśmy dla psa imieniem
                        Sonia w 2015 roku. Sonia miała liczne problemy zdrowotne i w
                        związku z tym wymagała karmy ze specjalnie dobranych składników, a niestety
                        jej wymagań zdrowotnych nie spełniała żadna karma dostępna w sklepach. I tak właśnie,
                        z chęci niesienia pomocy urodziła się nasza firma, która od 2015 pomaga
                        zwierzakom oraz ich właścicielom. Staramy się aby nasze karmy były najlepszej
                        jakości, korzystamy z najlepszych składników na rynku, a w swoich szeregach mamy
                        najlepiej wyszkolonych specjalistów do tworzenia spersonalizowanych karm.
                    </div>
                </div>

            </div>

            <div className="NaszaFirmaONas">
                <h1>Nagroda smaku! Najlepsza karma 2023, 2022, 2021</h1>
                <div className="OkienkoONas">
                    <img src={nagroda}/>
                    <div>
                        W skład naszych karm wchodzą najlepszej jakości dostępne na rynku składniki.
                        Produkty kupujemy prosto od polskich rolników, dzięki czemu nasze karmy są
                        świeże i zdrowe. Dbamy o to, by karmy robione przez naszą firmę były w 100% naturalne i
                        jednocześnie smakowały Waszym pupilom! W naszej ofercie pojawiają się specjalne
                        karmy sezonowe, dla pupili, którym potrzeba smakowych fantazji. Sezonowe karmy
                        tworzymy z sezonowych produktów dostępnych na rynku. <br/> Dlatego nasza firma już
                        trzy lata z rzędu jest pionierem wśród wszystkich karm! W 2021, 2022 oraz w 2023 zdobyliśmy
                        "Nagrodę smaku!" i zyskaliśmy miano najlepszej karmy na rynku! Cieszymy się, że możemy się dla
                        Was rozwijać!
                    </div>
                </div>

            </div>


        </div>
    )
}

export default ONas;