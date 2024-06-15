import React, {useEffect, useState} from 'react'
import {collection, doc, getDocs, updateDoc} from "firebase/firestore";
import {db} from "../DataBase/init-firebase";



function Zamowienia() {

    const [Zamówienia, setZamówienia]= useState([]);


    useEffect(() => {
        getZamówienia();
    }, []);

    const getZamówienia = async () => {

            try{
                const OrderCollectionRef = await collection(db,'Zamówienia');

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

    const handleStatus = (value, orderId) => {
        if(value === 'Wysłane'){
            updateDoc(doc(db,'Zamówienia', orderId), {Dostarczono: true})
        }
        else{
            updateDoc(doc(db,'Zamówienia', orderId), {Dostarczono: false})
        }
        getZamówienia()
        console.log(value);

    }

    return (
        <div className="Zamowienia">
            <br/><br/><br/><br/><br/><br/><br/>
                <h1>Zamówienia</h1>

            <div className="Zamownienia-Conteiner">
                {Zamówienia.length > 0 ? (
                    Zamówienia.map((order, orderIndex) => (
                    <div className="Zamowienie">

                        <div className="ZamowienieTop">

                            <div className="Zamowienie-Dane">
                                <br/>
                                <h2>Numer Zamówienia:</h2>
                                <div className="NumerZamownia">
                                    <h4> {order.id}</h4>
                                </div>
                                <h2>Adres:</h2>
                                <div className="Adres">
                                    <h4> {order.Adres}</h4>
                                    <br/>
                                </div>
                                <h2>E-mail: </h2>
                                <div>
                                    <h4>{order.EMail}</h4>
                                    <br/>
                                </div>
                            </div>


                            <div className="Zamowienie-Status">
                                <br/>
                                {order.TempUser !== true &&
                                    <div>
                                        <h2>Imie i Nazwisko: </h2>
                                        <h4>{order.Imię} {order.Nazwisko}</h4>
                                        <br/>
                                    </div>
                                }
                                <br/><br/><br/>

                                <h3>Status:</h3>
                                <select value={order.Dostarczono ? "Wysłane" : "W realizacji"}
                                        onChange={(e) => {
                                            handleStatus(e.target.value, order.id)
                                        }}>
                                    <option value="W realizaji">W realizacji</option>
                                    <option value="Wysłane">Wysłane</option>
                                </select>
                            </div>
                        </div>
                        <div className="ZamowienieProdukty">
                            <div className="ProduktyHead">Produkty</div>
                            <div className="Produkty">
                            {Object.keys(order).map((key, index) => {

                                    if (key.startsWith("item")) {
                                        const item = order[key];
                                        return (
                                            <div className="Produkt" key={index}>
                                                <div className="Ilosc">{item.Amount}x</div>
                                                <div className="Nazwa">{item.Nazwa}</div>
                                                <div className="Cena">{item.Cena}</div>
                                            </div>
                                        );
                                    }
                                    return null;
                                })}
                                <div className="ZamowieniaSuma">
                                    <div className="Suma">
                                        Suma
                                    </div>
                                    <div className="Suma2">
                                        {order.Suma}
                                    </div>


                                </div>

                            </div>
                            <h2></h2>
                        </div>
                    </div>
                    ))
                ): (<p className="Historia-Komunikat">Nie masz jeszcze żadnych zamówień</p>)}
            </div>
            <h1></h1>
        </div>
    )
}

export default Zamowienia;