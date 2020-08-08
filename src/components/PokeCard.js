import React from 'react'

export const PokeCard = ( { pokemon } ) => {
    console.log(pokemon)
    if(!pokemon){
        return null;
    }
    
    return (
        <div className="container-card">
            <div className="row">
                <div className="col-6">
                    <div className="card">
                        <div className="img-card">
                            <img  src={pokemon.sprites.front_default} alt={pokemon.name} width="100"/>
                        </div>
                        
                        <div className="card-body">
                            <h5 className="card-title">{ pokemon.name }</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
