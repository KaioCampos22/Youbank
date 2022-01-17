const button = document.getElementById('button')

const email = document.getElementById('email')
let validemail = false

const password = document.getElementById('password')
let validpassword = false


button.addEventListener('click', (event) => {
    event.preventDefault()


    if (email.value == '') {
        email.classList.add("errorInput")
    } else {
        email.classList.remove("errorInput")
    }

    if (password.value == '') {
        password.classList.add("errorInput")
    } else {
        password.classList.remove("errorInput")
    }
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") - email.value.indexOf("@") == 1)) {
        email.classList.add("errorInput")
        validemail = false
    } else {
        validemail = true
    }


    if (password.value.length <= 5) {
        password.classList.add("errorInput")
        validpassword = false
    } else {
        password.classList.remove("errorInput")
        validpassword = true
    }

})

let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#password')

    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})
function entrar() {
    if (validemail && validpassword) {
        let listerUser = JSON.parse(localStorage.getItem('listerUser') || '[]')


        listerUser.push(
            {
                emailCad: email.value,
                senhaCad: password.value,
            }
        )
        localStorage.setItem('listerUser', JSON.stringify(listerUser))

        setTimeout(() => {
            window.location.href = "dashboard.html"

        }, 1000)


    } else {

    }
}
