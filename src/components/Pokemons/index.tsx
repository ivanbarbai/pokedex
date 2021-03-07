import React from 'react'
import Pokemon from './Pokemon'

export default function Pokemons({ pokemons }) {
    return (
        <>
            {pokemons.map((pokemon) => (
                <Pokemon key={pokemon.id} pokemon={pokemon} />
            ))}
        </>
    )
}


