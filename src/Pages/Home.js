import React, {useRef} from 'react'
import Style from "../styles/Home.module.css"
import Fauna from "../Assets/Fauna.png"
import Latanie from "../Assets/Latanie.png"
import Film from "../Assets/WitchWayTrailer.mp4"
import Uczenie from "../Assets/Uczenie.png"

function Home(props) {

    const sizeFlag = props.fontSize
    const colorFlag = props.color
    const speachFlag = props.speach;

    console.log(sizeFlag)
    const stylDuze = (x,y) => ({
        fontSize: (x) ? '50px' : '48px',
        fontFamily: (y) ? 'Arial' : 'Segoe UI',
        background: (y) ? 'yellow' : 'none'
    })

    const stylMale = (x,y) => ({
        fontSize: (x) ? '50px' : '32px',
        fontFamily: (y) ? 'Arial' : 'Segoe UI',
        background: (y) ? 'yellow' : 'none'
    })

    const stylNaglowek = (x,y) => ({
        fontSize: (x) ? '100px' : '96px',
        color: (y) ? 'black' : 'white',
        fontFamily: (y) ? 'Arial' : 'Segoe UI',
        background: (y) ? 'yellow' : 'none'
    })

    const stylButton = (x,y) => ({
        fontSize: (x) ? '50px' : '32px',
        color: (y) ? 'black' : 'white',
        fontFamily: (y) ? 'Arial' : 'Segoe UI',
        background: (y) ? 'yellow' : 'rgba(255,255,255,0.25)'
    })

    function handleHover(id){
        if(speachFlag){
            var tekst = document.getElementById(id).innerText;
            const speak = new SpeechSynthesisUtterance(tekst);
            window.speechSynthesis.speak(speak)
            console.log(tekst)
        }
    }

    const ref = useRef(null);

    const handleScroll = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <div className={Style.home}>
            <div className={Style.HomeContent}>
                <div className={Style.Land} style={{backgroundImage : `url(${Fauna})`}}>
                    <h1  style={stylNaglowek(sizeFlag, colorFlag)}  id="WitchWayLand" onMouseEnter={() => handleHover("WitchWayLand")}>WITCH WAY</h1>
                    <button style={stylButton(sizeFlag, colorFlag)}  id="WatchTrailer" onMouseEnter={() => handleHover("WatchTrailer")} onClick={handleScroll}>Watch Trailer</button>
                </div>
                <div className={Style.Amazing}>
                    <h1 style={stylDuze(sizeFlag, colorFlag)}  id="Adventure" onMouseEnter={() => handleHover("Adventure")}>AMAZING ADVENTURE!</h1>
                    <p style={stylMale(sizeFlag, colorFlag)}  id="InAWorld" onMouseEnter={() => handleHover("InAWorld")}>In a world full of fantasy creatures you’re a magic school apprentice who’s late for her final
                        exam…</p>
                    <img src={Latanie}/>
                </div>
                <div ref={ref} className={Style.Trailer}>
                    <h1 style={stylDuze(sizeFlag, colorFlag)}  id="WATCH" onMouseEnter={() => handleHover("WATCH")}>WATCH TRAILER</h1>
                    <video width="960" height="540" controls >
                        <source src={Film} type="video/mp4"/>
                    </video>
                </div>

                <div className={Style.Wishlist} style={{backgroundImage : `url(${Uczenie})`}}>
                    <h1 style={stylDuze(sizeFlag, colorFlag)}  id="AddToSteam" onMouseEnter={() => handleHover("AddToSteam")}>Add to <br/> wishlist on <br/>Steam</h1>
                    <p style={stylMale(sizeFlag, colorFlag)}  id="BeTheF" onMouseEnter={() => handleHover("BeTheF")}>Be the first one to play WitchWay on premiere day!</p>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        <div>
                            <p id="Watch" style={stylButton(sizeFlag, colorFlag)}  id="AddToW" onMouseEnter={() => handleHover("AddToW")}>ADD TO WISHLIST</p>
                        </div>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Home;
