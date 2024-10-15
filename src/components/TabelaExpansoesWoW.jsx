import React from 'react';

function TabelaExpansoesWoW() {
  const expansoes = [
    { nome: 'The Burning Crusade', plataforma: 'PC', ano: 2007 },
    { nome: 'Wrath of the Lich King', plataforma: 'PC', ano: 2008 },
    { nome: 'Cataclysm', plataforma: 'PC', ano: 2010 },
    { nome: 'Mists of Pandaria', plataforma: 'PC', ano: 2012 },
    { nome: 'Warlords of Draenor', plataforma: 'PC', ano: 2014 },
    { nome: 'Legion', plataforma: 'PC', ano: 2016 },
    { nome: 'Battle for Azeroth', plataforma: 'PC', ano: 2018 },
    { nome: 'Shadowlands', plataforma: 'PC', ano: 2020 },
    { nome: 'Dragonflight', plataforma: 'PC', ano: 2022 },
    { nome: 'The War Within', plataforma: 'PC', ano: 2024 }
  ];

  return (
    <div>
      <h1>Expansões de World of Warcraft</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Plataforma</th>
            <th>Ano de Lançamento</th>
          </tr>
        </thead>
        <tbody>
          {expansoes.map((expansao, index) => (
            <tr key={index}>
              <td>{expansao.nome}</td>
              <td>{expansao.plataforma}</td>
              <td>{expansao.ano}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TabelaExpansoesWoW;