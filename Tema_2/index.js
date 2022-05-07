// Ex_1
let number=15;

if (number%2 == 0)
    console.log(number-2)
    else if (number%2 != 0)
        console.log(number*2);

// Ex_2

const arr=[...Array(50).keys()];
function isPrime(num){
    for (let i=2; num > i; i++ ){
        if (num % i == 0){
        return false;
        }
    }
    return num > 1;
}
console.log(arr.filter(isPrime));

// Ex_4

const myNumber="1374895"
function summOfOddNumbers(myNumber){
let sumOdd = 0;
    for( let i = 0; i<myNumber.length; i++){
        if (myNumber[i] % 2 == 0) continue;
            sumOdd += parseInt(myNumber[i]);
    }
    return sumOdd;
}
console.log(summOfOddNumbers(myNumber));


// Ex_3

let myString=[1, "1", "salut", 2, 6, true, "true", "ciprian"];
    myString.forEach(element => {
        if(typeof element == "string"){
            console.log(element);
        }
    });


 
    // Ex_5

    const day= "Saturday"

    switch(day){
        case"Monday":
            console.log("Cereale cu lapte");
            break;
        case"Tuesday":
            console.log("Omleta");
            break;
        case"Wednesday":
        case"Thursday":
            console.log("Pancakes");
            break;
        case"Friday":
            console.log("Baton de cereale");
            break;
         case"Saturday":
         case"Sunday":
            console.log("Muffins cu banane si iaurt");
            break;
        default:
        console.log("Not a valid day")
            
    }

  


