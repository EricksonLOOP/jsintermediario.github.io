const nome = document.querySelector(".nome");
const email = document.querySelector(".email");
const phone = document.querySelector(".phone");
const msg = document.querySelector(".msg");
const btnSend = document.querySelector(".enviar");

function vNome() {
  if (nome.value === "") {
    const nObg = document.querySelector("#nObg");
    nObg.style.display = "block";
    nome.style.border = "1px solid red";
    return false;
  } else {
    const nObg = document.querySelector("#nObg");
    nObg.style.display = "none";
    nome.style.border = "1px solid green";
    return true;
  }
}

function vEmail() {
  if (email.value === "") {
    const eObg = document.querySelector("#eObg");
    const nObg = document.querySelector("#nObg");

    eObg.style.display = "block";
    email.style.border = "1px solid red";

    return false;
  } else {
    const eObg = document.querySelector("#eObg");
    eObg.style.display = "none";
    email.style.border = "1px solid green";
    return true;
  }
}

function vPhone() {
  if (phone.value === "") {
    const pObg = document.querySelector("#pObg");
    pObg.style.display = "block";
    phone.style.border = "1px solid red";
    return false;
  }
    pObg.style.display = "none";
    phone.style.border = "1px solid green";
  return true;
}

function vMsg() {
  if (msg.value === "") {
    const mObg = document.querySelector("#mObg");
    mObg.style.display = "block";
    msg.style.border = "1px solid red";
    return false;
  }
    mObg.style.display = "none";
    msg.style.border = "1px solid green";
  return true;
}

function verificar() {
  const isNomeValido = vNome();
  const isEmailValido = vEmail();
  const isPhoneValido = vPhone();
  const isMsgValida = vMsg();

  if (isNomeValido && isEmailValido && isPhoneValido && isMsgValida) {
    const form = document.querySelector("#form");
    form.innerHTML =
      '<p class="pRetornar"> Obrigado, ' +
      nome.value +
      '. Assim que recebermos sua mensagem iremos retorná-la! &lt;3</p>';
  }
  console.log(phone.value);
}

nome.addEventListener("click", vNome);
email.addEventListener("click", vEmail);
phone.addEventListener("click", vPhone);
msg.addEventListener("click", vMsg);

btnSend.addEventListener("click", verificar);
