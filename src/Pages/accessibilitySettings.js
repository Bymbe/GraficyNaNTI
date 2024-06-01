import React from "react";

var isHighContrast = false;
var isBiggerTextSize = false;

document.addEventListener('keydown', function(event) {
    if (event.key === '1' || event.key === '!'){
        console.log("zmiana kontrastu");

        const root = document.documentElement;
        if(isHighContrast === false) {
            isHighContrast = true;
            root.style.setProperty('--textcolor', "#000000");
            root.style.setProperty('--footertextcolor', "#000000");
            root.style.setProperty('--bgcolor', "#F0F00F");
            root.style.setProperty('--registerbgcolor1', "#F0F00F");
            root.style.setProperty('--registerbgcolor2', "#F0F00F");
            root.style.setProperty('--registertextcolor', "#000000");

            //root.style.setProperty('--registertextcolor', "#000000");
            //root.style.setProperty('--registertextcolor', "#000000");
            //root.style.setProperty('--registertextcolor', "#000000");
        } else {
            isHighContrast = false;
            root.style.setProperty('--textcolor', "#F6F1CB");
            root.style.setProperty('--footertextcolor', "#5E3A1F");
            root.style.setProperty('--bgcolor', "null");
            root.style.setProperty('--registerbgcolor1', "#5E3A1F");
            root.style.setProperty('--registerbgcolor2', "#F6F1CB");
            root.style.setProperty('--registertextcolor', "#5E3A1F");

            //root.style.setProperty('--registertextcolor', "#000000");
            //root.style.setProperty('--registertextcolor', "#000000");
            //root.style.setProperty('--registertextcolor', "#000000");
        }

    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === '2' || event.key === '@'){
        console.log("zmiana wielkosci czcionki");

        const root = document.documentElement;
        if(isBiggerTextSize === false) {
            isBiggerTextSize = true;
            root.style.setProperty('--additionaltextsize', "5px");
        } else {
            isBiggerTextSize = false;
            root.style.setProperty('--additionaltextsize', "0px");
        }

    }
});