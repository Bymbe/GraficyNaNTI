document.getElementById("SendButton").onclick = function () {


    var author = document.getElementById("authorText").value;
    var comment = document.getElementById("commentText").value;

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    // +getRandomInt(10000)

    if (author) {
        if (comment) {
            // document.getElementById("tresc_komentarzy").innerHTML +=
            //     "<br>" + author + " pisze: " + comment;
            console.log("komentarz ->", comment);
            document.getElementById("errorMsg").innerHTML = "";
            localStorage.setItem('Comment'+getRandomInt(1000),author + " pisze: " + comment)


        } else {
            window.alert("Wpisz treść komentarza!");
            document.getElementById("errorMsg").innerHTML = "Wpisz treść komentarza!";
        }
    } else {
        window.alert("Podaj swoją nazwę!");
        document.getElementById("errorMsg").innerHTML = "Podaj swoją nazwę!";
    }





}