const btn = document
.getElementsByClassName('favorite-icon');


for (let i in btn) {
  let sob = btn[i].addEventListener('click', () => {
    const isFilled = btn[i].classList.toggle('filled');
    btn[i].innerHTML = isFilled ? '&#10084;' :  '&#9825;'
});
  btn[i].removeEventListener('click', sob);
}

let btn1 = document.querySelector