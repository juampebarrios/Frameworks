import React from 'react'

const TiposBasicos = () => {

    const name: string = 'Juan';
    const edad: number = 25;
    const mayor: boolean = true;
    const poderes: string[] = ['velocidad', 'volar', 'vision laser'];
    
  return (
   <>
    <h3>Tipos Basicos</h3>
    {name}, {edad}, { mayor ? 'mayor de edad' : 'menor de edad'}
    <br/>
    {poderes.join(', ')}
   </>
  )
}

export default TiposBasicos