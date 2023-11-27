import React, {useState} from "react"; // importiruem otdelno useState 

const Counter = ()=> {

    // React.useState(0); nuynna inch vor arajin toxum grac 

   const [count,setCount] = useState(0); // instrument iz reakta s kotorim mojno prosto bez perezagruzki delat izmenenya 

   const increment = () => {
    setCount(count + 1);
   } 

   const increment2 = () => {
    setCount(count -10);
   }

   const decrement2 = () => {
    setCount(count +10);
   }


    return (
    <>
        <h2>Counter: {count}</h2>
        <button onClick={() => setCount(count -1)}>Decrement</button>
        <button onClick={increment}>Increment</button>
        <button onClick={increment2}>Decrement -10</button>
        <button onClick={decrement2}>Increment +10</button>
        
    </>
    );
}

export default Counter;