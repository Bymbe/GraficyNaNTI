function odliczanie() {
    //data ztgk 29.06.2023 9"00
    //nie wiem jaka jest dokladnie data ale dajmy na to ta co wyzej

    var ztgkDate = new Date(2024,5,29,9,0,0,0).getTime();
    var todayDate = new Date().getTime();
    var remainingTime = ztgkDate - todayDate;


    var remainingDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    var remainingHours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if(remainingHours < 10) remainingHours = "0" + remainingHours;
    var remainingMinutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    if(remainingMinutes < 10) remainingMinutes = "0" + remainingMinutes;
    var remainingSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    // if(remainingSeconds < 10) remainingSeconds = "0" + remainingSeconds;

    document.getElementById("odliczanieDoZTGK").innerHTML =
        "Do ZTGK zostało " + remainingDays + " dni, " + remainingHours + "h "
    + remainingMinutes + "m " + remainingSeconds + "s";


    setTimeout("odliczanie()", 1000);
}