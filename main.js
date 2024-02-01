const openBtn = document.querySelector('#openBtn');
const popup = document.querySelector('#popup');
const closeBtn = document.querySelector('#closeBtn');

openBtn.addEventListener("click", function () {
    popup.style.display = "block";
});

closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
});

const burgerIcon = document.querySelector("#burger-icon");
const closeIcon = document.querySelector("#close-icon");
const menu = document.querySelector("#menu");

console.log(burgerIcon);
console.log(closeIcon);
console.log(menu);

burgerIcon.addEventListener("click", function () {
    menu.style.right = "0";
}); 

closeIcon.addEventListener("click", function () {
    menu.style.right = "-100%";
});

document.addEventListener("click", function (event) {
    if (!menu.contains(event.target) && event.target !== burgerIcon) {
        menu.style.right = "-100%";
    }
});

window.addEventListener("click", function () {
    if (window.innerWidth > 1920) {
        menu.style.right = "-100%";
    }
});

const slidesContainer = document.querySelector(".slides")
const slides = document.querySelectorAll('.slide')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
let currentIndex = 0;

function prevSlide(){
    currentIndex = currentIndex === 0 ? slides.length -1 : currentIndex - 1;

    updateSlidePosition()
}

function nextSlide(){
    currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1

    updateSlidePosition()
}

function updateSlidePosition(){
    const newPosition = -currentIndex * slides[0].offsetWidth

    slidesContainer.style.transform = `translateX(${newPosition}px)`
}

prevBtn.addEventListener('click', prevSlide)
nextBtn.addEventListener('click', nextSlide)