import React, {useEffect, useState} from "react";
import {collection, getDocs, doc, deleteDoc, addDoc} from 'firebase/firestore'
import {db} from "../../DataBase/init-firebase";
import Style from "../../styles/ListDevlog.module.css"
export default function ListDevlog(props) {

    const [devLogs, setDevLogs] = useState([])

    const [version, setVersion] = useState('')
    const [date, setDate] = useState('')
    const [text, setText] = useState('')
    const [image, setImage] = useState('')

    const sizeFlag = props.fontSize
    const colorFlag = props.color
    const speachFlag = props.speach;

    useEffect(() => {
        getDevLogs()
    }, [])

    useEffect(() => {
        console.log(devLogs)
    }, [devLogs])

    function getDevLogs() {
        const devLogCollectionRef = collection(db, 'Devlogs')
        getDocs(devLogCollectionRef).then(response => {
            const devs = response.docs.map(doc => ({data: doc.data(), id: doc.id}))
            setDevLogs(devs)
        }).catch(error => console.log(error.message))
    }

    function deleteDevLog(id){
        const docRef = doc(db, 'Devlogs', id)
        deleteDoc(docRef).then(() => console.log('Document deleted')).catch(error => console.log(error.message))
    }

    function handleCreate(e) {
        e.preventDefault()
        if(version === '' || date === '' || text === '' || image === ''){
            return
        }
        const devLogCollectionRef = collection(db, 'Devlogs')
        const payLoad = {version: version, date: date, text: text, image: image}
        addDoc(devLogCollectionRef,payLoad).then(response => {
            console.log(response.id)
        }).catch(error => {
            console.log(error.message)
        })
        alert(version+date+text+image)

        getDevLogs();
        setVersion('')
        setDate('')
        setImage('')
        setText('')
    }

    const stylBrown = (x,y) => ({
        fontSize: (x) ? '40px' : '16px',
        color: (y) ? 'black' : 'white',
        fontFamily: (y) ? 'Arial' : 'Bookman Old Style',
        backgroundColor: (y) ? 'yellow' : '#573023'
    })

    const stylBright = (x,y) => ({
        fontSize: (x) ? '40px' : '16px',
        color: (y) ? 'black' : 'white',
        fontFamily: (y) ? 'Arial' : 'Bookman Old Style',
        backgroundColor: (y) ? 'yellow' : '#B2A07A'
    })

    const styleTextArea = (x) => ({
        // fontSize: (x) ? '32px' : '16px',
        width: (x) ? '83%' : '85%',
        left: (x) ? '30px' : '0px',
        fontSize: (x) ? '32px' : '16px'
    })

    const styleInput = (x) => ({
        // fontSize: (x) ? '32px' : '16px',
        width: (x) ? '83%' : '85%',
        left: (x) ? '30px' : '0px',
        fontSize: (x) ? '32px' : '16px'
    })

    function handleHover(id){
        if(speachFlag){
            var tekst = document.getElementById(id).innerText;
            const speak = new SpeechSynthesisUtterance(tekst);
            window.speechSynthesis.speak(speak)
            console.log(tekst)
        }
    }

    function handleHoverVariable(id){
        if(speachFlag){

            var tekst = document.getElementById(id).innerHTML;
            console.log(tekst)
            const speak = new SpeechSynthesisUtterance(tekst);
            window.speechSynthesis.speak(speak)
            console.log(tekst)
        }
    }

    return (
        <div className={Style.ListDevlog}>
            <ul>
                {devLogs.map(devlog => (
                    <li key={devlog.id}>
                        <div style={{backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.0), rgba(245, 246, 252, 0.0), rgba(43, 24, 17, 0.73)), url(${devlog.data.image})`}}>
                        </div>
                        <p id={`Version ${devlog.id}`} onMouseEnter={() => handleHoverVariable(`Version ${devlog.id}`)}>Version: {devlog.data.version}</p>
                        <p id={`Date ${devlog.id}`} onMouseEnter={() => handleHoverVariable(`Date ${devlog.id}`)}>Date: {devlog.data.date} </p>
                        <p id={`Text ${devlog.id}`} onMouseEnter={() => handleHoverVariable(`Text ${devlog.id}`)}>{devlog.data.text} </p>
                    </li>
                ))}
            </ul>
            <div className={Style.AddDevlog}>
                <h4 style={stylBright(sizeFlag, colorFlag)}  id="AddDevlog" onMouseEnter={() => handleHover("AddDevlog")}>AddDevlog</h4>
                <form onSubmit={handleCreate}>
                    <div>
                        <label htmlFor="version" style={stylBrown(sizeFlag, colorFlag)}  id="VersionDevlog" onMouseEnter={() => handleHover("VersionDevlog")}>Version: </label>
                        <input  style={styleInput(sizeFlag)} id='version' type="text" value={version} onChange={e => setVersion(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="date" style={stylBright(sizeFlag, colorFlag)}  id="DateDevlog" onMouseEnter={() => handleHover("DateDevlog")}>Date: </label>
                        <input  style={styleInput(sizeFlag)} id='date' type="text" value={date} onChange={e => setDate(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="text" style={stylBrown(sizeFlag, colorFlag)}  id="TextDevlog" onMouseEnter={() => handleHover("TextDevlog")}>Text: </label>
                        <textarea id='text' style={styleTextArea(sizeFlag)} type="text" value={text} onChange={e => setText(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="image" style={stylBright(sizeFlag, colorFlag)}  id="ImageDevlog" onMouseEnter={() => handleHover("ImageDevlog")}>Image: </label>
                        <input  style={styleInput(sizeFlag)} id='image' type="text" value={image} onChange={e => setImage(e.target.value)}/>
                    </div>
                    <button type="submit" className={Style.AddDevlogButton} style={stylBrown(sizeFlag, colorFlag)}  id="AddDevlogButton" onMouseEnter={() => handleHover("AddDevlogButton")}>Create Devlog</button>
                </form>
            </div>
        </div>
    )
}