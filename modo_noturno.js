const MODO_NOTURNO_KEY = 'modo_noturno_ativado'

document.addEventListener('DOMContentLoaded', function(e) {
    const seletorModoNoturno = document.getElementById('seletor-modo-noturno')
    const root = document.querySelector(':root')

    seletorModoNoturno.onchange = function() {
        // modo noturno
        if (seletorModoNoturno.checked) {
            root.style.setProperty('--body-bg-color', '#131417')
            root.style.setProperty('--header-bg-color', '#dbb826')
            root.style.setProperty('--font-color', 'white')
            root.style.setProperty('--header-font-color', 'black')

            setSelecaoModoNoturno(true)
        }

        // modo padrão
        else {
            root.style.setProperty('--body-bg-color', '#f0f2f5')
            root.style.setProperty('--header-bg-color', '#2d4a22')
            root.style.setProperty('--font-color', '#363f5f')
            root.style.setProperty('--header-font-color', 'white')

            setSelecaoModoNoturno(false)
        }
    }

    seletorModoNoturno.checked = getSelecaoModoNoturno()
    seletorModoNoturno.onchange()
})

function getSelecaoModoNoturno() {
    const sel = localStorage.getItem(MODO_NOTURNO_KEY)
    if (sel){
        return JSON.parse(sel)
    }
    return false
}

function setSelecaoModoNoturno(modo) {
    localStorage.setItem(MODO_NOTURNO_KEY, modo)
}

window.getSelecaoModoNoturno = getSelecaoModoNoturno;
window.setSelecaoModoNoturno = setSelecaoModoNoturno;