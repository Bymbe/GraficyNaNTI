import React, {useState} from "react";
import {doc, updateDoc} from "firebase/firestore";
import {db} from "../../DataBase/init-firebase";


export default function EditDevlog() {
    const [id, setId] = useState('')
    const [version, setVersion] = useState('')
    const [date, setDate] = useState('')
    const [text, setText] = useState('')
    const [image, setImage] = useState('')

    function handleEdit(e) {
        e.preventDefault()
        if(version === '' || date === '' || text === '' || image === ''){
            return
        }

        const docRef=doc(db, 'Devlogs', id)
        const payLoad = {version: version, date: date, text: text, image: image}
        updateDoc(docRef, payLoad).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error.message)
        })
    }

    return (
        <div>
            <h4>EditDevlog</h4>
            <form onSubmit={handleEdit}>
                <label htmlFor="id">DevLog ID</label>
                <input id='id' type="text" value={id} onChange={e => setId(e.target.value)}/>
                <br/>
                <label htmlFor="version">DevLog version</label>
                <input id='version' type="text" value={version} onChange={e => setVersion(e.target.value)}/>
                <br/>
                <label htmlFor="date">DevLog date</label>
                <input id='date' type="text" value={date} onChange={e => setDate(e.target.value)}/>
                <br/>
                <label htmlFor="text">DevLog text</label>
                <input id='text' type="text" value={text} onChange={e => setText(e.target.value)}/>
                <br/>
                <label htmlFor="image">DevLog image</label>
                <input id='image' type="text" value={image} onChange={e => setImage(e.target.value)}/>
                <button type="submit">Edit Devlog</button>
            </form>

        </div>
    )
}