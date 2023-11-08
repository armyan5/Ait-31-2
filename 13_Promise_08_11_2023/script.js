function getFiveAfterSevenSec() {
    setTimeout(() => {
        return 5;
    }, 7000) // cherez skolko dannaya fukcya buder rabotat (zapusti etu funkcyu cherez 7 sekund)
    
};

let res = getFiveAfterSevenSec(); // kanchumenq funkcian
console.log(res);

console.log("PROMISE");

let promise = new Promise(function (res,rej) {
    setTimeout(() => {
        rej(new Error('Error'));
    }, 7000)
    
});

console.log(promise);

promise
.then(value => value + 5).then(newValue => console.log(newValue))
.catch(err => console.log(err))  // voncor javayum try catch@ brnuma oshibken
.finally(console.log('Napichataem danniy texst pri lyubom isxode'));