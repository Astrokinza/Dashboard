const input =     document.querySelector('#text')
const users = document.querySelector('#users')
const img = document.getElementById('img')
const imgelement = document.getElementsByClassName('li')
let  imgLength = document.getElementById("img").getElementsByTagName("li").length
console.log(imgelement);
console.log(imgLength);

function show(any){
    input.value=any
}
