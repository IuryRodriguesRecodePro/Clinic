document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.gallery-item');
    let currentIndex = 2; // Começa na imagem do meio

    // Função para atualizar a posição das imagens em loop infinito
    function updateGallery(newIndex) {
        if (newIndex < 0) {
            newIndex = images.length - 1; // Volta para o final
        } else if (newIndex >= images.length) {
            newIndex = 0; // Vai para o começo
        }

        currentIndex = newIndex;

        images.forEach((img, index) => {
            img.classList.remove("gallery-item-1", "gallery-item-2", "gallery-item-3", "gallery-item-4", "gallery-item-5");

            let position = (index - currentIndex + images.length) % images.length;
            if (position === 0) img.classList.add("gallery-item-3");
            if (position === 1) img.classList.add("gallery-item-4");
            if (position === 2) img.classList.add("gallery-item-5");
            if (position === images.length - 1) img.classList.add("gallery-item-2");
            if (position === images.length - 2) img.classList.add("gallery-item-1");
        });
    }

    // Botão de "anterior"
    document.getElementById('prevBtn').addEventListener('click', function () {
        updateGallery(currentIndex - 1);
    });

    // Botão de "próximo"
    document.getElementById('nextBtn').addEventListener('click', function () {
        updateGallery(currentIndex + 1);
    });


    // setInterval(() => {
    //     updateGallery(currentIndex + 1);
    // }, 10000);


    
    document.getElementById('whatsapp-button').addEventListener('click', function () {
        const phone = '+5521980892914';
        const message = 'Olá, gostaria de saber mais sobre consultas.';
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        window.open(url, '_blank');
    });
});





// Card SwipperJS
new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },

        768: {
            slidesPerView: 2
        },

        1024: {
            slidesPerView: 3
        },
    }
});


function selecionarLugar(lugar, botao) {
    console.log("Botão clicado!", lugar);
    if (!botao) return;

    
    const timestamp = new Date().getTime();
    window.location.replace(`index.html?destino=${encodeURIComponent(lugar)}&t=${timestamp}#agendamentos`);
}


window.onload = function () {
    document.querySelectorAll(".card-button").forEach((button) => {
        button.addEventListener("click", function () {
            const pais = this.getAttribute("data-pais");
            selecionarLugar(pais, this);
        });
    });

    const destinoSelecionado = new URLSearchParams(window.location.search).get("destino");
    if (destinoSelecionado) {
        const campoDestino = document.getElementById("destino");
        if (campoDestino) {
            campoDestino.value = destinoSelecionado;
        }
    }
};


document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const menuIcon = document.getElementById("menu-icon");

    menuButton.addEventListener("click", function () {
        if (menuIcon.classList.contains("fa-bars")) {
            menuIcon.classList.remove("fa-bars");
            menuIcon.classList.add("fa-times");
        } else {
            menuIcon.classList.remove("fa-times");
            menuIcon.classList.add("fa-bars");
        }
    });
});
