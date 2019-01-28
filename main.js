var pantalla = "0"

function typeNumber(number){

    if ((pantalla.replace(/,|\./g, '')).length === 9) return;

    if ((pantalla === "0" || pantalla === "-0") && number != ",") {
        if (pantalla === "-0") {
            pantalla = "-" + number;
            alert(2);
        } else {
            pantalla = number;
            alert(1);
        }   
        $("#clear").text("C");
    } else {
        if (pantalla.search(",") == -1 && pantalla.replace('.', '').length % 3 === 0) {
            pantalla += ".";
            alert(3);
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