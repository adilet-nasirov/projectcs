const simple= document.getElementById("simple");
const hex= document.querySelector("#hex");
const wrapper= document.querySelector("main");
const colorName= document.querySelector("span");
const btn= document.querySelector("button");

let isHexActive= false;
let isSimpleActive=true;

// array of colors
const colorSimple=['blue','blueviolet','chocolate','purple','red', 'gray','green','yellow'];
const colorHex=['#0000FF','#8A2BE2','#D2691E','#800080',' 	#FF0000',' 	#808080','#008000','#FFFF00'];

// function onclick
simple.addEventListener('click', simpleClick);
hex.addEventListener('click', hexClick);
btn.addEventListener('click', changeColor);
//simpleClick funtion

function simpleClick(){
    simple.classList.remove('active');
    hex.classList.add('active');
    isHexActive =false;
    isSimpleActive= true;
}

// hexClick function

function hexClick(){
    hex.classList.remove('active');
    simple.classList.add("active");
    isHexActive= true;
    isSimpleActive= false;
}

//changeColor function
let count=0;
function changeColor(){
    const iColor = Math.round(Math.random()* colorSimple.length);
    if( isSimpleActive == true){
        let color= colorSimple[iColor];
        wrapper.style.backgroundColor = color;
        colorName.innerText= color;
        console.log(color);
    }
    else{
        const hexI= '#'+Math.round(Math.random()* 1777215).toString(16);
        let color= hexI;
        wrapper.style.backgroundColor = color;
        colorName.innerText= color;
        console.log(color);
    }

}