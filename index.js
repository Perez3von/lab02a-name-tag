const colors = ['red', 'green', 'blue'];
const topSection = document.getElementById('top-section');
const bottomSection =document.getElementById('bottom-section');
const myColorButton = document.getElementById('my-color-button');
const myTextButton = document.getElementById('my-text-button');
const myFonts = document.getElementById('myFonts');
const myName = document.getElementById('myName');
const myInput = document.getElementById('myInput');


myName.addEventListener('click', ()=>{


    alert("Hello " + myName.innerText);
    
});


myInput.addEventListener('click', ()=>{

    myInput.value ='';
    
});


myColorButton.addEventListener('click', ()=>{

    let randNum = Math.floor(Math.random() * 3);

    bottomSection.style.backgroundColor = colors[randNum];
    topSection.style.backgroundColor = colors[randNum];
    
});

myTextButton.addEventListener('click', ()=>{

    let str = myInput.value;
    let font = myFonts.value;

    if(str === '   Enter some text....'){

        alert("You need to Enter some NEW Text");
        location.reload();
    }
    else{
    myName.innerText = "He/Him " + "\n" + str;
    myName.style.fontFamily =  font;
    
}
});






