getName = prompt(); //possibilita o usuario inserir op seu nome

nome = document.getElementById("nome")
nome1 = document.getElementById ("nome1")
nome.innerHTML = getName
nome1.innerHTML = getName

weekDay = document.getElementById ("weekDay")
let date = new Date();

let time = date.getHours();
let msg;

let today = date.getDay();

if( time< 12) {
    msg = "Bom dia";
} else if(time >= 12 && time <= 18) {
    msg = "Boa tarde";
} else {
    msg = "Boa noite";
}

msg.innerHTML = msg

switch(today) {
    case 1:
    weekDay.innerHTML = "Domingo"
    console.log(` Segunda-feira | ${msg} | ${time} horas`)
    break;
    case 2:
    weekDay.innerHTML = "Segunda Feira"
        console.log(` Terca-feira | ${msg} | ${time} horas`)
        break;
    case 3:
    weekDay.innerHTML = "Terca Feira"
        console.log(` Quarta-feira | ${msg} | ${time} horas`)
        break;
    case 4:
    weekDay.innerHTML = "Quarta Feira"
        console.log(` Quinta-feira | ${msg} | ${time} horas`)
        break;
    case 5:
    weekDay.innerHTML = "Quinta Feira"
        console.log(` Sexta-feira | ${msg} | ${time} horas`)
        break;
    case 6:
    weekDay.innerHTML = "Sexta Feira"
        console.log(` Sabado | ${msg} | ${time} horas`)
        break;
    case 7:
    weekDay.innerHTML = "Sabado"
    default: 
        break;
}

weekDay.innerHTML = "Sexta feira"