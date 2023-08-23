document.getElementById("LoadDevLogs").onclick = function (int) {
    console.log("ładuję plik");


    let com = "" ;

    for (let step = 0; step < 100; step++) {
        if(localStorage.getItem('DEVLOG'+ step)!=null)
        com = com + "<br><br><br>" +localStorage.getItem('DEVLOG'+ step)
    }



    document.getElementById('DEVLOG').innerHTML = com;
   
}