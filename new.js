let number = document.querySelector('#countLabel');
let  increase = document.querySelector('#increase');
let  reset = document.querySelector('#reset');
let  decrease = document.querySelector('#decrease');
let zero = 0;

increase.onclick = () => {
    zero++;
    number.textContent = zero;
}

decrease.onclick = () => {
    zero--;
    number.textContent = zero;
}

reset.onclick = () => {
    zero = 0;
    return number.textContent = zero;
}
