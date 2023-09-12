import React, {useState} from "react";
import {doc, updateDoc} from "firebase/firestore";
import {db} from "../../DataBase/init-firebase";
export default function EditComments(){

    const [id, setId] = useState('')
    const [nickName, setNickName] = useState('')
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')

    function handleEdit(e){
        e.preventDefault()
        if(nickName === '' || question === '' || answer === ''){
            return
        }

        const docRef = doc(db, 'Comments', id)
        const payLoad = {Nickname: nickName, Question : question, Answer: answer}
        updateDoc(docRef, payLoad).then(response => {
            console.log(response)
        }).catch(error => console.log(error.message))
    }

    return (
        <div>
            <h4>EditComment</h4>
            <form onSubmit={handleEdit}>
                <label htmlFor="id">Id</label>
                <input id='id' type='text' value={id}></input>
                <br/>
                <label htmlFor="Nickname">Nickname</label>
                <input id='Nickname' type='text' value={nickName}></input>
                <br/>
                <label htmlFor="Question">Question</label>
                <input id='Question' type='text' value={question}></input>
                <br/>
                <label htmlFor="Answer">Answer</label>
                <input id='Answer' type='text' value={answer}></input>
                <button type="submit">Submit question</button>
            </form>
        </div>
    )
}

