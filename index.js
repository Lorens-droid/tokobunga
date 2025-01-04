let navbar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick = function() {
    navbar.classList.toggle('active');
};

let search = document.querySelector('.search');
document.querySelector('#search').onclick = function() {
    search.classList.toggle('active');
};


var swiper1 = new Swiper(".product-row", {
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});


var swiper2 = new Swiper(".blogs-row", {
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 1,
        },
    },
});

var swiper3 = new Swiper(".review-row", {
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});


document.querySelectorAll('.link-to-page').forEach(function(element) {
    element.onclick = function() {
        window.location.href = element.getAttribute('data-url');
    };
});


if (document.body.classList.contains('produk-page')) { 
    var swiper = new Swiper('.swiper', {
        loop: false,  
        slidesPerView: 'auto',  
        spaceBetween: 20, 
        autoplay: false,  
        pagination: {
            el: '.swiper-pagination',  
            clickable: true,  
        },
        navigation: {
            nextEl: '.swiper-button-next',  
            prevEl: '.swiper-button-prev', 
        },
    });
}

