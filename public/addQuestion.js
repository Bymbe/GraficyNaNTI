document.getElementById("AddQuestion").onclick = function () {


    var question = document.getElementById("Q").value;
    var answer = document.getElementById("A").value;
    var pass = document.getElementById("pass").value;

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    // +getRandomInt(10000)
    if(pass=='12345'){
        if (question) {
            if (answer) {
                // document.getElementById("tresc_komentarzy").innerHTML +=
                //     "<br>" + author + " pisze: " + comment;
                //console.log("komentarz ->", comment);
                document.getElementById("errorMsg").innerHTML = "";
                localStorage.setItem('Q&A'+getRandomInt(100),'Q: '+question + "<br>" + 'A: '+answer)


            } else {
                window.alert("Wpisz treść komentarza!");
                document.getElementById("errorMsg").innerHTML = "Wpisz treść komentarza!";
            }
        } else {
            window.alert("Podaj swoją nazwę!");
            document.getElementById("errorMsg").innerHTML = "Podaj swoją nazwę!";
        }
    }
    else{
        window.alert("Podano złe hasło!");
    }





}