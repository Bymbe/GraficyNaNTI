import React from 'react'
import Karma from "../Assets/karma.png";

function Kwiaciara() {
    return (
        <div className="Kwiaciara">

            <div className="Kwiaciara-content">

                <div className="KwiaciaraButtonAndPrice">
                    <img src={Karma}/>
                    <h9>49.99 zł</h9>
                    <button className="KwiaciaraButton">Dodaj do koszyka</button>
                </div>

                <div className="Karmy-Header-Kwiaciara">
                    <br/><br/><br/>
                    <h1>Kwiaciara</h1>


                    <h2>To wyjątkowa karma dla psów, która łączy najwyższej jakości składniki odżywcze z naturalnymi
                        dobrodziejstwami płatków kwiatów. Stworzona z myślą o zdrowiu i zadowoleniu Twojego pupila, ta
                        karma oferuje nie tylko doskonały smak, ale także szereg korzyści zdrowotnych.</h2>
                    <h3>Kluczowe Składniki:</h3>
                    <h4>ŚWIEŻE MIĘSO Z KURCZAKA - Główny składnik zapewniający wysoką zawartość białka niezbędnego dla
                        silnych mięśni i zdrowej kondycji.</h4>
                    <h4>PŁATKI NAGIETKA - Bogate w przeciwutleniacze, wspomagają zdrowie skóry i sierści oraz mają
                        właściwości przeciwzapalne.</h4>
                    <h4>PŁATKI RUMIANKU - Działają kojąco na układ trawienny i wspierają zdrowy sen.
                        Płatki lawendy - Znane z właściwości relaksujących, pomagają w redukcji stresu i niepokoju.</h4>
                    <h4>OWOCE I WARZYWA - Źródło witamin, minerałów i błonnika dla wsparcia układu odpornościowego i
                        trawiennego.</h4>
                    <h3>Korzyści: </h3>
                    <h4>ZDROWA SKÓRA I SIERŚĆ: Płatki nagietka i rumianku wspierają zdrowie skóry oraz lśniącą sierść.
                    </h4>
                    <h4>WSPOMAGANIE TRAWIENIA: Naturalne składniki wspierają zdrową florę bakteryjną jelit i ułatwiają
                        trawienie.</h4>
                    <h4>RELAKS I SPOKÓJ: Lawenda pomaga w redukcji stresu, co jest szczególnie korzystne dla psów z
                        tendencją do niepokoju.
                    </h4>
                    <h4>BOGACTWO WITAMIN: Owoce i warzywa dostarczają niezbędnych witamin i minerałów dla optymalnego
                        zdrowia.</h4>
                    <h3>Dawkowanie: </h3>
                    <h4>Dawkowanie zależy od wagi, wieku i poziomu aktywności Twojego psa. Zapewnij stały dostęp do
                        świeżej wody i skonsultuj się z weterynarzem w celu określenia optymalnej porcji dla Twojego
                        pupila. </h4>


                </div>

            </div>


        </div>
    )
}

export default Kwiaciara;