const useState = React.useState;
const $app = document.getElementById('app');

//Creamos nuestro componente Contador
function Contador (){
    // Se puede tener la cantidad de estados que quieras en los componentes
    const [contadorValue, actualizarContador] = useState(50)
    const [numeroVeces, actualizadorVeces] = useState(0);

    return (
        // Se puede usar <React.Fragment> para renderizar mas de 1 elemento a la vez
        <div>
            <span>{contadorValue}</span><br/>
            <button onClick ={()=>{
                actualizarContador(contadorValue +1)
                actualizadorVeces(numeroVeces + 1)
            }}>Incrementar + </button>
            <button onClick={()=>{
                actualizarContador(contadorValue -1 )
                actualizadorVeces(numeroVeces + 1)
            }}>Decrementar - </button><br/>
            <span>Veces Utilizados {numeroVeces}</span>
        </div>
    );
}

// Realizamos el renderizado usando JSX
ReactDOM.render(
    <div>
        <Contador />
    </div> 
    , $app);
