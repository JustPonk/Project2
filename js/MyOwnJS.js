document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll(".container-fluid"); // Secciones principales
    let currentSectionIndex = 0;
    let isScrolling = false;
    let scrollingCompleted = false; // Bandera para desactivar la función tras el primer recorrido completo

    window.addEventListener("wheel", function (event) {
        if (isScrolling || scrollingCompleted || event.deltaY <= 0) return; // Solo activa cuando el usuario baja

        isScrolling = true;
        setTimeout(() => isScrolling = false, 800); // Evita múltiples activaciones

        // Scroll hacia abajo
        if (currentSectionIndex < sections.length - 1) {
            currentSectionIndex++;
            sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" });
        }

        // Si el usuario ha llegado a la última sección, desactiva la función
        if (currentSectionIndex === sections.length - 1) {
            scrollingCompleted = true;
        }
    });
});



document.querySelectorAll(".change-lang").forEach(btn => {
    btn.addEventListener("click", function (event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace

        let selectedLang = this.getAttribute("data-lang");

        // Definir las rutas de cada idioma
        let langPages = {
            en: "index-en.html",
            es: "index.html",
            fr: "index-fr.html"
        };

        // Redirigir a la página correspondiente
        if (langPages[selectedLang]) {
            window.location.href = langPages[selectedLang];
        }
    });
});




document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        var firstSlideImg = document.querySelector(".first-slide-img");
        var animatedText = document.querySelector(".animated-text");

        // Aparece la imagen
        firstSlideImg.style.animation = "fadeInImage 1s ease-in-out forwards";

        // Aparece el texto 1 segundo después
        setTimeout(function () {
            animatedText.style.animation = "fadeInText 0.5s ease-in-out forwards";
        }, 500);

    }, 800); // Retraso de 1 segundos antes de iniciar la animación
});








document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".fade-in");

    navItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add("show");
        }, index * 150); // Retraso de 300ms entre cada uno
    });
});
