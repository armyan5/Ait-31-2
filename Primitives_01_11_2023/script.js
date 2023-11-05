let x;
console.log(x);  //undefined

x = 7;  // Number  (Javascriptum chka tipizirovanya tveri hamar, long int ....)
x = 'bye'; // String 

console.log(x);

const pi = 3.1415926;
// pi = 3.14; tak delat nelyza potomu chto unas tip peremennovo constant!!!!!!!!!!!!

let y = x;
console.log(y);

console.log("pi = " + pi);
console.log(`pi = ${pi}`);

const exp = pi;

console.log("exp = " + exp + " or " + pi);
console.log(`exp =  ${exp}  or  ${pi}`);

x = true;
console.log(x);

x = null;

// primer konkatenacii (skleivanie castey v odnu stroku)
let res = 'true' + 5;  // 'true5'
console.log(res);

res = true + 5;    // boolean => number   true = 1, false = 0;
console.log(res);

res = 5;
console.log(res);
console.log(res + '');  //  '5'    console.log(String(res)); java versyayum

res = '5a'; 
console.log(res);
console.log(+res); //NaN (Not a number)    //console.log(Number(res));


console.log(parseInt('5a'));  // 5
console.log(+'5a');         // NaN
console.log(Number('5a'));    // NaN



console.log(typeof res);
console.log(typeof +res);

// = == ===  =(prisvoyenya)  ==(srovnenya 2 elementov)  === (toje*)


//== ne strogoe sravnenya (sravnivayutsa znachenya bez uchyota tipov dannix peremennix)
x = '2' == 2;
console.log(x);


//== strogoe sravnenya (sravnivayutsa znachenya s uchyota tipov dannix peremennix)
x = '2' === 2;
console.log(x);

res = 7 % 2; // = ostatok otdelenya (ostatok otdelenya ne mojet bit raven na chisla na kogo delim)
console.log(res);

res = 0;

switch (res) {
    case 1:
        console.log(`number: ${res}`);
        break;

     case '1':
            console.log(`string: ${res}`);
   
     default:
        console.log('It\'s not a1 ');
        break;
}

// ternarniy operator

let age = 16;
let vol = age > 16 ? 42 : 1.5;

++age
age++

x = 10;
res = x++ + ++x;  //(10 + 12 = 22)
console.log(res);
console.log(x);


// false = 0, '', null, NaN, undefined
x = !!x        // Boolean(x);
console.log(x);


let example = 'hello';
console.log(!!example);

// HomeWork

// res = sumDigits(x); // 10    1 + 2 + 3 + 4 = 10
// console.log(`res = ${res}`);

//BASIC

res = luckyNumber(123871) //    1 + 2 + 3 == 8 + 7 + 1  (true ili false)
console.log(res ? 'Lucky' : 'Unlucky')








let number = 12345667;
let sum = sumDigits(x);

function sumDigits(x) { 
    // TODO
    let sum = 0;

    while(number > 0) {
        sum += number % 10;
        number = Math.floor(number/10);
    }

    return sum;
}


console.log(`sum = ${sum}`);


    
        



let number1 = 771456;
res= luckyNumber(number1);
function luckyNumber(number1) { // sravnivayet summu cifr perviy polavini chesla so vtoroy polavini
    //TODO

 const stringNumber = String(number1)
 const length = stringNumber.length;

  const half = Math.floor(length / 2);


 const firstHalf = stringNumber.substring(0, half);
 const secondHalf = stringNumber.substring(half);

 let sumFirst = 0;
 let sumSecond = 0;

 
for (let i = 0; i < half; i++) {
    sumFirst += +firstHalf[i];
    sumSecond += +secondHalf[i];
    

}

return sumFirst === sumSecond;

}
console.log(res);




    //ADVANCED




function banana() {
    let a = 'a';
    let b = 'b';


   





    // TODO:  'b', 'a' => banana
}


let monkey = 'b' + 'a' + parseInt('a') + 'a'
console.log(monkey.toLowerCase());

