let buttons = document.querySelectorAll('.mybuttons')
let windows = document.querySelectorAll('.windows')

let buttonNames = ["Grafiks", "Papildus info", "Atziņas", "Kontakti", "Noderīgi",]
let windowNames = ["Grafiks", "Papildus info", "Atziņas", "Kontakti", "Noderīgi",]

buttons.forEach((el, index) => makeElements(el, index));
windows.forEach((el, index) => changeWindowNames(el, index))

function changeWindowNames (el, index){
    el.querySelector('.window-text').innerHTML = windowNames[index]
}

function makeElements(el, index) {
    el.innerHTML = buttonNames[index]
    el.addEventListener('click', () => showWindow(index))
}

function resetWindows(e) {
    showWindow(null)
}

function showWindow(num){
    windows.forEach((el, index) => {
        num == index ? el.classList.toggle('winwis') : el.classList.remove('winwis')
    })
}