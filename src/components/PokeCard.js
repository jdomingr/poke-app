import React from 'react'

export const PokeCard = ( { pokemon } ) => {
   
    
    if(!pokemon){
        return null;
    }
    
    return (
        <div className="container-card animate__animated animate__fadeIn">
            
                    <div className="card text-center">
                        <div className="card-header">
                            <span className="text-muted"> #{pokemon.id} {pokemon.name}</span> 
                        </div>
                        <div className="img-card">
                            <img  src={pokemon.sprites.front_default} alt={pokemon.name} width="100"/>
                        </div>
                        
                        <div className="card-body">
                            <h5 className="card-title">  Estadísticas </h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"> Height: {pokemon.height}</li>
                                <li className="list-group-item"> Weight: {pokemon.weight}</li>
                            </ul>
                        </div>
                    </div>
              
        </div>
        
    )
}
