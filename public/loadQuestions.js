document.getElementById("LoadQ&A").onclick = function (int) {
    console.log("ładuję plik");


    let com = "" ;

    for (let step = 0; step < 100; step++) {
        if(localStorage.getItem('Q&A'+ step)!=null)
        com = com + "<br><br><br>" +localStorage.getItem('Q&A'+ step)
    }



    document.getElementById('Q&A').innerHTML = com;
    //let com = localStorage.getItem('Comment') ;

    // var i;
    // for (i=0;i<10000;i++){
    //     com = localStorage.getItem('Comment'+i) ;
    //     document.getElementById('tresc_komentarzy').innerHTML = com;
    // }

    // var txtFile = new XMLHttpRequest();
    // var allText = "file not found";
    // txtFile.onreadystatechange = function () {
    //     if (txtFile.readyState === XMLHttpRequest.DONE && txtFile.status == 200) {
    //         allText = txtFile.responseText;
    //         allText = allText.split("\n").join("<br>");
    //     }
    //

    // }
    // txtFile.open("GET", 'comments.txt', true);
    // txtFile.send(null);
}