import React, {useState} from "react"; // importiruem otdelno useState 

const Counter = ()=> {

    // React.useState(0); nuynna inch vor arajin toxum grac 

   const [count,setCount] = useState(0); // instrument iz reakta s kotorim mojno prosto bez perezagruzki delat izmenenya 

   const increment = () => {
    setCount(count + 1);
   } 

    return (
    <>
        <h2>Counter: {count}</h2>
        <button onClick={() => setCount(count -1)}>Decrement</button>
        <button onClick={increment}>Increment</button>
    </>
    );
}

export default Counter;