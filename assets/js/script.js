// phoneSelect

const phoneSelectWraps = document.querySelectorAll('.phone-select');


phoneSelectWraps?.forEach(phoneSelectWrap => {
    const phoneSelect = phoneSelectWrap.querySelector('.header-phones');
    phoneSelect.addEventListener('click' , (e)=> {
        e.stopPropagation()
        let currentSelectWrap = e.target.closest('.phone-select');
        let currentSelectBody = currentSelectWrap.querySelector('.phone-select-wrapper');
        currentSelectBody.classList.toggle('active');
        phoneSelect.classList.toggle('active');
        currentSelectWrap.classList.toggle('active');
    })
    document.addEventListener('click', (e)=> {
        let lists = document.querySelectorAll('.phone-select-wrapper.active')

        if (!e.target.closest('.phone-select') && lists){
            lists.forEach(el=> {
                el.classList.remove('active');
                let currentSelectWrap = el.closest('.phone-select');
                let currentSelectPhoneSelect = currentSelectWrap.querySelector('.header-phones');
                console.log(currentSelectWrap)
                currentSelectWrap.classList.remove('active');
                currentSelectPhoneSelect.classList.remove('active');
            })
        }
    })
})



// theme

const body = document.querySelector('body');
const modeBtn = document.querySelector('.theme-mode');
const lightModeIcon= document.querySelector('.light-mode-icon');
const darkModeIcon= document.querySelector('.dark-mode-icon');
const themeBtn = document.querySelector('.theme-button');
const lightThemeIcon= document.querySelector('.light-theme-icon');
const darkThemeIcon= document.querySelector('.dark-theme-icon');
const themeBtnText = document.querySelector('.theme-button-text');

modeBtn.addEventListener('click', (e)=> {
    if (body.classList.contains('light-theme')) {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
        lightModeIcon.classList.remove('active');
        darkModeIcon.classList.add('active');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        lightModeIcon.classList.add('active');
        darkModeIcon.classList.remove('active');
    }
})
themeBtn.addEventListener('click', (e)=> {
    if (body.classList.contains('light-theme')) {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
        lightThemeIcon.classList.remove('active');
        darkThemeIcon.classList.add('active');
        themeBtnText.innerHTML = 'Светлая тема'
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        lightThemeIcon.classList.add('active');
        darkThemeIcon.classList.remove('active');
        themeBtnText.innerHTML = 'Темная тема'
    }
})

// burger-menu

const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuCloseBtn = document.querySelector('.mobile-menu .close-btn');
const burgerBtn = document.querySelector('.burger-btn');
const overlay = document.querySelector('.overlay');

const showMobileMenu = () => {
    mobileMenu.classList.add('active');
    overlay.classList.add('open');
}
const hideMobileMenu = () => {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('open');
}
mobileMenuCloseBtn.addEventListener('click', (e)=> {
    hideMobileMenu()
})
overlay.addEventListener('click', (e)=> {
    hideMobileMenu()
})
burgerBtn.addEventListener('click', (e)=> {
    showMobileMenu()
})

const heroSwiper = document.querySelector('.hero-swiper');

if (heroSwiper) {
    const swiper = new Swiper(heroSwiper, {
        loop: true,
        pagination: {
            el: '.custom-hero-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.custom-hero-navigation .arrow-next',
            prevEl: '.custom-hero-navigation .arrow-prev',
        },
    });
}

const advantagesSwiper = document.querySelector('.advantages-swiper');
if (advantagesSwiper) {
    const swiper = new Swiper(advantagesSwiper, {
        loop: true,
        spaceBetween: 4,
        slidesPerView: 1.3,
        breakpoints: {
            600: {
                slidesPerView: 2.2,
                spaceBetween: 20
            },
            830: {
                slidesPerView: 2.5,
                spaceBetween: 30
            },
            1150: {
                slidesPerView: 3.4,
                spaceBetween: 30
            },
            1350: {
                slidesPerView: 4,
                spaceBetween: 50
            }
        }
    });
}

const hotOffersSwiper = document.querySelector('.hot-offers-swiper');
if (hotOffersSwiper) {
    const swiper = new Swiper(hotOffersSwiper, {
        spaceBetween: 50,
        slidesPerView: "auto",
        centeredSlides: true,
        lazy: true,
        loop: true,
        breakpoints: {
            1550: {
                spaceBetween: 50
            }
        },
        pagination: {
            el: '.hot-offers-swiper-pagination',
        },
        navigation: {
            nextEl: '.hot-offers-swiper-nav .arrow-next',
            prevEl: '.hot-offers-swiper-nav .arrow-prev',
        },
    });
}

const callbackManagerBtns = document.querySelectorAll('.callback-manager-btn');
const callbackManagerModal = document.querySelector('.callback-manager-modal');
const callbackManagerClose = document.querySelector('.callback-manager-modal .close-btn');

const showCallbackManagerModal = () => {
    overlay.classList.add('open');
    callbackManagerModal.classList.add('active');
}
const hideCallbackManagerModal = () => {
    overlay.classList.remove('open');
    callbackManagerModal.classList.remove('active');
}
callbackManagerBtns.forEach(btn => {
    btn.addEventListener('click', (e)=> {
        showCallbackManagerModal();
    })
})
callbackManagerClose.addEventListener('click', (e)=> {
    hideCallbackManagerModal();
})
overlay.addEventListener('click', (e)=> {
    hideCallbackManagerModal();
})

// filter

const filterItems = document.querySelectorAll('.filter li');

filterItems?.forEach(item => {
    item.addEventListener('click', (e)=> {
        item.classList.toggle('active');
    })
})

const thumbsGallery = document.querySelector('.gallery-mini');

if (thumbsGallery) {
    let swiper4 = new Swiper(".gallery-mini", {
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode: true,
        direction: "horizontal",
        breakpoints: {
            768: {
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 3,
                direction: "vertical",
            }
        },
    });
    let swiper5 = new Swiper(".gallery", {
        spaceBetween: 10,
        direction: 'horizontal',
        navigation: {
            nextEl: ".gallery-btn-next",
            prevEl: ".gallery-btn-prev",
        },
        thumbs: {
            swiper: swiper4,
        },
    });
}

Fancybox.bind('[data-fancybox="gallery"]', {
});

document.getElementById('openGallery')?.addEventListener('click', function () {

    const galleryElements = document.querySelectorAll('[data-fancybox="gallery"]');

    const galleryItems = Array.from(galleryElements).map(el => ({
        src: el.dataset.src,
    }));

    Fancybox.show(galleryItems, {
        infinite: true,
        keyboard: true,
    });
});

document.querySelector('.gallery-navigation .zoom')?.addEventListener('click', (e) => {
    const galleryActiveSlide = document.querySelectorAll('.gallery .swiper-slide-active .gallery-content');
    const galleryItems = Array.from(galleryActiveSlide).map(el => ({
        src: el.dataset.src,
    }));

    Fancybox.show(galleryItems, {
        infinite: true,
        keyboard: true,
    });
})