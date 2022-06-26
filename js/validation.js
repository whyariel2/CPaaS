const form = document.getElementById('form')
const name = document.getElementById('name')
const mothername = document.getElementById('nome-materno')
const cpf = document.getElementById('cpf')
const phone = document.getElementById('tel-celular')
const telephone = document.getElementById('tel-fixo')
const address = document.getElementById('endereco')
const login = document.getElementById('login')
const password = document.getElementById('password')
const passwordtwo = document.getElementById('passwordtwo')


document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault()

  checkInputs()
})

function checkInputs() {
  const nameValue = name.value.trim()
  const mohternameValue = mothername.value.trim()
  const cpfValue = cpf.value.trim()
  const phoneValue = phone.value.trim()
  const telephoneValue = telephone.value.trim()
  const addressValue = address.value.trim()
  const loginValue = login.value.trim()
  const passwordValue = password.value.trim()
  const passwordtwoValue = passwordtwo.value.trim()

  if (nameValue === '') {
    // MOSTRAR ERRO

    // ADICIONA CLASSE ERROR
    errorValidation(name, 'Preencha esse campo')
  } else {
    // ADICIONAR CLASSE SUCCESS
  }
}

// === RETORNA REFERÊNCIAS DIRETO DO PAI ===
function errorValidation(input, message) {
  const checkControl = input.parentElement;

  checkControl.className = 'input-box error'
}