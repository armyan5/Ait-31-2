const root = ReactDOM.createRoot(document.getElementById('root')); // ssilka na react iz index hmtl

root.render ( 
    // v kochestve parametra dlya metoda render() mojet popast tolko odin kornevoy teg(ili fragment) 
    <>
    <div>
        <h1>Hello World</h1>
    </div>
    <p>Hello from paragraph!</p>
    </>
);
