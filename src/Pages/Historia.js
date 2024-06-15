import React, {useEffect} from 'react'
import {collection, doc, getDoc, getDocs, setDoc} from "firebase/firestore";
import {db} from "../DataBase/init-firebase";
import {Link} from "react-router-dom";

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
                const reOrderData = orderSnap.data();
                setReOrder(orderSnap.data());

                const itemKeys = Object.keys(reOrderData).filter(key => key.startsWith('item'));

                for( const key of itemKeys){
                    const item = reOrderData[key];
                    await setDoc(doc(db, props.Login,'Dane', 'Koszyk', item.Nazwa), {
                        Amount: item.Amount, Cena: item.Cena
                    })
                }
            }
            else{
                console.log("No such document");
            }

        }catch(err){
            console.error("Error copying items: ", err);

        }
    }

    /*rzeczy w zamówieniu: Kwota, Data, lista produktów(mozna dać dokumentowi "Zamowienie" kolekcję z karmami, Dane Adresowe*/

    return (
        <div className="Historia">
            <br/><br/><br/><br/><br/><br/><br/><br/>

            <div className="Historia-ListaZamówień">
                <h1>Historia zamówień</h1>
                {Zamówienia.length > 0 ? (
                    Zamówienia.map((order, orderIndex) => (
                        <div key={order.id} className="Historia-Zamówienie">
                            <div className="Historia-Zamówienie-Nagłówek">
                                <div className="Historia-Zamówienie-Dane">
                                    <h2>Order ID: {order.id}</h2>
                                    <p>Created at: {order.createdAt}</p>
                                </div>

                                <Link onClick={() => {PonówZamówienie(order.id)}} to="/Koszyk" >
                                    <button>Ponów zamówienie</button>
                                </Link>
                            </div>
                            <div className="Historia-Zamówienie-Informacje">
                                <div className="Historia-Zamówienie-Dane-Kontaktowe">
                                    <h2>Dane adresowe</h2>
                                    <div>
                                        <h3>Imie i Nazwisko: {order.Imię} {order.Nazwisko}</h3>
                                        <h3>Adres: {order.Adres}</h3>
                                        <h3>Kod pocztowy: {order.KodPocztowy}</h3>
                                    </div>
                                </div>
                                <div className="Historia-Zamówienie-Status">
                                    <h2>Status</h2>
                                    <h3>Dostarczono: {order.Dostarczono ? ('Tak') : ('Nie')}</h3> {/*mozna pokombinowac żeby było na czerwono jak nie dostarczono*/}
                                </div>
                             </div>
                            <div className="Historia-Zamówienie-Produkty">
                                <h2>Produkty</h2>
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
                            </div>
                            <div className="Kreseczka"></div>
                            <div className="Historia-Podsumowanie">
                                <h2>Metoda płatności: {order.MetodaPłatności}</h2>
                                <h2>Suma: {order.Suma}</h2>
                            </div>
                        </div>
                    ))
                ) : (<p className="Historia-Komunikat">Nie masz jeszcze żadnych zamówień</p>)}
            </div>


        </div>
    );
};

export default Historia;