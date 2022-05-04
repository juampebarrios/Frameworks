import useCounter from '../hooks/useCounter';

const ContadorHook = () => {

    const {valor, acumular} = useCounter(100);

    return (
        <>
            <h3>Contador con Hook: <small>{valor}</small></h3>
            <button className='btn btn-success' onClick={() => acumular(1)}>+1</button>
            &nbsp;
            <button className='btn btn-danger' onClick={() => acumular(-1)}>-1</button>
        </>
    )
}

export default ContadorHook