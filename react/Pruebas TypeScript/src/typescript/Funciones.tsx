import React from "react";

const Funciones = () => {

  const sumar = (a: number, b: number):number => {
    return a+b;
  }

  return (
    <>
      <h3>Funciones</h3>
      <span>El resutado es: {sumar(3, 7)}</span>
    </>
  );
};

export default Funciones;
