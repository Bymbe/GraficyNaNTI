// WIĘKSZA CZCIONKA
var isFontLarge = false;
document.getElementById("largeFont").onclick = function () {
    //document.getElementById("abc").style.fontSize = "x-large";

    var Napis =
        document.getElementsByClassName("Napis");
    var menuButton =
        document.getElementsByClassName("menuButton");

    if (isFontLarge === false) {
        for (var i = 0; i < Napis.length; i++) {
            Napis[i].style.fontSize = "3.0rem";
        }
        for (var i = 0; i < menuButton.length; i++) {
            menuButton[i].style.fontSize = "3.0rem";
        }
        isFontLarge = true;
    } else {
        for (var i = 0; i < Napis.length; i++) {
            Napis[i].style.fontSize = "2.5rem";
        }
        for (var i = 0; i < menuButton.length; i++) {
            menuButton[i].style.fontSize = "2.5rem";
        }
        isFontLarge = false;
    }
    console.log("zmiana rozmiaru czcionki");

    if(isFontLarge === true) document.getElementById("largeFont").innerHTML = "(WŁ) Większa czcionka";
    if(isFontLarge === false) document.getElementById("largeFont").innerHTML = "(WYŁ) Większa czcionka";
}

// TEXT TO SPEECH
let isTextToSpeechOn = false;

document.getElementById("textToSpeech").onclick = function () {
    isTextToSpeechOn = isTextToSpeechOn !== true;

    if (document.getElementById("textToSpeech").innerHTML === "(WYŁ) Czytanie tekstu na głos")
        document.getElementById("textToSpeech").innerHTML = "(WŁ) Czytanie tekstu na głos";
    else {
        document.getElementById("textToSpeech").innerHTML = "(WYŁ) Czytanie tekstu na głos";
        speechSynthesis.cancel();
    }
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
            msg.rate = 1.5;
            window.speechSynthesis.speak(msg);
            console.log("2");
        }
    }
}
