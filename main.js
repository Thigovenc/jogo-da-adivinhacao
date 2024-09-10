//Variaveis

let numeroAleatorio = Math.round(Math.random() * 10);
let tentativas = 1;
const btnTentativa = document.querySelector("#btnTentativa");
const btnResetar = document.querySelector("#btnResetar");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

const inputNumber = document.querySelector("#inputNumber");

//Eventos

btnTentativa.addEventListener("click", handleClick);
btnResetar.addEventListener("click", handleResetarClick);
document.addEventListener("keydown", EnterKey);

//Funcao CallBAck

function handleClick(event) {
  event.preventDefault();
  
  if((Number(inputNumber.value) > 10 ) || (Number(inputNumber.value) < 0) ){
    numeroInvalido()
  }else{
    if (Number(inputNumber.value) == numeroAleatorio) {
      toogleScreen();
      document.querySelector(
        ".screen2 h2"
      ).innerText = `Acertou em ${tentativas} tentativas`;
    }else{
      numeroErrado();
    }
    numeroInvalido2();
    inputNumber.value = "";
    tentativas++;
  }
}

function handleResetarClick() {
  toogleScreen();
  numeroInvalido2();
  numeroErrado2();
  tentativas = 1;
  numeroAleatorio = Math.round(Math.random() * 10);
}

function toogleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function EnterKey(e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetarClick();
  }
}

function numeroInvalido(){
  screen1.querySelector(".numeroInvalido").classList.remove("hide")
}

function numeroInvalido2(){
  screen1.querySelector(".numeroInvalido").classList.add("hide")
}

function numeroErrado(){
  screen1.querySelector(".numeroErrado").classList.remove("hider")
}

function numeroErrado2(){
  screen1.querySelector(".numeroErrado").classList.add("hider")
}