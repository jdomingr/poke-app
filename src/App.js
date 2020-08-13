import React, { useState } from 'react';
import './App.css';
import { fetchPokemon } from './api/fetchPokemon';
import { PokeCard } from './components/PokeCard';
import { SpinnerLoading } from './components/SpinnerLoading';
import { ErrorMessage } from './components/ErrorMessage';

function App() {

  const [name, setName] = useState('');
  const [pokemon, setPokemon] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = ( { target } ) => {
    setName(target.value);
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    setError('')
    setLoading(true);
    try{
      const result = await fetchPokemon(name);
      if(result){
        setPokemon(result);
        setLoading(false);
      }
    }catch(error){
      setLoading(false);
      setError('Pokémon Not Found')
    }
    
    
  }

  return (

      <div className="container mt-5">
        <h4 className="title-text">Find your favorite Pokémon!!!</h4>
        <hr />
        <form className="container-form" onSubmit = { handleSubmit }>
          <div className="form-group">
           <input type="text" className="form-control" name="name" value = { name } onChange={ handleInputChange } placeholder="Pokémon"/>
          </div>
          <button type="submit" className="btn btn-outline-primary">
            Search
          </button>
        </form>
        { error !== '' && <ErrorMessage error = { error }/> }
        { loading && <SpinnerLoading />}
        { error === '' && <PokeCard pokemon={pokemon}/>}

      </div >
    
    );
}

export default App;
