import React, {useEffect, useState} from "react";
import {collection, getDocs, doc, deleteDoc, updateDoc, addDoc} from "firebase/firestore";
import {db} from "../../DataBase/init-firebase";
import Style from "../../styles/ListComments.module.css"

function ListComments(props) {

    const sizeFlag = props.fontSize
    const colorFlag = props.color
    const speachFlag = props.speach

    const [answer, setAnswer] = useState('')
    const [comments, setComments] = useState([])
    const [nickName, setNickName] = useState('')
    const [question, setQuestion] = useState('')

    useEffect(() => {
        getComments()
    }, [])

    useEffect(() => {
        console.log(comments)
    }, [comments])

    function getComments() {
        const commentsCollectionRef = collection(db, 'Comments')
        getDocs(commentsCollectionRef).then(response => {
            const comms = response.docs.map(doc => ({data: doc.data(), id: doc.id}))
            setComments(comms)
        }).catch(error => console.log(error.message))
    }

    function deleteComment(id) {
        const docRef = doc(db, 'Comments', id)
        deleteDoc(docRef).then(() => console.log('Comment deleted')).catch(error => console.log(error.message))
        getComments()
    }

    function handleCreate(e) {
        e.preventDefault()
        if (nickName === '' || question === '') {
            return
        }
        const commentsCollectionRef = collection(db, 'Comments')
        const payload = {Nickname: nickName, Question: question}
        addDoc(commentsCollectionRef, payload).then(response => {
            console.log(response.id)
        }).catch(error => {
            console.log(error.message)
        })
        setNickName('')
        setQuestion('')
        getComments()
    }

    function handleEdit(e, n, q, a, i) {
        e.preventDefault()
        if (n === '' || q === '' || a === '' || i === '') {
            return
        }

        const docRef = doc(db, 'Comments', i)
        const payLoad = {Nickname: n, Question: q, Answer: a, Edited: true}
        updateDoc(docRef, payLoad).then(response => {
            console.log(response)
        }).catch(error => console.log(error.message))
        setAnswer('')
        getComments()
    }

    const stylJasne = (x,y) => ({
        fontSize: (x) ? '32px' : '16px',
        color: (y) ? 'black' : 'white',
        fontFamily: (y) ? 'Arial' : 'Bookman Old Style',
        background: (y) ? 'yellow' : '#B2A07A'
    })

    const stylCiemne = (x,y) => ({
        fontSize: (x) ? '32px' : '16px',
        color: (y) ? 'black' : 'white',
        fontFamily: (y) ? 'Arial' : 'Bookman Old Style',
        background: (y) ? 'yellow' : '#573023'
    })

    const stylButtonDelete = (x,y) => ({
        fontSize: (x) ? '32px' : '16px',
        color: (y) ? 'black' : 'white',
        fontFamily: (y) ? 'Arial' : 'Bookman Old Style',
        background: (y) ? 'yellow' : '#ed193b'
    })

    const stylButtonSubmit = (x,y) => ({
        fontSize: (x) ? '32px' : '16px',
        color: (y) ? 'black' : 'white',
        fontFamily: (y) ? 'Arial' : 'Bookman Old Style',
        background: (y) ? 'yellow' : '#75ad6d'
    })

    const stylButtonAnswer = (x,y) => ({
        fontSize: (x) ? '32px' : '16px',
        color: (y) ? 'black' : 'white',
        fontFamily: (y) ? 'Arial' : 'Bookman Old Style',
        background: (y) ? 'yellow' : '#4c86ed'
    })

    const styleTextArea = (x) => ({
        width: (x) ? '75%' : '85%',
        left: (x) ? '90px' : '0px',
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
        <div className={Style.ListComments} >
            <ul>
                {comments.map(comment => {
                    if (comment.data.Edited === true) {
                        return (
                            <li key={comment.id}>
                                <button onClick={() => deleteComment(comment.id)} className={Style.Delete} style={stylButtonDelete(sizeFlag, colorFlag)}  id="DeleteButton" onMouseEnter={() => handleHover("DeleteButton")}>Delete</button>
                                <p className={Style.Nick} style={stylCiemne(sizeFlag, colorFlag)}  id={`NicknameAnswered ${comment.id}`} onMouseEnter={() => handleHoverVariable(`NicknameAnswered ${comment.id}`)}>{comment.data.Nickname}</p>
                                <p className={Style.Comment} style={stylJasne(sizeFlag, colorFlag)}  id={`QuestionAnswered ${comment.id}`} onMouseEnter={() => handleHoverVariable(`QuestionAnswered ${comment.id}`)}>Question: {comment.data.Question}</p>
                                <p className={Style.Answer} style={stylCiemne(sizeFlag, colorFlag)}  id={`AnswerAnswered ${comment.id}`} onMouseEnter={() => handleHoverVariable(`AnswerAnswered ${comment.id}`)}> Answer: {comment.data.Answer}</p>
                            </li>
                        )
                    } else {
                        return (
                            <li key={comment.id}>
                                <button onClick={() => deleteComment(comment.id)}  className={Style.Delete} style={stylButtonDelete(sizeFlag, colorFlag)}  id="DeleteButton" onMouseEnter={() => handleHover("DeleteButton")}>Delete</button>
                                <p className={Style.Nick} style={stylCiemne(sizeFlag, colorFlag)}  id={`NicknameToBeAnswered ${comment.id}`} onMouseEnter={() => handleHoverVariable(`NicknameToBeAnswered ${comment.id}`)}>{comment.data.Nickname}</p>
                                <p className={Style.Comment} style={stylJasne(sizeFlag, colorFlag)}  id={`QuestionToBeAnswered ${comment.id}`} onMouseEnter={() => handleHoverVariable(`QuestionToBeAnswered ${comment.id}`)}>Question: {comment.data.Question}</p>
                                <form onSubmit={event => {
                                    handleEdit(event, comment.data.Nickname, comment.data.Question, answer, comment.id)
                                }}>
                                    <label htmlFor="Answer" style={stylCiemne(sizeFlag, colorFlag)}  >Answer: </label>
                                    <textarea style={styleTextArea(sizeFlag)} id='Answer' type='text' value={answer}
                                           onChange={e => setAnswer(e.target.value)}></textarea>
                                    <button  className={Style.SubmitAnswer}  type="submit" style={stylButtonAnswer(sizeFlag, colorFlag)}  id="AddAnswerButton" onMouseEnter={() => handleHover("AddAnswerButton")}>Submit answer</button>
                                </form>
                            </li>
                        )
                    }
                })}
            </ul>
            <div className={Style.AddComment}>
                <h4 style={stylCiemne(sizeFlag, colorFlag)} id="AddComment" onMouseEnter={() => handleHover("AddComment")}>Add Comment</h4>
                <form onSubmit={handleCreate}>
                    <div style={stylCiemne(sizeFlag, colorFlag)}>
                        <label htmlFor="Nickname" style={stylCiemne(sizeFlag, colorFlag)}  id="NickNameToBeAsked" onMouseEnter={() => handleHover("NickNameToBeAsked")}>Nickname: </label>
                        <textarea style={styleTextArea(sizeFlag)} id='Nickname' type='text' value={nickName}
                               onChange={e => setNickName(e.target.value)}></textarea>
                    </div>
                    <div style={stylJasne(sizeFlag, colorFlag)}>
                        <label htmlFor="Question" style={stylJasne(sizeFlag, colorFlag)}  id="QuestionToBeAsked" onMouseEnter={() => handleHover("QuestionToBeAsked")}>Question: </label>
                        <textarea style={styleTextArea(sizeFlag)} id='Question' type='text' value={question}
                               onChange={e => setQuestion(e.target.value)}></textarea>
                    </div>
                    <button type="submit"  className={Style.SubmitQuestion} style={stylButtonSubmit(sizeFlag, colorFlag)}  id="AddQuestionButton" onMouseEnter={() => handleHover("AddQuestionButton")}>Submit question</button>
                </form>
            </div>
        </div>
    )
}

export default ListComments