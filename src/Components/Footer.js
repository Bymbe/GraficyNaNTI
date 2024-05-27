import React from "react";
import Facebook from '@mui/icons-material/Facebook'
import Instagram from '@mui/icons-material/Instagram'
import Twitter from '@mui/icons-material/Twitter'
import Logo from"../Assets/LogoFooter.png"
import Style from "../styles/Footer.module.css"
function Footer(props) {

    const sizeFlag = props.fontSize
    const colorFlag = props.color
    const speachFlag = props.speach

    const stylDuze = (x,y) => ({
        fontSize: (x) ? '50px' : '48px',
        color: (y) ? 'black' : 'white',
        fontFamily: (y) ? 'Arial' : 'Segoe UI',
        background: (y) ? 'yellow' : 'none'
    })

    const stylMale = (x,y) => ({
        fontSize: (x) ? '45px' : '32px',
        color: (y) ? 'black' : 'white',
        fontFamily: (y) ? 'Arial' : 'Segoe UI',
        background: (y) ? 'yellow' : 'none'
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
        <div className ={Style.Footer}>
            <div className ={Style.FooterContent}>
                <div>
                    <h1 style={stylDuze(sizeFlag, colorFlag)}  id="Develop" onMouseEnter={() => handleHover("Develop")}>DEVELOPED BY</h1>
                </div>
                <img className={Style.LogoFooter} src={Logo}/>
                <ul class={Style.Policy}>
                    <li style={stylMale(sizeFlag, colorFlag)}  id="Cookie" onMouseEnter={() => handleHover("Cookie")}>Cookies Policy</li>
                    <li style={stylMale(sizeFlag, colorFlag)}  id="Policy" onMouseEnter={() => handleHover("Policy")}>Privacy Policy</li>
                    <li style={stylMale(sizeFlag, colorFlag)}  id="User" onMouseEnter={() => handleHover("User")}>User Agreement</li>
                </ul>
                <div class={Style.icons}>
                    <li><Facebook /></li>
                    <li><Twitter /></li>
                    <li><Instagram /></li>
                </div>
                <p style={stylMale(sizeFlag, colorFlag)}  id="Rights" onMouseEnter={() => handleHover("Rights")}>All Rights Reserved &copy; 2022-2023</p>

            </div>
        </div>)
}

export default Footer;