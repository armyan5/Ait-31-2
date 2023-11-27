import React, {useState, FC } from "react"; // importiruem otdelno useState 

// React.FunctionComponent | React.FC

const Counter: React.FC = (): JSX.Element => {

    // React.useState(0); nuynna inch vor arajin toxum grac 

   const [count, setCount] = useState<number>(0); // instrument iz reakta s kotorim mojno prosto bez perezagruzki delat izmenenya 

   const increment = (): void => {
    setCount(count + 1);
   } 

//    const increment2 = () => {
//     setCount(count -10);
//    }

//    const decrement2 = () => {
//     setCount(count +10);
//    }

const changeCountByBtn = (x:number): void => setCount(count + x); // sarqumenq arandzin funkcia 


    return (
    <>
        <h2>Counter: {count}</h2>
        {/*Body Function     CallFunction                     Function */}
        {/*incriment || changeCountByBtn(-10) || () => changeCountByBtn(-10) */}

        <button onClick={(): void => changeCountByBtn(-10)}>Decrement10</button>
        <button onClick={(): void => changeCountByBtn(-1)}>Decrement</button>
        <button onClick={increment}>Increment</button>
        <button onClick={(): void => setCount(count +10)}>Increment10</button>
        
    </>
    );
}

export default Counter;