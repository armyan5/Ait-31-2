const root = ReactDOM.createRoot(document.getElementById('root')); // ssilka na react iz index hmtl

function Cohort() {
    return (
        <div>
            <h1>Cohort 31.2</h1>
        </div>
    )
    
}

root.render ( 
    // v kochestve parametra dlya metoda render() mojet popast tolko odin kornevoy teg(ili fragment) 
    <>
    <Cohort/>
    <Cohort/>
    <Cohort/>
    </>
);
