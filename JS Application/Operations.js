function operation (A, B){
     sum = A + B
     console.log ("\n" + A + " + " + B +" = " +sum)
     
     minus = B - A
     console.log ("\n" + B + " - " + A +" = " + minus)

     mult = A * B
     console.log ("\n" + A + " * " + B +" = " + mult)

     div = B / A
     console.log ("\n" + B + " / " + A +" = " + div)

}

numA = Math.floor(Math.random() * 101) //retorna numero aleatorio de 0 a 100 
numB = Math.floor(Math.random() * 101) //retorna numero aleatorio de 0 a 100
console.log (numA + "\n" + numB)
operation (numA,numB)
