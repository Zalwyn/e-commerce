// search box
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick =()=>{
    searchForm.classList.toggle('active');
    cartPage.classList.remove('active');
    loginPage.classList.remove('active');
    menuPage.classList.remove('active');
}
// cart page
let cartPage = document.querySelector('.cart');

document.querySelector('#cart-btn').onclick =()=>{
    cartPage.classList.toggle('active');
    searchForm.classList.remove('active');
    loginPage.classList.remove('active');
    menuPage.classList.remove('active');
}
// loginform
let loginPage= document.querySelector('.login-form');

document.querySelector('#user-btn').onclick =()=>{
    loginPage.classList.toggle('active');
    searchForm.classList.remove('active');
    cartPage.classList.remove('active');
    menuPage.classList.remove('active');
}
// hamburger
let menuPage= document.querySelector('.navbar');

document.querySelector('#home-btn').onclick =()=>{
    menuPage.classList.toggle('active');
    searchForm.classList.remove('active');
    cartPage.classList.remove('active');
    loginPage.classList.remove('active');

}
window.onscroll=()=>{
    searchForm.classList.remove('active');
    cartPage.classList.remove('active');
    loginPage.classList.remove('active');
    menuPage.classList.remove('active');

}