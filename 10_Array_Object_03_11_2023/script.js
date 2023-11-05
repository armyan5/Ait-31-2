let arr = ['one', 'two', 'Three', 'eight', 'tHree', 'thrEE', 'six'];

console.log('===== indexOf =====');
let res = arr.indexOf('three', 3) // vtaroy parametr ne obezatelno !

console.log(arr); // isxodniy massiv ne izminilsya 
console.log(res); // indexs iskomogo elementa v masive ili -1 esli takogogo net



console.log('===== includes =====');
res = arr.includes('nine'); 

console.log(arr); // isxodniy massiv ne izminilsya 
console.log(res); // vozvrashaet true,esli takoy element v massive est i false,esli takogo elementa net



console.log('===== findIndex =====');
res = arr.findIndex(predicateLength3) 

function predicateLength3(element, index) { // indexs ne vajno esli nam ne nujno  (_, index) vot tak mojno prsoto iskat index
    return element.length === 3 && index >=2  // mojno element ne napoisat esli nam interesuet tolko index
}

console.log(arr); // isxodniy massiv ne izminilsya 
console.log(res); // vozvrashaet true,esli takoy element v massive est i false,esli takogo elementa net


res = arr.findIndex((e,i) => i >=2 && e.toLowerCase() === 'three') 

console.log(arr);
console.log(res);


// Regular functions

// console.log(multiply(2,5)); netu ne kakoy raznici pisat posle funkcii ili do gukcii java scrip ponimaet eto

function multiply(a, b) {
    return a * b;
}

console.log(multiply(2,5));


// Arrow functions

// console.log(multiplyArrow(2,5)); ReferanceError

// const multiplyArrow = (a,b) => a * b;

const multiplyArrow = (a,b) => {
    // console.log(this); klyuchivoe slovo this ne rabotaet i budet vsegda pokazat samiy globalniy object
    console.log(a,b);
  return  a * b;
};

console.log(multiplyArrow(2,5));


const human = {
    hobby: 'chess',
    fullName: function() {
        return `${this.firstName} ${this.lastName}`
    }
};

const john = {
    firstName: 'John',
    lastName: 'Smith'
}

console.log(john);
console.log(john.hobby);

john.__proto__ = human;
console.log(john);
console.log(john.hobby);
console.log(john.fullName);


Array.prototype.printArray = function() {
    for (let i = 0; i < this.length; i++) {
        console.log(this[i]);
        
    }
}


const numbers = new Array(2, 3, 5, 7, 11, 13, 17, 19);
console.log(numbers);
numbers.printArray();


const strings = ['one', 'two', 'three'];
strings.printArray();


const person = {
    firstName: 'Peter',
    lastName: 'Parker',
    age: 40,
    address: {
        country: 'USA',
        city: 'New York',
        house: {
            street: 'Roosevelt',
            number: 111,
            liter: 'a',
            apartment: 16
        }
    }
}


const{age, firstName: name1} = person;
const{firstName,lastName,address:{city,house: {street,number,liter,apartment}}} = person;
console.log(`Mr.${lastName}, ${firstName}, ${city}, ${number + liter}, ${apartment}`);

console.log(name1);

res = Object.keys(person);  // massiv klyuchey
console.log(res);

res = Object.values(person);  //
console.log(res);

res = Object.entries(person);  //
console.log(res);