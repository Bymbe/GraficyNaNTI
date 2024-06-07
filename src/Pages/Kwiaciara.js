import React, {useEffect, useState} from 'react'
import Karma from "../Assets/karma.png";
import {db} from "../DataBase/init-firebase";
import {getDoc, doc} from "firebase/firestore";

function Kwiaciara(props) {

    const [KarmaRef, setKarmaRef] = useState([]);

    useEffect(() => {
        console.log(props.Karma);
        getKarma();

    },[])

    const getKarma = async () => {
        try{

            const KarmaRef = await doc(db, 'Karmy', props.Karma);
            const snapShot = await getDoc(KarmaRef);

            setKarmaRef(snapShot.data());

        }catch(err){
            console.log(err);
        }
    }



    return (

        <div className="Kwiaciara">

            <div className="Kwiaciara-content">

                <div className="KwiaciaraButtonAndPrice">
                    <img src={Karma}/>
                    <h9>{KarmaRef.Cena} zł</h9>
                    <button className="KwiaciaraButton">Dodaj do koszyka</button>
                </div>

                <div className="Karmy-Header-Kwiaciara">
                    <br/><br/><br/>
                    <h1>{KarmaRef.Nazwa}</h1>


                    <h2>{KarmaRef.DługiOpis}</h2>
                    <h3>Kluczowe Składniki:</h3>
                    <h4>{KarmaRef.Składnik1}</h4>
                    <h4>{KarmaRef.Składnik2}</h4>
                    <h4>{KarmaRef.Składnik3}</h4>
                    <h4>{KarmaRef.Składnik4}</h4>
                    <h4>{KarmaRef.Składnik5}</h4>
                    <h3>Korzyści: </h3>
                    <h4>{KarmaRef.Korzyść1}</h4>
                    <h4>{KarmaRef.Korzyść2}</h4>
                    <h4>{KarmaRef.Korzyść3}</h4>
                    <h4>{KarmaRef.Korzyść4}</h4>
                    <h3>Dawkowanie: </h3>
                    <h4>{KarmaRef.Dawkowanie}</h4>


                </div>

            </div>


        </div>
    )
}

export default Kwiaciara;