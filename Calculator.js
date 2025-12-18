const display = document.getElementById("display");

function appendToDisplay(num){
    display.value += num;

}
function clearDisplay(){
display.value = ""

}

function calculate(){
    try{
display.value = eval(display.value);
    } catch{
        display.value = "Error"
    }
}

