import React, {useState} from "react";
import {collection, addDoc} from "firebase/firestore";
import {db} from "../../DataBase/init-firebase";

export default function AddDevlog() {
    const [version, setVersion] = useState('')
    const [date, setDate] = useState('')
    const [text, setText] = useState('')
    const [image, setImage] = useState('')

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
    }

    return (
        <div>
            <h4>AddDevlog</h4>
            <form onSubmit={handleCreate}>
                <label htmlFor="version">DevLog version</label>
                <input id='version' type="text" value={version} onChange={e => setVersion(e.target.value)}/>
                <br/>
                <label htmlFor="date">DevLog date</label>
                <input id='date' type="text" value={date} onChange={e => setDate(e.target.value)}/>
                <br/>
                <label htmlFor="text">DevLog text</label>
                <textarea id='text' type="text" value={text} onChange={e => setText(e.target.value)}/>
                <br/>
                <label htmlFor="image">DevLog image</label>
                <input id='image' type="text" value={image} onChange={e => setImage(e.target.value)}/>
                <button type="submit">Create Devlog</button>
            </form>

        </div>
    )
}