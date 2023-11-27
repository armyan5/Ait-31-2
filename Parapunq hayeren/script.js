// DAS 1 IN FUNKCIA PROMT!!!!

// let name = prompt("What is your name");

// let lastName = prompt("What is your lastName");

// alert("Nice to meet you " +  name +  " " + lastName);



// DAS 2RD BOOLEAN POPOXAKAN!!!

// let x = 6;
// let y = 10;
// let z = true;
// let u = false;

// let r = x > y;
// alert(r); 


//DAS 3RD (IF ELSE)!!!

let x = prompt("How are you");

if (x === "good") {
    alert("vay inch lava");
    
}else {
    alert("qez inch exav axper jan?");
};



let a = {
    name: "Joe",
    age: 25,
    phone: "8913748932"

};

// Object.keys(a).forEach(function(key) {
//     let value = a[key];
//     alert(key + ":" + value )    // dursenq hanum a i meji keyn u valuen u tpumenq
// });

// alert(Object.values(a)); arandzin alert enq anum mer a i valuen





// let stringify = function(obj) {
//     let result = "";

//     Object.keys(obj).forEach(function(key){      //  stringify vazuma mer objekti vrov  sarquma tox 
//         let value = obj[key];
//         result += key + ":" + value + "\n";

//     });

//     return result;
// };

let str = JSON.stringify(a);    // JSON!!!!!!1
let b = JSON.parse(str);
alert(b.name);


// let z = function () {
//     alert("Hi Poxosik") // funkcia hayatararelu dzev
    
// };

// z();

let y = 10;

let div = function(t, s) {
    return t / s;
};

let dip = function(y, zoo) { // 4, yup
    return zoo(y) * zoo(y);
};

let yup = function(c) {
    return div(y,2);
};

let d = dip(4, yup);

alert(d);
