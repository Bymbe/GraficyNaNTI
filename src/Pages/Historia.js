import React, {useEffect} from 'react'
import {collection, doc, getDoc, getDocs, setDoc} from "firebase/firestore";
import {db} from "../DataBase/init-firebase";

function Historia(props) {

    const [data, setData] = React.useState(new Date())
    const [Zamówienia, setZamówienia] = React.useState([])

    useEffect(() => {
        const timer = setInterval(() => {
            setData(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        getHistoria();
    }, []);

    const getHistoria = async () => {
        try{
            const OrderCollectionRef = await collection(db, props.Login,'Dane','Zamówienia');

            const snapShot = await getDocs(OrderCollectionRef);
            const documents = snapShot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setZamówienia(documents);

        }catch(err){
            console.log(err);
        }
    }

    const CreateOrder = async () => {
        console.log("Dodawanie")

    }

    /*rzeczy w zamówieniu: Kwota, Data, lista produktów(mozna dać dokumentowi "Zamowienie" kolekcję z karmami, Dane Adresowe*/

    return (
        <div className="Historia">
            <br/><br/><br/><br/><br/><br/>
            <h1>Historia zamówień</h1>

            <ul>
                {Zamówienia.map(order => {
                    return (
                        <li key={order.id}>
                            <h2>Zamówienie</h2>

                            <h2>{order.Data}</h2>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Historia;