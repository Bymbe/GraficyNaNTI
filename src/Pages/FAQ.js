import React from 'react'
import ListComments from "../Components/DataBaseFAQ/ListComments";
import AddComment from "../Components/DataBaseFAQ/AddComment";
import EditComments from "../Components/DataBaseFAQ/EditComments";
import Style from "../styles/FAQ.module.css"
import Zamek from "../Assets/Zamek.png";


function FAQ(props) {

    const sizeFlag = props.fontSize
    const colorFlag = props.color
    const speachFlag = props.speach

    const styl = (x,y) => ({
        fontSize: (x) ? '50px' : '40px',
        color: (y) ? 'black' : 'white',
        fontFamily: (y) ? 'Arial' : 'Segoe UI',
        background: (y) ? 'yellow' : '#573023'
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
        <div className={Style.FAQ}>
            <h4 style={styl(sizeFlag, colorFlag)}  id="Frekuently" onMouseEnter={() => handleHover("Frekuently")}>FREQUENTLY ASKED QUESTIONS</h4>
            <div className={Style.Comments} style={{backgroundImage : `url(${Zamek})`}}>
                <ListComments fontSize={sizeFlag} color={colorFlag} speach={speachFlag}/>
                {/*<AddComment/>*/}
                {/*<EditComments/>*/}
            </div>
        </div>
    )
}

export default FAQ;