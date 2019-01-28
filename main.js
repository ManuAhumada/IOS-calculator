var pantalla = "0"

function typeNumber(number){

    if ((pantalla.replace(/,|\.|-/g, '')).length === 9) return;
    if (pantalla.search(/\./) !== -1 && number === '.') return;


    if ((pantalla === "0" || pantalla === "-0") && number !== ".") {
        if (number === "0") return;        
        if (pantalla === "-0") {
            pantalla = "-" + number;
        } else {
            pantalla = number;        
        }   
        $("#clear").text("C");
    } else {
        if (pantalla.search(/\./g) == -1 && (pantalla.replace(/,|-/g, '')).length % 3 === 0) {
            pantalla += ",";
        }
        pantalla += number;
    }
    updateScreen();
}

function clearScreen() {
    pantalla = "0";
    $("#clear").text("AC");
    changeFontSize('60px')
    updateScreen();
}

function updateScreen() {

    switch ((pantalla.replace(/,|\./g, '')).length) {
        case 7:
            changeFontSize('45px');
            break;
        case 8:
            changeFontSize('40px');
            break;
        case 9:
            changeFontSize('35px');
            break;
        default:
            break;
    }
    $("#text").text(pantalla);
}

function changeFontSize(fontSize) {
    $("#text").css('font-size', fontSize);
}

function changeSign() {
    if (pantalla.charAt(0) === '-') {
        pantalla = pantalla.substring(1,pantalla.length);
    } else {
        pantalla = '-' + pantalla;
    }
    updateScreen();
}

function porcentage() {  
    pantalla = String(pantalla / 100); 
    updateScreen();
    
}