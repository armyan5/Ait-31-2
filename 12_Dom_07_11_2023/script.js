// setInterval(printTime, 1000);

// function printTime() {
//     const date = new Date();
//     const h = date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
//     const m = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
//     const s = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds();
//     const t = `${h} : ${m} : ${s}`;

//     time.textContent = t;

//     time.style.margin = '10px auto 0';
//     time.style.width = 'fit-content';

// };


// HOMEWORK

const input = document.getElementById('taskInput');  // sarqumenq dakument vor@ vekaluma mer grac input@ !!!!!!! ssilki na neobxadimie elementi s kotorimi budem rabotat
const button = document.getElementById('addTask');
const list = document.getElementById('taskList');

list.addEventListener('click',(e) => {   // event(e) sobitya (inch tar uzenq karanq grenq)
  //  console.log(e);
  if (e.target.tagName === 'BUTTON') {  // ete menq klikenq anum henc buttoni vren
    //console.log('We clicked on button');

    e.target.parentElement.remove(); // pri najate na klnopu delete jnjvuuma et element@

  }

  if (e.target.checked) {
    //console.log(e);
    e.target.previousElementSibling.style.textDecoration = 'line-through'; // anumneq nenc vor ptichken dneluc et teqst@ perechyorknutia linum 
  }else {
    e.target.previousElementSibling.style.textDecoration = 'none'; // hakarak depqum chi perecyorknutiy chi

  }

})

const addTask = () => {              // strelochnaya funkcia te inch petqa ani mer button@ klikic heto
    const task = input.value.trim();
    if (task) {
        const li = document.createElement('li');  // sozdali li i on sozdayotsa kajdiy raz kogda v cikle if est task(datark chi grac@)

        // sarqumenq ptichka u knopka anunov delete
        li.innerHTML = ` 
        <span> ${task} </span> <input type='checkbox'> <button>Delete</button>  
        `;

        list.appendChild(li); // dobavlyayem na stranichku vor ereva mer eji vra mer ners arac input@
        
    };
    input.value = '';   // jnjumenq mer input@ mer greluc heto  hajord grelu hamar
}



button.onclick = addTask;  
//button.addEventListener('click',addTask);
 

