// HomeWork 

const t = setInterval(move1, 20);
let pos = 0;   // shyotchik
let flag = true;  // sarqumenq boolen flag vorne vor asuma erb kubik@ inch ani
const box = document.getElementById('box');


let dir = 1;
function move1() {
    pos+=dir;
    if(pos == 0 || pos == 150){
        dir = - dir;     //(dir = dir * -1)  kam (dir *= -1)                         3  TARBERAK RESHENYA!!!!!!!!!!!!!!!!!!!!!!!!!
    }

    box.style.left = pos + 'px';
    box.style.top = pos + 'px';

}



function move() {

    // if(pos == 150){
    //     flag = false;
    //     box.style.backgroundColor = 'white'; karanq poxenq kubiki guyn@
    // }

    // if(pos == 0) {
    //     flag= true;
    //     box.style.backgroundColor = 'black';  karanq poxenq kubiki guyn@                  1 TARBERAK RESHENYA !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // }


    // if (flag) {

    //   pos++;

    // }else pos--

    // box.style.left = pos + 'px';
    // box.style.top = pos + 'px';



    // if(pos == 0 || pos == 150) {
    //     flag = !flag;   // flag@ havasara hakarak znachenyayin flagi aysinqn( true er darav false kam hakarak@)
    // }

    //    flag? pos-- : pos++;                                                                   2 TARBERAK RESHENYA !!!!!!!!!!!!!!!!!!!!!!!
   

    //        box.style.left = pos + 'px';
    //        box.style.top = pos + 'px';




          

}

