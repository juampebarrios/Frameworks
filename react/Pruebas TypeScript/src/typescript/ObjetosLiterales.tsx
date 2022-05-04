import React from "react";

interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion;
}

interface Direccion {
    pais: string;
    casa: number;
}

const ObjetosLiterales = () => {
  const persona: Persona = {
    nombreCompleto: "Juan",
    edad: 25,
    direccion: {
      pais: "Uruguay",
      casa: 2722,
    },
  };

  return (
    <>
      <h3>ObjetosLiterales</h3>
      <code>
        <pre>{JSON.stringify(persona, null, 2)}</pre>
      </code>
    </>
  );
};

export default ObjetosLiterales;
