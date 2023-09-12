import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Timer from "./Components/Timer";
import Home from "./Pages/Home"
import DevLog from "./Pages/Devlog"
import FAQ from "./Pages/FAQ"
import AccesibilitySettings from "./Components/AccesibilitySettings";
import {useState} from "react";

/*Ustawienia dostępności tak jak gościu od pizzy robił nav bar czyli if jakaś wartość to używamy innego zestawu napisów
* struktura jest identyczna tylko mają inny tag i w css opisujemy formatowanie tego taga w nowy sposób*/
function App() {

    const sizeFlag  = (value) => {
        console.log(value)
    };

    const [sizeFalg, setSizeFalg] = useState(false)
    const [colorFalg, setColorFalg] = useState(false)
    const [speachFlag, setSpeachFlag] = useState(false)

    function CallBackSize (data){
        setSizeFalg(data)
    }

    function CallBackColor (data){
        setColorFalg(data)
    }

    function CallBackSpeach (data){
        setSpeachFlag(data)
        console.log(speachFlag)
    }

    return (
        <div className="App">
            <Router>

                <Timer fontSize={sizeFalg} color={colorFalg} speach={speachFlag}/>
                <Navbar handleCallbackSize={CallBackSize} handleCallbackColor={CallBackColor} handleCallbackSpeak={CallBackSpeach}/>
                {/*<AccesibilitySettings handleCallbackSize={CallBackSize} handleCallbackColor={CallBackColor} handleCallbackSpeak={CallBackSpeach}/>*/}
                <Switch>
                    {/*<Route path="/" exact component={Home} />*/}
                    {/*<Route path="/" exact component={Home}/>*/}
                    {/*<Route path="/Devlog" exact component={DevLog}/>*/}

                    <Route path="/" exact component={() => <Home fontSize={sizeFalg} color={colorFalg} speach={speachFlag}/>}/>
                    <Route path="/Devlog" exact component={() => <DevLog fontSize={sizeFalg} color={colorFalg} speach={speachFlag}/>}/>
                    <Route path="/FAQ" exact component={()  => <FAQ fontSize={sizeFalg} color={colorFalg} speach={speachFlag}/>}/>

                        {/*<Route*/}
                    {/*    path="/"*/}
                    {/*    render={(props) => <Home {...props} authed={true} />}*/}
                    {/*/>*/}
                    {/*<Route path='/'>*/}
                    {/*    <Home  fontSize={sizeFalg} color={colorFalg} speach={speachFlag}/>*/}
                    {/*</Route>*/}
                    {/*<Route path='/Devlog'>*/}
                    {/*    <DevLog/>*/}
                    {/*</Route>*/}

                    {/*<Route path='/FAQ'>*/}
                    {/*    <FAQ/>*/}
                    {/*</Route>*/}
                    {/*<Route path="/" render={(props) => <Home {... props} authed={true} />} />*/}
                    {/*<Route path="/Devlog" exact component={DevLog} fontSize={sizeFalg} color={colorFalg} speach={speachFlag}/>*/}
                    {/*<Route path="/FAQ" exact component={FAQ} fontSize={sizeFalg} color={colorFalg} speach={speachFlag}/>*/}
                </Switch>
                <Footer fontSize={sizeFalg} color={colorFalg} speach={speachFlag}/>

            </Router>
        </div>
    );
}

export default App;
