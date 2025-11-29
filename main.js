const nav = document.querySelector('#nav');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');

abrir.addEventListener('click', () => {
    nav.classList.add('visible');
});
cerrar.addEventListener('click', () => {
    nav.classList.remove('visible');
});

// Swiper gallery

const galerias = document.querySelectorAll('.galeria-fotos');

galerias.forEach((elementoGaleria) => {
  
  new Swiper(elementoGaleria, {
    // Configuración compartida
    slidesPerView: 1, // Muestra 1 foto en móviles
    spaceBetween: 10,
    loop: true,       // Infinito

    // Navegación independiente para cada instancia
    navigation: {
      nextEl: elementoGaleria.querySelector('.swiper-button-next'),
      prevEl: elementoGaleria.querySelector('.swiper-button-prev'),
    },
    
    // Paginación independiente
    pagination: {
      el: elementoGaleria.querySelector('.swiper-pagination'),
      clickable: true,
    },
  });
});
