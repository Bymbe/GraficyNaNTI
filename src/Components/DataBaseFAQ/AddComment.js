// import React, {useState} from "react";
// import {addDoc, collection, getDocs} from "firebase/firestore";
// import {db} from "../../DataBase/init-firebase";
// // import Style from "../../styles/AddComment.module.css"
//
// export default function AddComment(){
//
//     const [nickName, setNickName] = useState('')
//     const [question, setQuestion] = useState('')
//
//
//
//     function handleCreate(e){
//         e.preventDefault()
//         if(nickName === '' || question === ''){
//             return
//         }
//         const commentsCollectionRef = collection(db, 'Comments')
//         const payload = {Nickname : nickName, Question: question}
//         addDoc(commentsCollectionRef,payload).then(response => {
//             console.log(response.id)
//         }).catch(error => {
//             console.log(error.message)
//         })
//     }
//
//
//     return (
//         <div className={Style.AddComment}>
//             <h4>Add Comment</h4>
//             <form onSubmit={handleCreate}>
//                 <div>
//                     <label htmlFor="Nickname">Nickname: </label>
//                     <input id='Nickname' type='text' value={nickName} onChange={e => setNickName(e.target.value)}></input>
//                 </div>
//
//                 <div>
//                     <label htmlFor="Question">Question: </label>
//                     <input id='Question' type='text' value={question} onChange={e => setQuestion(e.target.value)}></input>
//                 </div>
//                <button type="submit">Submit question</button>
//             </form>
//         </div>
//     )
// }