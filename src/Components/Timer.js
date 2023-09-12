import React, {useState, useEffect} from "react";
import Style from '../styles/Timer.module.css'

function Timer(props) {
    const [ileDni, setIleDni] = useState()
    const [ileGodzin, setIleGodzin] = useState()
    const [ileMinut, setIleMinut] = useState()
    const [ileSekund, setIleSekund] = useState()


    const sizeFlag = props.fontSize
    const colorFlag = props.color
    const speachFlag = props.speach
    console.log(speachFlag)



    var ztgkDate = new Date(2024, 5, 29, 9, 0, 0, 0).getTime();
    var todayDate = new Date().getTime();
    var remainingTime = ztgkDate - todayDate;

    useEffect(() => {
        setTimeout(() => setIleDni(Math.floor(remainingTime / (1000 * 60 * 60 * 24))), 1000);
        setTimeout(() => setIleGodzin(Math.floor(remainingTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))), 1000);
        setTimeout(() => setIleMinut(Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))), 1000);
        setTimeout(() => setIleSekund(Math.floor((remainingTime % (1000 * 60)) / 1000)), 1000)
    }, [ileDni, ileGodzin, ileMinut, ileSekund])



    const styl = (x,y) =>({
        fontSize: (x) ? '50px' : '30px',
        color: (y) ? 'black' : 'white',
        fontFamily: (y) ? 'Arial' : 'Bookman Old Style',
        backgroundColor: (y) ? 'yellow' : '#573023'

    })

    function handleHover(id){
        if(speachFlag){
            var tekst = document.getElementById(id).innerText;
            const speak = new SpeechSynthesisUtterance(tekst);
            window.speechSynthesis.speak(speak)
            console.log(tekst)
        }
    }

    return (
        // <div className={Style.styl}>
        <div className ={Style.Timer} style={styl(sizeFlag, colorFlag)} id="ZTGK" onMouseEnter={() => handleHover("ZTGK")}>
            Do ZTGK zostało: {ileDni} dni, {ileGodzin} godzin, {ileMinut} minut, {ileSekund} sekund
        </div>
    )
}
export default Timer;

