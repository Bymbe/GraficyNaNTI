import React, {useEffect, useRef, useState} from "react";
import "../styles/AccesibilitySettings.css"


function AccesibilitySettings(props){


    const [sizeFlag, setSizeFalg] = useState(false)
    const [colorFlag, setColorFlag] = useState(false)
    const [speachFlag, setSpeachFlag] = useState(false)


    function handleChangeSize(){
        setSizeFalg(sizeFlag => !sizeFlag)
    }

    function handleChangeColor(){
        setColorFlag(colorFlag => !colorFlag)
    }

    function handleSpeach(){
        setSpeachFlag(speachFlag => !speachFlag)
    }

    function handleHover(id){
        if(speachFlag){
            var tekst = document.getElementById(id).innerText;
            const speak = new SpeechSynthesisUtterance(tekst);
            window.speechSynthesis.speak(speak)
            console.log(tekst)
        }
    }

    return(
        <div>

            <div>
                {props.handleCallbackSize(sizeFlag)}
                {props.handleCallbackColor(colorFlag)}
                {props.handleCallbackSpeak(speachFlag)}
                <button onClick={handleChangeSize}>ChangeSize</button>
                <button onClick={handleChangeColor}>ChangeColor</button>
                <button onClick={handleSpeach}>ToggleSpeach</button>

            </div>

            <div  id="Settings" onMouseEnter={() => handleHover("Settings")}>Settings</div>
            <div id="cokolwiek" onMouseEnter={() => handleHover("cokolwiek")}>cokolwiek</div>
        </div>


    )



}

export default AccesibilitySettings;