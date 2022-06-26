const form = document.getElementById("form");
const name = document.getElementById("name");
const mothername = document.getElementById("nome-materno");
const cpf = document.getElementById("cpf");
const phone = document.getElementById("tel-celular");
const telephone = document.getElementById("tel-fixo");
const address = document.getElementById("endereco");
const login = document.getElementById("login");
const password = document.getElementById("password");
const passwordtwo = document.getElementById("passwordtwo");

// === FORMATAR CPF ===
function formataCPF(cpf) {
  const elementoAlvo = cpf;
  const cpfValue = cpf.value;

  let cpfAtualizado;

  cpfAtualizado = cpfValue.replace(
    /(\d{3})(\d{3})(\d{3})(\d{2})/,
    function (regex, argumento1, argumento2, argumento3, argumento4) {
      return (
        argumento1 + "." + argumento2 + "." + argumento3 + "-" + argumento4
      );
    }
  );
  elementoAlvo.value = cpfAtualizado;
}

// === FORMATAR CELULAR ===
function formataphone(phone) {
  const elementoAlvo = phone;
  const phoneValue = phone.value;

  let phoneAtualizado;

  phoneAtualizado = phoneValue.replace(
    /(\d{2})(\d{2})(\d{9})/,
    function (regex, arg1, arg2, arg3) {
      return "(+" + arg1 + ")" + arg2 + "-" + arg3;
    }
  );

  elementoAlvo.value = phoneAtualizado;
}

// === FORMATAR TELEFONE ===
function formatatelephone(telephone) {
  const elementoAlvo = telephone;
  const telephoneValue = telephone.value;

  let telephoneAtualizado;

  telephoneAtualizado = telephoneValue.replace(
    /(\d{2})(\d{2})(\d{8})/,
    function (regex, arg1, arg2, arg3) {
      return "(+" + arg1 + ")" + arg2 + "-" + arg3;
    }
  );

  elementoAlvo.value = telephoneAtualizado;
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  checkInputs();
});

function checkInputs() {
  const nameValue = name.value.trim();
  const mohternameValue = mothername.value.trim();

  const telephoneValue = telephone.value.trim();
  const addressValue = address.value.trim();
  const loginValue = login.value.trim();
  const passwordValue = password.value.trim();
  const passwordtwoValue = passwordtwo.value.trim();

  if (nameValue === "") {
    // MOSTRAR ERRO

    // ADICIONA CLASSE ERROR
    errorValidation(name, "Preencha esse campo");
  } else {
    // ADICIONAR CLASSE SUCCESS
  }
}

// === RETORNA REFERÊNCIAS DIRETO DO PAI ===
function errorValidation(input, message) {
  const checkControl = input.parentElement;

  checkControl.className = "input-box error";
}
