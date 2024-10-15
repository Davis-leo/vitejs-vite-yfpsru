import React from 'react';
import minhaImagem from './images/imagem-exemplo.jpg'; // Caminho para a imagem

function ExibirImagem() {
  return (
    <div>
      <h1>Imagem Exemplo</h1>
      <img src={minhaImagem} alt="Exemplo" width="500" height="300" />
    </div>
  );
}

export default ExibirImagem;
