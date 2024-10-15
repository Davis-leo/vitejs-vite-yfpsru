import React, { useState } from 'react';

function FormularioLogin() {
  const [username, setUsername] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (senha === confirmarSenha) {
      alert(`Login realizado com sucesso! Username: ${username}`);
    } else {
      alert('As senhas não coincidem!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </label>
      </div>
      <div>
        <label>
          Senha:
          <input 
            type="password" 
            value={senha} 
            onChange={(e) => setSenha(e.target.value)} 
            required 
          />
        </label>
      </div>
      <div>
        <label>
          Confirmar Senha:
          <input 
            type="password" 
            value={confirmarSenha} 
            onChange={(e) => setConfirmarSenha(e.target.value)} 
            required 
          />
        </label>
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default FormularioLogin;
