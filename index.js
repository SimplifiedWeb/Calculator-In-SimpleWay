const userInput = document.getElementById("userInput");
var expression = ''

function press(num){

    if(validation(num)){
        
        expression += num;
        userInput.value = expression;
        
    }

}
function equal(){
    userInput.value = eval(expression)
    expression = ''
}
function erase(){

    expression = " "
    userInput.value = expression;
}
function backspace(){

    expression = expression.slice(0, -1);
    userInput.value = expression;
}

function validation(value){
    var lastinput = expression.slice(-1)
    var operator = ['+', '-', '/', '*'];

    if(value == "." && lastinput == "."){
        return false;
    }
    if(operator.includes(value)){
        if(operator.includes(lastinput)){
            return false;
        }else{
            return true;
        }
    }
    return true;  ///we have to return true otherwise the condition not run
}