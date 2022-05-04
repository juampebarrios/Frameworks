import { useState } from 'react';
const Formulario = () => {

    //USESTATE PARA MANEJAR EL ESTADO DE LOS INPUTS
    const [formulario, setFormulario] = useState({
        email: '97.juanbarrios@gmail.com',
        password: '123456'
    });

    const onChange = (value: string, campo: string) => {
        setFormulario({ //FUNCION PARA ACTUALIZAR ESTADO
            ...formulario,
            [campo]: value
        });
    }

    return (
        <>
            <h3>Formulario</h3>
            <input 
                type='text' 
                className='form-control' 
                placeholder="Email" 
                value={formulario.email} 
                onChange={({target}) => onChange(target.value , 'email')}>
            </input>

            <input 
                type='text' 
                className='form-control m2- mb-2' 
                placeholder="Password" 
                value={formulario.password}
                onChange={({target}) => onChange(target.value, 'password')}>
            </input>


        </>
    )
}

export default Formulario