const screenCalc = document.getElementById('screen-calc')


function  handleClick(value){
    
    if(value =="RESET"){
        screenCalc.text.value = ''
    }
    else if(value == "DEL"){
        let text = screenCalc.text.value
        let editedText = text.substring(0, text.length - 1); //delete last charachter
        screenCalc.text.value = editedText
    }
    else if(value == 'EQUAL'){
        screenCalc.text.value = eval(screenCalc.text.value)
    }
    else{
        screenCalc.text.value += value 
    }
}



