import React, {useState} from "react"; // importiruem otdelno useState 

const Counter = ()=> {

    // React.useState(0); nuynna inch vor arajin toxum grac 

   const [count, setCount] = useState(0); // instrument iz reakta s kotorim mojno prosto bez perezagruzki delat izmenenya 

   const increment = () => {
    setCount(count + 1);
   } 

//    const increment2 = () => {
//     setCount(count -10);
//    }

//    const decrement2 = () => {
//     setCount(count +10);
//    }

const changeCountByBtn = (x) => setCount(count + x); // sarqumenq arandzin funkcia 


    return (
    <>
        <h2>Counter: {count}</h2>
        {/*Body Function     CallFunction                     Function */}
        {/*incriment || changeCountByBtn(-10) || () => changeCountByBtn(-10) */}

        <button onClick={() => changeCountByBtn(-10)}>Decrement10</button>
        <button onClick={() => changeCountByBtn(-1)}>Decrement</button>
        <button onClick={increment}>Increment</button>
        <button onClick={() => setCount(count +10)}>Increment10</button>
        
    </>
    );
}

export default Counter;