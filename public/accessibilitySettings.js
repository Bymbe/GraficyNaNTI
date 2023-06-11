// WIĘKSZA CZCIONKA
document.getElementById("largeFont").onclick = function () {
    //document.getElementById("abc").style.fontSize = "x-large";

    if (document.getElementById("largeFont").innerHTML === "(WYŁ) Większa czcionka")
        document.getElementById("largeFont").innerHTML = "(WŁ) Większa czcionka";
    else document.getElementById("largeFont").innerHTML = "(WYŁ) Większa czcionka";


    var Napis =
        document.getElementsByClassName("Napis");
    if (Napis[0].style.fontSize != "xxx-large") {
        for (var i = 0; i < Napis.length; i++) {
            Napis[i].style.fontSize = "xxx-large";
        }
    } else {
        for (var i = 0; i < Napis.length; i++) {
            Napis[i].style.fontSize = "x-large";
        }
    }

    var menuButton =
        document.getElementsByClassName("menuButton");
    if (menuButton[0].style.fontSize != "xxx-large") {
        for (var i = 0; i < menuButton.length; i++) {
            menuButton[i].style.fontSize = "xxx-large";
        }
    } else {
        for (var i = 0; i < menuButton.length; i++) {
            menuButton[i].style.fontSize = "x-large";
        }
    }
    console.log("zmiana rozmiaru czcionki");
}

// TEXT TO SPEECH
let isTextToSpeechOn = false;

document.getElementById("textToSpeech").onclick = function () {
    isTextToSpeechOn = isTextToSpeechOn !== true;

    if (document.getElementById("textToSpeech").innerHTML === "(WYŁ) Czytanie tekstu na głos")
        document.getElementById("textToSpeech").innerHTML = "(WŁ) Czytanie tekstu na głos";
    else document.getElementById("textToSpeech").innerHTML = "(WYŁ) Czytanie tekstu na głos";
}

const e1 = document.getElementById("textToSpeech");
e1.onmouseover = function () {
    if (isTextToSpeechOn === true) {
        var msg = new SpeechSynthesisUtterance();
        msg.text = e1.text;
        window.speechSynthesis.speak(msg);
    }
}

const NapisTTS = document.getElementsByClassName("Napis");
document.onmouseover = function () {
    console.log(NapisTTS.length);
    if (isTextToSpeechOn === true) {
        for (var i = 0; i < NapisTTS.length; i++) {
            var msg = new SpeechSynthesisUtterance();
            msg.text = NapisTTS[i].innerHTML;
            window.speechSynthesis.speak(msg);
            console.log("2");
        }
    }
}
