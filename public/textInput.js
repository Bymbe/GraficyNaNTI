document.getElementById("SendButton").onclick = function(){

    var author = document.getElementById("authorText").value;
    var comment = document.getElementById("commentText").value;

    document.getElementById("komentarze").innerHTML +=
        "<br>" + author + " pisze: " + comment;
    console.log("komentarz ->",comment);
}