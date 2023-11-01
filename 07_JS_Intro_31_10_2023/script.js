console.log('Hello world');
console.log(5 + 4);
console.log('9');

// odnostrochniy komentari

/*
 odnostrochniy komentari

 */

 console.log(document.body);

 /*
    klyuchevoe slova dlya sozdanya peremennix
   
    blochnaya oblast vidimosti:
 1. const - konstanta (ne mojet bit pereopredelena)
 2. let - peremennaya (mojez bit pereopredelena)


    globalnaya oblast vidimosti:
 3. var - (deprecated, ustarelo)

 */

 let a = 10;
 console.log(a);

 a = '15';
 console.log(a);

//  const b = 10;
//  console.log(b);

//  b = 5; nelzya pereopredelyat konstantu
//  console.log(b);

const div1 = document.getElementById('div1');
console.log(div1);


div1.style.border = '1px solid black';
console.log(div1.style.border); // znachenya svoystva border


const div1Query = document.querySelector('#div1');
console.log(div1Query);

const pDiv1 = document.querySelectorAll('#div1 > p');
console.log(pDiv1);


// ""  ''  

for(let i = 0 ; i < pDiv1.length; i ++) {
    pDiv1[i].innerHTML = `<span>new text ${i + 1}</span>`;     // "<span>new text" + i + "</span>"
   
}

const children = div1.children;
console.log(children.length);

for (let i = 0; i < children.length; i++) {
    children[i].style.color = 'red'
    
};

const newP = document.createElement('p');
console.log(newP);

const newPText = document.createTextNode('This text was created by special method');
newP.appendChild(newPText); // avelacnumenq nor grac texst@ mer constantum

div1.appendChild(newP); // dobavlyayem element konec v divi  (insertBefore() - dobavlyayet v nachale)


// HomeWork 

const t = setInterval(move, 20);
let pos = 0;   // shyotchik
const box = document.getElementById('box');

function move() {
    
    pos++;

    if(pos == 150){
      
        clearInterval(t)
       
    }
           box.style.left = pos + 'px';
           box.style.top = pos + 'px';
        


        

         
       
       

    //    pos--;
      
    //     box.style.top = pos + 'px';
    //     box.style.left = pos + 'px';

    //     if(pos == 0) {
    //         clearInterval(t)
    //     }


    

      
     
    
     
     
    


}

