let height = document.getElementById("height");
let weight = document.getElementById("weight");
let button = document.getElementById("button");

let result = document.querySelector(".result");
let score = document.getElementById("score");

button.addEventListener('click', ()=>{
    let newHeight = parseFloat(height.value);
    let newWeight = parseFloat(weight.value);
    newHeight = newHeight / 100;
    let sqrHeight = newHeight * newHeight;

    let bmi = newWeight / sqrHeight;
    score.textContent = bmi.toFixed(2);
    result.style.display = 'block';
});

let form = document.getElementById('form');
form.addEventListener('submit',(e)=> {
    e.preventDefault();
    
});