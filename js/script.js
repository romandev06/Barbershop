// Свайпер

const swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



// loader

const mask = document.querySelector('.mask')

window.addEventListener('load', () => {
    mask.classList.add('hide')

    setTimeout(() => {
        mask.remove()
    }, 600);
})





// Модальное окно (галерея изображений)

const myProjects = document.querySelectorAll('.swiper-slide__project img')
const myProjectsGallery = document.querySelector('.my-projects__article')
const myProjectImg = document.querySelector('.project-img')
const closeMyProjects = document.querySelector('.cross-icon__close')


myProjects.forEach(project => project.addEventListener('click', function() {
    myProjectsGallery.style.display = 'flex'

    myProjectImg.src = project.getAttribute('src')

    if (myProjectsGallery.style.display === 'flex') {
        btnUp.classList.remove('btn-up')
    }


    // запрет скролла при открытии Галереи изображений

    document.body.classList.toggle('overflow-y')
}))




// закрытие модального окна (галереи изображений)

closeMyProjects.addEventListener('click', function() {
    myProjectsGallery.style.display = 'none'

    if (myProjectsGallery.style.display === 'none') {
        btnUp.classList.add('btn-up')
    }

    document.body.classList.toggle('overflow-y')
})


function scrollBan() {
    window.addEventListener('keydown', (event) => {
        if (myProjectsGallery.style.display === 'flex' && event.key === 'Escape') {
            myProjectsGallery.style.display = 'none'

            btnUp.classList.add('btn-up')

            document.body.classList.toggle('overflow-y')
        }
    })
}

scrollBan()


window.addEventListener('click', (event) => {
    if (event.target === myProjectsGallery) {
        myProjectsGallery.style.display = 'none'

        btnUp.classList.add('btn-up')

        document.body.classList.toggle('overflow-y')
    }
})











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

    document.body.classList.toggle('overflow-y')
}))




// клавиша Escape работает только, когда бургер меню открыто

window.addEventListener('keydown', (event) => {
    if (!headerNav.classList.contains('header-nav__hidden') && (event.target === headerNav ||  event.key === 'Escape')) {
        headerNav.classList.add('header-nav__hidden')
        icons.classList.toggle('open')



    // запрет скролла при открытом бургер меню

    document.body.classList.toggle('overflow-y')
    }
})








// progress line

let wrapper = document.querySelector('.wrapper')
let progressLine = document.querySelector('.progress-line')

window.addEventListener('scroll', function() {
    let progressBar = window.scrollY / (wrapper.clientHeight - window.innerHeight) * 100

    progressLine.style.width = progressBar + '%'
})








// плавный скролл к элементам (якоря)

headerLinks.forEach(link => link.addEventListener('click', () => {
    const linkAnchor = link.getAttribute('data-link')
    const contentOfLinks = document.getElementById(linkAnchor)

    contentOfLinks.scrollIntoView({
        behavior: "smooth"
    })
}))








// Up Btn

const btnUp = document.querySelector('.btn-up')

let show = () => {
    btnUp.classList.remove('btn-up__hide')
}

let hide = () => {
    btnUp.classList.add('btn-up__hide')
}


window.addEventListener('scroll', () => {
    scrollY > 350 ? show() : hide()

    btnUp.addEventListener('click', () => {
        scrollTo ({
            top: 0,
            behavior: "smooth",
        })
    })
})








// Валидация формы

function deleteError(input) {
    const deleteValue = document.querySelectorAll('.input-box')
    deleteValue.forEach(delValue => {
        delValue.classList.remove('error')
    })
}

function deleteCorrect(input) {
    const deleteValue = document.querySelectorAll('.input-box')
    deleteValue.forEach(delValue => {
        delValue.classList.remove('correct')
    })
}


function validation() {

    function createError(input) {
        const parent = input.parentNode
        parent.classList.add('error')
    }

    function createCorrect(input) {
        const parent = input.parentNode
        parent.classList.add('correct')
    }



    let result = true

    const allInputs = document.querySelectorAll('.main-input')
    allInputs.forEach(input => {
        if (input.value === '') {
            createError(input)

            result = false
        } else if (input.value.length >= 1) {
            createCorrect(input)
        }
    })

    return result
}

const form = document.getElementById('sign-form')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    if (validation(this) === true) {
        setTimeout(() => {
            alert ('Ваша запись была успешно создана!')
        }, 300);

        const allInputs = document.querySelectorAll('.main-input')
        allInputs.forEach(input => {
            input.value = ''
        })

        deleteCorrect()
        deleteError()
    }
})




// Текущая время и дата

const date = document.getElementById('date')
const time = document.getElementById('time')


currentDate()
setInterval(currentDate, 1000)


function currentDate() {
    date.value = new Date().toLocaleDateString()
    time.value = new Date().toLocaleTimeString()
}