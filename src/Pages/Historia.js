import React, {useEffect} from 'react'
import {collection, doc, getDoc, getDocs, setDoc} from "firebase/firestore";
import {db} from "../DataBase/init-firebase";

function Historia(props) {

    const [data, setData] = React.useState(new Date())
    const [Zamówienia, setZamówienia] = React.useState([])
    const [ReOrder, setReOrder] = React.useState(null)

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

    const PonówZamówienie = async (orderID) => {
        try{
            const orderRef = doc(db, props.Login,'Dane','Zamówienia', orderID);
            const orderSnap = await getDoc(orderRef);
            if(orderSnap.exists()){
                setReOrder(orderSnap.data());
            }
            else{
                console.log("No such document");
            }
        }catch(err){
            console.log("Error fetching order: ", err);
        }

        try{
            const itemKeys = Object.keys(ReOrder).filter(key => key.startsWith('item'));

            for( const key of itemKeys){
                const item = ReOrder[key];
                await setDoc(doc(db, props.Login,'Dane', 'Koszyk', item.Nazwa), {
                    Amount: item.Amount, Cena: item.Cena
                })
            }


        }catch(err){
            console.error("Error copying items: ", err);

        }
    }

    /*rzeczy w zamówieniu: Kwota, Data, lista produktów(mozna dać dokumentowi "Zamowienie" kolekcję z karmami, Dane Adresowe*/

    return (
        <div className="Historia">
            <br/><br/><br/><br/><br/><br/>
            <h1>Historia zamówień</h1>
            <div className="Historia-ListaZamówień">
                {Zamówienia.length > 0 ? (
                    Zamówienia.map((order, orderIndex) => (
                        <div key={order.id}>
                            <h2>Order ID: {order.id}</h2>
                            <p>Created at: {order.createdAt}</p>
                            <p>Dostarczono: {order.Dostarczono ? ('Tak') : ('Nie')}</p> {/*mozna pokombinowac żeby było na czerwono jak nie dostarczono*/}
                            {Object.keys(order).map((key, index) => {

                                if (key.startsWith("item")) {
                                    const item = order[key];
                                    return (
                                        <div key={index}>
                                            <p>Nazwa: {item.Nazwa}</p>
                                            <p>Cena: {item.Cena}</p>
                                            <p>Ilość: {item.Amount}</p>
                                        </div>
                                    );
                                }
                                return null;
                            })}
                            <button onClick={() => {
                                PonówZamówienie(order.id)
                            }}>Ponów zamówienie
                            </button>
                        </div>
                    ))
                ) : (<p>Nie masz jeszcze żadnych zamówień</p>)}
            </div>


        </div>
    );
};

export default Historia;