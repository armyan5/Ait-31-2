// HomeWork

function sumDigits(x) { 
    // TODO
  let sum = 0;

  //1234
  while(x) {

    sum+= x % 10; // akumuliruyem v peremenniy sum ostatok otdelenya na 10 (toest poslednyuyu cifru chesla)
    
    x = (x - x % 10) / 10; // uberyom poslednoe cheslo i dayom novoe znachenya x ;  otbrasivayem poslednoe cifru ot chesl

  }

  return sum;
}




    
        
res = luckyNumber(183426)
if( res === 'Wrong number!'){
console.log('Wrong number');

}
console.log(res? 'Lucy' : 'unlucy')

function luckyNumber(x) { // sravnivayet summu cifr perviy polavini chesla so vtoroy polavini
    //TODO

    if((x+ '').length === 6) {

        const secondHalf = x % 1000; // vercnumenq verjin 3 nsani tiv@ 
        const firstHalf = (x -secondHalf) / 1000; // vercnumenq arajin 3 tiv @

        return sumDigits(firstHalf) === sumDigits(secondHalf)



    }else {
        return 'Wrong number!';
    }


}

    //ADVANCED




function banana() {
    let a = 'a';
    let b = 'b';


    console.log((b + a + +a + a).toLowerCase());
   

    // TODO:  'b', 'a' => banana
}

banana();


function returnNumber(x) { // 4 || 7 

    // if(x == 4) {
    //     return 7;
    // }else{
    //     return 4;
    // }

    // return x == 4 ? 7 : 4;

    // return 11 - x;

    return 28 / x;

}



