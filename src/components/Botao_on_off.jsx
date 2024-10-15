import React, { useState } from 'react';

function Botao_on_off() {
  const [estado, setEstado] = useState(false);

  const alternarEstado = () => {
    setEstado(!estado);
  };

  return (
    <div>
      <h1>{estado ? 'ON' : 'OFF'}</h1>
      <button onClick={alternarEstado}>
        {estado ? 'Desligar' : 'Ligar'}
      </button>
    </div>
  );
}

export default Botao_on_off;
