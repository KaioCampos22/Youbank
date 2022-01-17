let btn = document.querySelector('#verSenha')
const button = document.getElementById('button')

let Name = document.getElementById('name')
let validName = false

let Cpf = document.getElementById('cpf')
let validCpf = false

let senha = document.getElementById('senha')
let validsenha = false

let Confirmsenha = document.getElementById('ConfirmSenha')
let validConfirmsenha = false


btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha')

    if (inputSenha.getAttribute('type') == 'senha') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'senha')
    }
})
let btnConfirm = document.querySelector('#verConfirmSenha')

btnConfirm.addEventListener('click', () => {
    let inputConfirmSenha = document.querySelector('#ConfirmSenha')

    if (inputConfirmSenha.getAttribute('type') == 'senha') {
        inputConfirmSenha.setAttribute('type', 'text')
    } else {
        inputConfirmSenha.setAttribute('type', 'senha')
    }
})

button.addEventListener('click', (event) => {
    event.preventDefault()

    if (Name.value == '') {
        Name.classList.add("errorInput")

    } else {
        Name.classList.remove("errorInput")

    }
    if (Cpf.value == '') {
        Cpf.classList.add("errorInput")

    } else {
        Cpf.classList.remove("errorInput")

    }
    if (senha.value == '') {
        senha.classList.add("errorInput")

    } else {
        senha.classList.remove("errorInput")

    }
    if (Confirmsenha.value == '') {
        Confirmsenha.classList.add("errorInput")

    } else {
        Confirmsenha.classList.remove("errorInput")

    }
    if (Name.value.length <= 3) {
        Name.classList.add("errorInput")
        validName = false

    } else {
        Name.classList.remove("errorInput")
        validName = true

    }
    if (Cpf.value.length != 14) {
        Cpf.classList.add("errorInput")
        validCpf = false

    } else {
        Cpf.classList.remove("errorInput")
        validCpf = true

    }

    if (senha.value.length <= 5) {
        senha.classList.add("errorInput")
        validsenha = false

    } else {
        senha.classList.remove("errorInput")
        validsenha = true
    }
    if (Confirmsenha.value != senha.value) {
        Confirmsenha.classList.add("errorInput")
        validConfirmsenha = false

    } else {
        Confirmsenha.classList.remove("errorInput")
        validConfirmsenha = true

    }
})

function cadastrar() {
    if (validName && validCpf && validsenha && validConfirmsenha) {
        let listerUser = JSON.parse(localStorage.getItem('listerUser') || '[]')


        listerUser.push(
            {
                nameCad: Name.value,
                cpfCad: Cpf.value,
                senhaCad: senha.value,
            }
        )
        localStorage.setItem('listerUser', JSON.stringify(listerUser))

        setTimeout(() => {
            window.location.href = "login.html"

        }, 0300)


    } else {

    }
}


function mascara_cpf() {
    var maskcpf = document.getElementById('cpf')
    if (cpf.value.length == 3 || cpf.value.length == 7) {
        cpf.value += "."
    } else if (cpf.value.length == 11) {
        cpf.value += "-"

    }
}