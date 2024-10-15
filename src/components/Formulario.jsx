import React, { useState } from 'react';

function Formulario() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');

  return (
    <div>
      <div>
        <label>
          Nome:
          <input 
            type="text" 
            value={nome} 
            onChange={(e) => setNome(e.target.value)} 
          />
        </label>
      </div>
      <div>
        <label>
          Idade:
          <input 
            type="text" 
            value={idade} 
            onChange={(e) => setIdade(e.target.value)} 
          />
        </label>
      </div>
      
      <div>
        <h3>Dados Inseridos:</h3>
        <p>Nome: {nome}</p>
        <p>Idade: {idade}</p>
      </div>
    </div>
  );
}

export default Formulario;
