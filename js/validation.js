const form = document.querySelector("form");
const nome = document.getElementById("name");
const mothername = document.getElementById("nome-materno");
const cpf = document.getElementById("cpf");
const phone = document.getElementById("tel-celular");
const telephone = document.getElementById("tel-fixo");
const address = document.getElementById("endereco");
const login = document.getElementById("login");
const password = document.getElementById("password");
const passwordtwo = document.getElementById("passwordtwo");
const small = document.querySelector('small');


// === TIRAR AÇÃO DEFAULT DO FORM ===
form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkInputs();

});


// === CHECAR SE TODOS OS CAMPOS ESTÃO PREENCHIDOS ===
function checkInputs() {
  const nameValue = nome.value.trim();
  const mothernameValue = mothername.value.trim();
  const cpfValue = cpf.value.trim();
  const phoneValue = phone.value.trim();
  const telephoneValue = telephone.value.trim();
  const addressValue = address.value.trim();
  const loginValue = login.value.trim();
  const passwordValue = password.value.trim();
  const passwordtwoValue = passwordtwo.value.trim();

  // === VALIDAÇÃO DO NOME ===
  if (nameValue === "") {

    // ADICIONA CLASSE ERROR
    errorValidation(nome, "Preencha esse campo");
  } else {
    // ADICIONAR CLASSE SUCCESS
    successValidation(nome);
  }

  // === VALIDAÇÃO DO NOME DA MÃE ===
  if (mothernameValue === "") {
    // ADICIONA CLASSE ERROR
    errorValidation(mothername, "Preencha esse campo");
  } else {
    // ADICIONAR CLASSE SUCCESS
    successValidation(mothername);
  }

  // === VALIDAÇÃO DO CPF ===
  if (cpfValue === "") {
    // ADICIONA CLASSE ERROR
    errorValidation(cpf, "Preencha esse campo");
  } else {
    successValidation(cpf);
  } // ADICIONAR CLASSE SUCCESS


  // === VALIDAÇÃO DO CELULAR ===
  if (phoneValue === "") {
    // ADICIONA CLASSE ERROR
    errorValidation(phone, "Preencha esse campo");
  } else {
    // ADICIONAR CLASSE SUCCESS
    successValidation(phone);
  }

  // === VALIDAÇÃO DO TELEFONE ===
  if (telephoneValue === "") {
    // ADICIONA CLASSE ERROR
    errorValidation(telephone, "Preencha esse campo");
  } else {
    // ADICIONAR CLASSE SUCCESS
    successValidation(telephone);
  }

  // === VALIDAÇÃO DO ENDEREÇO ===
  if (addressValue === "") {
    // ADICIONA CLASSE ERROR
    errorValidation(address, "Preencha esse campo");
  } else {
    // ADICIONAR CLASSE SUCCESS
    successValidation(address);
  }

  // === VALIDAÇÃO DO LOGIN ===
  if (loginValue === "") {
    // ADICIONA CLASSE ERROR
    errorValidation(login, "Preencha esse campo");
  } else {
    successValidation(login);
  }

  // === VALIDAÇÃO DA SENHA ===
  if (passwordValue === "") {
    // ADICIONA CLASSE PREENCHER CAMPO
    errorValidation(password, "Preencha esse campo");
  } else if (passwordValue.length < 8) {
    // ADICIONAR CLASSE ERROR
    editValidation(password, "O formato da senha deve conter 8 caracteres");
  } else {
    // ADICIONAR CLASSE SUCCESS
    successValidation(password);
  }

  // === VALIDAÇÃO DA CONFIRMAÇÃO DA SENHA ===
  if (passwordtwoValue === "") {
    // ADICIONA CLASSE ERROR
    errorValidation(passwordtwo, "Preencha esse campo");
  } else if (passwordtwoValue !== passwordValue) {
    // ADICIONAR CLASSE ERROR
    editValidation(passwordtwo, "As senhas devem ser iguais");
  } else {
    // ADICIONAR CLASSE SUCCESS
    successValidation(passwordtwo);
  }

  const formControl = form.querySelectorAll('.input-box')

  const formValid = [...formControl].every((checkControl) => {
    return (checkControl.className === "input-box success");
  });

  if (formValid) {
    localStorage.getItem("form");
  }
}

// === ADICIONA CLASSE E MENSAGEM ERROR ===
function errorValidation(input, message) {
  const checkControl = input.parentElement;
  const small = checkControl.querySelector('small')

  small.innerText = message;

  checkControl.className = "input-box error";
}

// === ADICIONA CLASSE E MENSAGEM SUCCESS ===
function successValidation(input) {
  const checkControl = input.parentElement

  checkControl.className = 'input-box success';
}

// === VERIFICAÇÃO DE PREENCHIMENTO CORRETO ===
function editValidation(input, message) {
  const checkControl = input.parentElement;

  small.innerText = message;

  checkControl.className = "input-box error";
}


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