document.getElementById("SendButton").onclick = function () {


    var author = document.getElementById("authorText").value;
    var comment = document.getElementById("commentText").value;

    if (author) {
        if (comment) {
            document.getElementById("tresc_komentarzy").innerHTML +=
                "<br>" + author + " pisze: " + comment;
            console.log("komentarz ->", comment);
            document.getElementById("errorMsg").innerHTML = "";

        } else {
            window.alert("Wpisz treść komentarza!");
            document.getElementById("errorMsg").innerHTML = "Wpisz treść komentarza!";
        }
    } else {
        window.alert("Podaj swoją nazwę!");
        document.getElementById("errorMsg").innerHTML = "Podaj swoją nazwę!";
    }
}