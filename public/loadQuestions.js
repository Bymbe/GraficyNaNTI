document.getElementById("LoadQ&A").onclick = function (int) {
    console.log("ładuję plik");


    let com = "" ;

    for (let step = 0; step < 100; step++) {
        if(localStorage.getItem('Q&A'+ step)!=null)
        com = com + "<br><br><br>" +localStorage.getItem('Q&A'+ step)
    }
    document.getElementById('Q&A').innerHTML = com;

}