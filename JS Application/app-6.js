/*
    Escrever um programa JavaScript para rodar a palavra 'w3resource’ no sentido horário, removendo periodicamente uma letra do fim da palavra e anexando-a à frente.
*/


function reverseString(t)  {
    newString = "";
    for(i = t.length-1; i >= 0; i--){
        newString += t[i];
    }
    return newString;
}

let palavra = reverseString("w3resource");
console.log(palavra)
