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