import React, { useState } from 'react';
import './App.css';
import { fetchPokemon } from './api/fetchPokemon';
import { PokeCard } from './components/PokeCard';

function App() {

  const [name, setName] = useState('');
  const [pokemon, setPokemon] = useState(null);

  const handleInputChange = ( { target } ) => {
    setName(target.value);
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const result = await fetchPokemon(name);
    setPokemon(result)
  }
  return (
    
      <div className="container">
        <h1>Bienvenido</h1>
        <hr />
        <form onSubmit = { handleSubmit }>
          <div className="form-group">
           <input type="text" className="form-control" name="name" value = { name } onChange={ handleInputChange } placeholder="Pokémon"/>
          </div>
          <button type="submit" className="btn btn-outline-primary">
            Buscar 
          </button>
        </form>

        <hr/>
        
        <PokeCard pokemon={pokemon}/>

      </div >
    
    );
}

export default App;
