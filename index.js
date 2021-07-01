const screenCalc = document.getElementById('screen-calc');
let two = document.getElementById('toggle__two');
let one = document.getElementById('toggle__one');
let three = document.getElementById('toggle_three');

//Calculation Function

function  handleClick(value){
    
    if(value =="RESET"){
        screenCalc.text.value = ''
    }
    else if(value == "DEL"){
        let text = screenCalc.text.value
        let editedText = text.substring(0, text.length - 1); //Delete Last Charachter
        screenCalc.text.value = editedText
    }
    else if(value == 'EQUAL'){
        screenCalc.text.value = eval(screenCalc.text.value)
    }
    else{
        screenCalc.text.value += value 
    }
}

     //Theme Function   

	two.addEventListener('click',function(){

    	let body=document.querySelector('body');
		let toggle=document.getElementById('conrol__box--circle');
		body.classList.add('active1');
		body.classList.remove('active2');
		toggle.style.left='36%';
        console.log(two)

	})

		

	one.addEventListener('click',function(){

		let body=document.querySelector('body');
		let toggle=document.getElementById('conrol__box--circle');
		body.classList.remove('active1');
		body.classList.remove('active2');
		toggle.style.left='0';
        console.log(one)
	})

		

	three.addEventListener('click',function(){

		let body=document.querySelector('body');
		let toggle=document.getElementById('conrol__box--circle');
		body.classList.add('active2');
		body.classList.remove('active1');
		toggle.style.left='65%';
        console.log(three)

	})
