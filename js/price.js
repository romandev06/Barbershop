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

    headerLinks.forEach(link => link.addEventListener('click', () => {
        document.body.classList.remove('overflow-y')
    }))
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


    // запрет скролла при открытом бургер меню

    document.body.classList.toggle('overflow-y')
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






// плавный якорь

const contactsLink = document.querySelector('.contacts-link')
const ourContacts = document.querySelector('.footer')

contactsLink.addEventListener('click', () => {
    ourContacts.scrollIntoView({
        behavior: "smooth",
    })
})



// Up Btn

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