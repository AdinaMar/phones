
const header = document.querySelector('.header__2');
const search = document.querySelector('.search_bar');
const btn = document.querySelector('#search-btn');
let loginForm = document.querySelector('.login-form');
let loginIcon  = document.querySelector('#login-btn');
let stopIcon = document.querySelector('#closelogin');


const log = () => {
    loginForm.classList.toggle('active');
}
loginIcon.addEventListener('click', log);


const close = () => {
    loginForm.classList.remove('active');
}
stopIcon.addEventListener('click', close);

const menu = () => {
    
    if(window.scrollY > 80) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }

}
window.addEventListener('scroll', menu);

window.addEventListener('load', menu);

const searching = () => {
    search.classList.toggle('activia');

}
btn.addEventListener('click', searching);

