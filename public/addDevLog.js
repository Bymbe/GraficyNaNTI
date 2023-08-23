document.getElementById("AddDevLog").onclick = function () {


    var t = document.getElementById("T").value;
    var pass = document.getElementById("pass").value;

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    // +getRandomInt(10000)
    if(pass=='12345'){
        if (t) {
                // document.getElementById("tresc_komentarzy").innerHTML +=
                //     "<br>" + author + " pisze: " + comment;
                //console.log("komentarz ->", comment);
                document.getElementById("errorMsg").innerHTML = "";
                localStorage.setItem('DEVLOG'+getRandomInt(100),t)



        } else {
            window.alert("Podaj swoją nazwę!");
            document.getElementById("errorMsg").innerHTML = "Podaj swoją nazwę!";
        }
    }
    else{
        window.alert("Podano złe hasło!");
    }





}