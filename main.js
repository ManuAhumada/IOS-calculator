var pantalla = "0"
var actualSign;
var firstNumber;

function typeNumber(number){

    $(".sign").addClass("orange").removeClass("selected");
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
        /*if (number !== '.' && pantalla.search(/\./g) == -1 && (pantalla.replace(/,|-/g, '')).length % 3 === 0) {
            pantalla = "," + pantalla;
        }*/
        pantalla += number;
    }
    updateScreen(pantalla);
}

function clearScreen() {
    if($("#clear").text() === "AC") {
        $(".sign").addClass("orange").removeClass("selected");
    }
    pantalla = "0";
    $("#clear").text("AC");
    changeFontSize('55px')
    updateScreen(pantalla);
}

function updateScreen(number) {
    number = number.search(/\./) === -1 ? number.substring(0, 9) : number.substring(0, 10);

    switch ((number.replace(/,|\./g, '')).length) {
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
            changeFontSize('55px');
            break;
    }
    $("#text").text(number);
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
    updateScreen(pantalla);
}

function porcentage() {  
    pantalla = String(pantalla / 100); 
    updateScreen(pantalla);   
}

function applySign(sign) {

    firstNumber = $("#text").text(); //pantalla.replace(/,/g, '');
    actualSign = sign;
    pantalla = '0';
    var selector = "#"
    switch (actualSign) {
        case '+':
            selector += "plus";
            break;
        case '-':
            selector += "minus";
            break;
        case '*':
            selector += "multiply";
            break;
        case '/':
            selector += "divide";
            break;
        default:
            break;
    }
    $(".sign").addClass("orange").removeClass("selected");
    $(selector).addClass("selected").removeClass("orange");
}

function equal() {

    var first = parseFloat(firstNumber);
    var second = parseFloat(pantalla.replace(/,/g, ''));
    var resultado;
    
    switch (actualSign) {
        case '+':
            resultado = first + second;
            break;
        case '-':
            resultado = first - second;
            break;
        case '*':
            resultado = first * second;
            break;
        case '/':
            resultado = first / second;
            break;
        default:
            break;
    }
    pantalla = '0';
    updateScreen(String(resultado)); 
}