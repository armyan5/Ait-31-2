let arr = [1, 2, 3, 'four', 'five'];
console.log(arr);
console.log(typeof arr);

console.log('========== PUSH ==========');

// metod Push() dobavlyayet elementi v konec massiv (menyayet isxodniy massiv)
//metod push vozvrashaet novaya dlina massiva

let res = arr.push(6, 7, 8);

console.log(arr); // obnavlyonniy massiv
console.log(res); // novaya dlina massiva




// metod Pop() menyayet isxodniy massiv,udalyaya posledniy element massiva i vozvrashayet udalyonniy element
console.log('========== POP ==========');

res= arr.pop();

// raspechativaetsa obnavlyonniy massiv
console.log(arr);

//raspechatovaet udalyonniy element
console.log(res);




// metod Shift() menyayet isxodniy massiv,udalyaya perviy element massiva i vozvrashayet udalyonniy element
console.log('========== SHIFT ==========');
res = arr.shift();

//raspechatovaet obnavlyonniy massiv
console.log(arr);

//raspechatovaet udalyonniy element
console.log(res);



// metod UNSHIFT() menyayet isxodniy massiv,dobavlyayet elementi v nachalo massiva i vozvrashaet novuyu dlinu massiva
console.log('========== UNSHIFT ==========');
res = arr.unshift(0,1)

// raspechatovaet obnavlyonniy massiv
console.log(arr);

// rospechativaet novaya dlina massiva
console.log(res);



// concat() ne menyayet originalniy massiv i vozvrashaet noviy obedenyonniy massiv
console.log('========== CONCAT ==========');

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

res = arr1.concat(arr2);
console.log(res);   //  [1, 2, 3, 4, 5, 6]
console.log(arr1);  //  [1, 2, 3];
console.log(arr2);  //  [4, 5, 6];


// metod slice() ne menyayet original i vozvrashaet noviy massiv
console.log('========== SLICE ==========');
res = arr.slice(5,8);  // s 5ogo do 8ogo elementa 

console.log(res); //['five',6]
console.log(arr); // original ostanetsa



//metod splice() menyayet noviy massiv i vozvrashaet noviy massiv
console.log('========== SPLICE ==========');
res= arr.splice(1,4);// 1 perviy element // 4 yox shtuk!!!

console.log(res); // [1, 2, 3, 'four']
console.log(arr);  // [0, 'five', 6, 7]

// poverxnostnaya kopirovania (primitivi xranyatsa v peremennix po znacheniyu a object po SSILKE na mesto pamyati gde xranyatsa dannie )
let arrCopy = arr1

console.log(arr1); //[1000, 2, 3];
console.log(arrCopy);//[1000, 2, 3];

arr1[0] = 1000;
console.log(arr1);

console.log(arrCopy);


console.log('========== SPREAD =========='); // ne metod a operator
// glubokoe kopirovanya 
let arrTrueCopy = [...arr1];

console.log(arrTrueCopy);
console.log(arr1);
arr1[0] = 1;

console.log(arrTrueCopy);
console.log(arr1);



let obj = {
    userName: 'John',
    age: 14
}

let objCopy = {...obj};

obj.age = 18;

console.log(obj);
console.log(objCopy);

obj = {

    userName: 'John',
    age: 14,
    nationality: 'Poland',
    sex: 'male',
    dateOfBirth: '31.08.2009'

}
console.log(obj);

objCopy = {...obj,age: 20, userName: 'Peter'}
console.log(objCopy);