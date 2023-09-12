import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Timer from "./Components/Timer";
import Home from "./Pages/Home"
import DevLog from "./Pages/Devlog"
import FAQ from "./Pages/FAQ"
import {useState} from "react";
function App() {

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
                <Switch>
                    <Route path="/" exact component={() => <Home fontSize={sizeFalg} color={colorFalg} speach={speachFlag}/>}/>
                    <Route path="/Devlog" exact component={() => <DevLog fontSize={sizeFalg} color={colorFalg} speach={speachFlag}/>}/>
                    <Route path="/FAQ" exact component={()  => <FAQ fontSize={sizeFalg} color={colorFalg} speach={speachFlag}/>}/>
                </Switch>
                <Footer fontSize={sizeFalg} color={colorFalg} speach={speachFlag}/>
            </Router>
        </div>
    );
}

export default App;
