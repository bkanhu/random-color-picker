console.log("Test");

const hex = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","F"];
const btn = document.querySelector(".btn");
const color = document.querySelector(".color");
btn.addEventListener('click',function(){
    let hexCode = "#";
    for(let i =0;i<6;i++){
        getRandomNumber = Math.floor(Math.random() * hex.length);
        hexCode += hex[getRandomNumber];
        // hexCode += hex[getRandomNumber];
    }
// console.log(hexCode);
// set background color
document.body.style.background = hexCode;

color.innerHTML = `HEX CODE: ${hexCode.fontcolor('#FDAD09')}`


})