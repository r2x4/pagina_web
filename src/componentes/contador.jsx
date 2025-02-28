import { useState } from "react";
import '../CSS/contador.css'

function Contador () {
    const [contador, setContador] = useState(0);
    return (
        <div className="contador_container">
            <h1>Contador: {contador}</h1>
                <div className="botones-container">
                    <button className="incrementar" onClick={() => setContador(contador + 1)}> Incrementar</button>
                    <button  className="decrementar" onClick={() => setContador(contador - 1)}> Decrementar</button>
                    <button  className="reset" onClick={() => setContador(0)}> Resetear</button>
                </div>
        </div>
    );
}

export default Contador;