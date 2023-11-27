class Cohort extends React.Component {
    render() {
        return (
            <>
            <h1>Cohort 31.2 from Class Component</h1>
            </>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root')); // ssilka na react iz index hmtl

root.render ( 
    // v kochestve parametra dlya metoda render() mojet popast tolko odin kornevoy teg(ili fragment) 
    <>
    <Cohort/>
    <Cohort/>
    <Cohort/>
    </>
);