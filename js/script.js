AOS.init({
    once: true,
    mirror: false,
});

// slider
const mySlider = new Splide('#mySlider', {
    perPage: 1,
    gap: "30px"
})

mySlider.mount()

document.addEventListener("DOMContentLoaded", function () {
    let imageSection = document.getElementById("future");

    window.addEventListener("scroll", function () {
        let scrollPosition = window.scrollY;
        let targetPosition = imageSection.offsetTop;

        // Если пользователь докрутил до секции
        if (scrollPosition >= targetPosition) {
            imageSection.style.opacity = 1 // Показываем картинку
        }
    });
});

// darkMode
let switchMode = document.getElementById("switchMode");

switchMode.onclick = function () {
    let theme = document.getElementById("theme");
    let mediaThem = document.getElementById('mediaThem')
    let upThem = document.getElementById("upThem");
    let downThem = document.getElementById('downThem')
    let lightLeftArrow = document.getElementById("lightLeftArrow")
    let lightRightArrow = document.getElementById("lightRightArrow")
    let mediaDarkMode;

    if (theme.getAttribute("href") == "./style/style.css") {
        theme.href = "./style/darkMode.css";
        mediaThem.href = "./style/mediaStyle/darkModeMedia.css";
        upThem.src = "./images/arrowUpLight.svg";
        downThem.src = "./images/arrowDownLight.svg";
        lightLeftArrow.src = "./images/arrowLightLeft.svg";
        lightRightArrow.src = "./images/arrowLightRight.svg";
    } else {
        theme.href = "./style/style.css";
        mediaThem.href = "./style/mediaStyle/media.css"
        upThem.src = "./images/arrowUp.svg";
        downThem.src = "./images/arrowDown.svg";
        lightRightArrow.src = "./images/right-arrow.png";
        lightLeftArrow.src = "./images/arrow.png";
    }
}

//анимация появление при скролинге
let elements = document.getElementsByClassName('myAnimation');

let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__backInLeft');
        } else {
            entry.target.classList.remove('u--fadeInLeft');
        }
    });
});

for(let i = 0; i < elements.length; i++) {
    observer.observe(elements[i]);
}

//burger
document.addEventListener('DOMContentLoaded', function () {
    const burgerIcon = document.querySelector('.burger-icon');
    const header__menu = document.querySelector('.header__menu');

    burgerIcon.addEventListener('click', function () {
        header__menu.classList.toggle('active');
    });
});
