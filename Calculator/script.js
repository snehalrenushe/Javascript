console.log("Hyeee");
let planesurface = document.getElementById('planesurface');
let iValue = ' ';
buttons = document.querySelectorAll('button');

for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if(buttonText == 'X'){
            buttonText = ' * ';
            iValue += buttonText;
            planesurface.value = iValue;
        }
        else if (buttonText == 'C'){
            iValue = "";
            planesurface.value = iValue;
        }
        else if (buttonText == '='){
            planesurface.value = eval(iValue);
        }
        else{
            iValue += buttonText;
            planesurface.value = iValue;
        }
    })
}