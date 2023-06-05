document.getElementById("SendButton").onclick = function () {

    var author = document.getElementById("authorText").value;
    var comment = document.getElementById("commentText").value;

    if (author) {
        if (comment) {
            document.getElementById("komentarze").innerHTML +=
                "<br>" + author + " pisze: " + comment;
            console.log("komentarz ->", comment);
            document.getElementById("errorMsg").innerHTML = "";
        } else {
            document.getElementById("errorMsg").innerHTML = "Wpisz treść komentarza!";
        }
    } else {
        document.getElementById("errorMsg").innerHTML = "Podaj swoją nazwę!";
    }
}