import React, { useState } from 'react';

const Contador = () => {

    const [valor, setValor] = useState(10)

    const acumular = (numero: number) => {
        setValor(valor + numero);
    }

    const disminuir = (numero: number) => {
        setValor(valor - numero);
    }

    return (
        <>
            <h3>Contador <small>{valor}</small></h3>
            <button className='btn btn-success' onClick={() => acumular(1)}>+1</button>
            &nbsp;
            <button className='btn btn-danger' onClick={() => disminuir(1)}>-1</button>
        </>
    )
}

export default Contador