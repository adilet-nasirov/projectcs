const img= document.querySelector('#bulb');
console.log(img);

let isBulbOn=false;
img.addEventListener('click', function(){
    if(isBulbOn===false){
        img.src='https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lighton.png';
        isBulbOn=true;
    }
    else{
        img.src='https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lightoff.png';
        isBulbOn=false;
    }

})