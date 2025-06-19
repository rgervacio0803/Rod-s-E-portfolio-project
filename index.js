let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme" 
    }
    else {
     document.body.classList.remove("dark-theme")   
    }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success'); 
    loading.classlist += " modal__overlay--visible";
    emailjs
        .sendForm(
            'service_50v2zyo',
            'template_uvu6g0h',
            event.target,
            'US3oQ39MhMt-kSSKz'
        ).then(() => {
           loading.classList.remove("modal__overlay--visible");
           success.classlist += " modal__overlay--visible"; 
        }).catch(() => {
           loading.classList.remove("modal__overlay--visible"); 
           alert(
            "The email service is temporarily unavailable. Please contact me directly at rgervacio0803@gmail.com"
            );
        })
}

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal--open");
        
    }
    isModalOpen = true;
    document.body.classList += " modal--open"
}