function isDividedByThree (number){

dividedByThree = true
if (number % 3 == 0){
    dividedByThree = true
    return dividedByThree
   
    } else {
        dividedByThree = false
        return dividedByThree
        }
} 

number = Math.floor(Math.random() * 11);
console.log("is '" + number + "' divided by 3?")
console.log (isDividedByThree(number))
