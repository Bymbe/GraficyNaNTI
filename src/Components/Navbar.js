import Logo from"../Assets/LogoNavBar.png"
import { Link } from "react-router-dom"
import React, { useState } from "react";
import Style from "../styles/Navbar.module.css"
function Navbar(props){
    const [openLinks, setOpenLinks] = useState(false);
    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };

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


    const styl = (x,y) => ({
        fontSize: (x) ? '40px' : '30px',
        color: (y) ? 'black' : 'white',
        fontFamily: (y) ? 'Arial' : 'Bookman Old Style',
        backgroundColor: (y) ? 'yellow' : '#282828'
    })

    function handleHover(id){
        if(speachFlag){
            var tekst = document.getElementById(id).innerText;
            const speak = new SpeechSynthesisUtterance(tekst);
            window.speechSynthesis.speak(speak)
            console.log(tekst)
        }
    }

    return(
        <div className ={Style.navbar}>
            <div clasName={Style.leftSide} id={openLinks ? "open" : "close"}>
                <img className={Style.LogoNavBar} src={Logo}/>
                <div className={Style.WitchWay}>
                    <h1 id="WitchWayLogo" onMouseEnter={() => handleHover("WitchWayLogo")}>WITCH WAY</h1>
                </div>

            </div>

            <div className={Style.rightSide}>
                <li><Link class={Style.link} style={styl(sizeFlag, colorFlag)} to="/" id="HomeNavBar" onMouseEnter={() => handleHover("HomeNavBar")}>Home</Link></li>
                <li><Link class={Style.link} style={styl(sizeFlag, colorFlag)} to="/Devlog" id="DevlogNavBar" onMouseEnter={() => handleHover("DevlogNavBar")}>DevLog</Link></li>
                <li><Link class={Style.link} style={styl(sizeFlag, colorFlag)} to="/FAQ" id="FAQNavBar" onMouseEnter={() => handleHover("FAQNavBar")}>FAQ</Link></li>
            </div>
            <div className={Style.Settings}>
                <button style={styl(sizeFlag, colorFlag)} id="SettingsNavBar" onMouseEnter={() => handleHover("SettingsNavBar")}>Accesibility settings</button>
                <div className={Style.Szuflada}>
                    {props.handleCallbackSize(sizeFlag)}
                    {props.handleCallbackColor(colorFlag)}
                    {props.handleCallbackSpeak(speachFlag)}
                    <button onClick={handleChangeSize}>ChangeSize</button>
                    <button onClick={handleChangeColor}>ChangeColor</button>
                    <button onClick={handleSpeach}>ToggleSpeach</button>

                </div>
            </div>
        </div>
    )
}

export default Navbar