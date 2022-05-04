import React from 'react'
import Formulario from './components/Formulario'
import Usuarios from './components/Usuarios'
import Login from './components/Login'
import ContadorHook from './components/ContadorHook'
import ObjetosLiterales from './typescript/ObjetosLiterales'
import TiposBasicos from './typescript/TiposBasicos'
import Funciones from './typescript/Funciones';
import Contador from './components/Contador';

function App() {
  return (
    <div className='mt-2'>
      <h2>Test App - TypeScript</h2>
      <hr/>
      <TiposBasicos/>
      <hr/>
      <ObjetosLiterales/>
      <hr/>
      <Funciones/>
      <hr/>
      <Contador/>
      <hr/>
      <ContadorHook/>
      <hr/>
      <Login/>
      <hr/>
      <Usuarios/>
      <hr/>
      <Formulario/>
    </div>
  )
}

export default App