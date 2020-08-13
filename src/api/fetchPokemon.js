
import axios from 'axios';

export const fetchPokemon = async ( name ) => {

    name = name.toLowerCase();
    const url =  `https://pokeapi.co/api/v2/pokemon/${name}`;
    const {data} = await axios.get(url)
     
    return data;
    
    
    
} 