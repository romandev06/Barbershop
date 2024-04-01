// Бургер меню

const icons = document.querySelector('.burger-icon');
icons.addEventListener('click', () => {
    icons.classList.toggle('open')
})


//  открытие бургер меню

const burgerIcon = document.querySelector('.burger-icon')
const headerNav = document.querySelector('.header-nav')
const headerLinks = document.querySelectorAll('.header-link')

burgerIcon.addEventListener('click', function() {
    headerNav.classList.toggle('header-nav__hidden')


    // запрет скролла при открытом бургер меню

    document.body.classList.toggle('overflow-y')
})

headerLinks.forEach(headerLink => headerLink.addEventListener('click', () => {
    headerNav.classList.toggle('header-nav__hidden')

    icons.classList.remove('open')
}))






// клавиша Escape работает только, когда бургер меню открыто

window.addEventListener('keydown', (event) => {
    if (!headerNav.classList.contains('header-nav__hidden') && (event.target === headerNav ||  event.key === 'Escape')) {
        headerNav.classList.add('header-nav__hidden')
        icons.classList.toggle('open')
    }
})




// loader

const mask = document.querySelector('.mask')

window.addEventListener('load', () => {
    mask.classList.add('hide')

    setTimeout(() => {
        mask.remove()
    }, 600);
})




// progress line

let wrapper = document.querySelector('.wrapper')
let progressLine = document.querySelector('.progress-line')

window.addEventListener('scroll', function() {
    let progressBar = window.scrollY / (wrapper.clientHeight - window.innerHeight) * 100

    progressLine.style.width = progressBar + '%'
})






// плавный скролл к элементам (якоря)

const contactsLink = document.querySelector('.contacts-link')
const ourContacts = document.querySelector('.footer')

contactsLink.addEventListener('click', () => {
    ourContacts.scrollIntoView({
        behavior: "smooth",
    })
})





// создание табов


const tabButtons = document.querySelectorAll('.tab-button')
const tabContent = document.querySelectorAll('.content-product__container')



tabButtons.forEach(tabButton => tabButton.addEventListener('click', () => {
    tabButtons.forEach(tabActiveButton => {
        tabActiveButton.classList.remove('active-tab__btn')
    })

    tabButton.classList.add('active-tab__btn')


    tabContent.forEach(content => {
        content.classList.add('tab-content__hidden')
    })

    let currentContent = document.querySelector('#' + tabButton.dataset.tab)
    currentContent.classList.remove('tab-content__hidden')
}))


let secondButton = document.querySelector('[data-tab="tab-2"]')
secondButton.classList.add('active-tab__btn')

let secondContent = document.getElementById('tab-2')
secondContent.classList.remove('tab-content__hidden')





// Up btn

const btnUp = document.querySelector('.btn-up')

let show = () => {
    btnUp.classList.remove('btn-up__hide')
}

let hide = () => {
    btnUp.classList.add('btn-up__hide')
}


window.addEventListener('scroll', () => {
    scrollY > 50 ? show() : hide()

    btnUp.addEventListener('click', () => {
        scrollTo ({
            top: 0,
            behavior: "smooth",
        })
    })
})