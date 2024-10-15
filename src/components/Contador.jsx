import React, { useState } from 'react';

function Contador() {
  const [contagem, setContagem] = useState(0);

  return (
    <div>
      <h1>{contagem}</h1>
      <button onClick={() => setContagem(contagem + 1)}>Add</button>
      <button onClick={() => setContagem(contagem - 1)}>Reduce</button>
    </div>
  );
}

export default Contador;
