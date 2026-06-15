const nav = document.querySelector('#nav');
const abrir = document.querySelector('#abrir');

if (abrir && nav) {
    abrir.addEventListener('click', () => {
        nav.classList.toggle('visible');
        abrir.classList.toggle('active');
        
        const icon = abrir.querySelector('i');
        if (icon) {
            if (abrir.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        }
    });

    // Cerrar menú y resetear icono al cambiar a vista de escritorio
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            nav.classList.remove('visible');
            abrir.classList.remove('active');
            const icon = abrir.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        }
    });
}

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
