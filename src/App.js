import { FiSearch } from 'react-icons/fi';
import './styles.css'
import { useState } from 'react';
import api from './services/api';

function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSearch(){

    if(input === ''){
      alert("Preencha algum cep")
      return;
    }

    try{
      const response = await api.get('{$input}/json');
      setCep(response.data)
      setInput("");

    }catch{
      alert("Ops erro ao buscar");
      setInput("")
    }

  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>
      <div className="containerInput">
        <input
          tipe="text"
          placeholder="Digite seu cep..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF" />
        </button>
      </div>

      {Object.keys(cep).lenght > 0 &&(
        <main className='main'>
        <h2>Cep: {cep.cep}</h2>
        <span>{cep.logradouro}</span>
        <span>complemento:{cep.complemento}</span>
        <span>{cep.bairro}</span>
        <span>{cep.localidade}{cep.uv} </span>
        <span> </span>
      </main>
      )}
      <main className='main'>
        <h2>Cep: {cep.cep}</h2>
        <span>{cep.logradouro}</span>
        <span>complemento:{cep.complemento}</span>
        <span>{cep.bairro}</span>
        <span>{cep.localidade}{cep.uv} </span>
        <span> </span>
      </main>
    </div>
  );
}

export default App;
