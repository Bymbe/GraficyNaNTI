document.getElementById("largeFont").onclick = function () {
    //document.getElementById("abc").style.fontSize = "x-large";

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