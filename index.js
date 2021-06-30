const screenCalc = document.getElementById("screen-calc")

function  handleClick(value){
    screenCalc.text.value += value
}
 
function clear(){
    screenCalc.text.value = ''
}


