// Variables globales
const images = document.querySelectorAll('.galleryimg');
let currentIndex = 0;
let filterCategory = 'all';
let intervalId = null;

// Función para mostrar imagen
function showImage(index) {
    images.forEach(img => {
        img.classList.remove('active');
        img.style.display = 'none';
    });
    images[index].classList.add('active');
    images[index].style.display = 'block';
}

// Función para obtener imágenes visibles según filtro
function getVisibleImages() {
    return Array.from(images).filter(img => 
        filterCategory === 'all' || img.dataset.category === filterCategory
    );
}

// Función para pasar a la siguiente imagen
function nextImage() {
    const visibleImages = getVisibleImages();
    if (visibleImages.length === 0) return;

    // Ocultar imagen actual
    images[currentIndex].classList.remove('active');
    
    // Calcular siguiente índice
    currentIndex = (currentIndex + 1) % visibleImages.length;
    const nextImg = visibleImages[currentIndex];
    const nextIndex = Array.from(images).indexOf(nextImg);
    
    // Mostrar siguiente imagen con delay
    setTimeout(() => {
        showImage(nextIndex);
    }, 900);
}

// Función para filtrar imágenes
function filterImages(category) {
    filterCategory = category;
    currentIndex = 0;
    const visibleImages = getVisibleImages();
    
    if (visibleImages.length > 0) {
        showImage(Array.from(images).indexOf(visibleImages[0]));
    }
}

// Función para iniciar galería
function startGallery() {
    // Limpiar intervalo anterior si existe
    if (intervalId) {
        clearInterval(intervalId);
    }
    
    // Asignar índices y mostrar primera imagen
    images.forEach((img, index) => {
        img.dataset.index = index;
    });
    showImage(currentIndex);
    
    // Iniciar nuevo intervalo
    intervalId = setInterval(nextImage, 4000);
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', startGallery);


// Estilos Gsap

const textAnimation = () => {
    gsap.to("h1", {
        duration: 3,
        opacity: 0,
        delay: 2,
        onComplete: () => {
            document.querySelector("h1").textContent = "DIGITAL";
            gsap.to("h1", {
                duration: 3,
                opacity: 1,
                onComplete: () => {
                    document.querySelector("h1").textContent = "MARKETING";
                    gsap.to("h1", {
                        duration: 3,
                        opacity: 1,
                        onComplete: textAnimation
                    });
                }
            });
        }
    });
};

textAnimation();

gsap.from(".cardsRow", {
    duration: 3, // Duración de la animación en segundos
    // opacity: 0.9, // Comienza con opacidad 0
    y: 150, // Comienza desplazada 50px hacia arriba
    ease: "power1.out", // Tipo de easing
});


ScrollTrigger.create({
    trigger: ".box-img-left1",
    start: "top center",
    animation: gsap.from(".box-img-left1", {
        duration: 2.5,
        x: -100,
        ease: "power2.out",
        opacity:0,
    }),
    toggleActions: "play none none reverse",
    
});

ScrollTrigger.create({
    trigger: ".box-img-left2",
    start: "top center",
    animation: gsap.from(".box-img-left2", {
        duration: 2.5,
        x: -100,
        ease: "power2.out",
        opacity: 0
    }),
    toggleActions: "play none none reverse", // Cambiado para que se active una sola vez
    // once: true, // Añadido para que solo se ejecute una vez
     
});
ScrollTrigger.create({
    trigger: ".img-left1",
    start: "top center",
    animation: gsap.from(".img-left1", {
        duration: 3.5,
        x: -200,
        ease: "power1.out",
    }),
    toggleActions: "play none none reverse", // Cambiado para que se active una sola vez
    // once: true, // Añadido para que solo se ejecute una vez
     
});
ScrollTrigger.create({
    trigger: ".img-left2",
    start: "top center",
    animation: gsap.from(".img-left2", {
        duration: 3.5,
        x: -200,
        ease: "power1.out",
    }),
    toggleActions: "play none none reverse", // Cambiado para que se active una sola vez
    // once: true, // Añadido para que solo se ejecute una vez
     
});
ScrollTrigger.create({
    trigger: ".img-rigth",
    start: "top center",
    animation: gsap.from(".img-rigth", {
        duration: 3.5,
        x: 200,
        ease: "power2.out",
    }),
    toggleActions: "play none none reverse", // Cambiado para que se active una sola vez
    // once: true, // Añadido para que solo se ejecute una vez
     
});



ScrollTrigger.create({
    trigger: ".box-img-rigth",
    start: "top center",
    animation: gsap.from(".box-img-rigth", {
        duration: 2.5,
        x: 100,
        ease: "power2.out",
        opacity: 0,
    }),
    toggleActions: "play none none reverse", // Cambiado para que se active una sola vez
});

// card proyectos

ScrollTrigger.create({
    trigger: ".project-card",
    start: "top 90%", // Cambiado de "top center" a "top 80%"
    animation: gsap.from(".project-card", {
        duration: 2,
        y:100,
        ease: "power2.out",
        opacity: 0.5
    }),
    
});

// Animación para el main al cargar la página
gsap.from(".mainStandard", {
    duration: 1.5,
    y: 100, // Comienza 100px abajo
    opacity: 0,
    ease: "power2.out",
    delay: 0.5 // Pequeño retraso para que no empiece inmediatamente
});


