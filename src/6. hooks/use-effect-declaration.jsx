import React, { useEffect, useState } from 'react';

export const UseEffectComponent = () => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        setPokemon([...pokemon, 'Pikachu', 'Gengar']) 
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <ul>
                {pokemon.map(p => <li>{ p }</li>)}
            </ul>
        </div>
  );
}
