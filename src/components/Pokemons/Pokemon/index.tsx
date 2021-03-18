import React from 'react'
import { Card, CardContainer, CardHeader, CardContent, CardFooter, PokemonName, PokemonNumber, PokemonImage, PokemonTypes, PokemonType } from './styles'

import Link from 'next/link'

const Pokemon = ({ pokemon }) => {
    return (
        <>
            <Link href={`/pokemon/${pokemon.id}`}>
                <Card>
                    <CardContainer>
                        <CardHeader>
                            <PokemonName>{pokemon.name}</PokemonName>
                            <PokemonNumber>{pokemon.id}</PokemonNumber>
                        </CardHeader>
                        <CardContent>
                            <PokemonImage>
                                <img src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`} height='100%' />
                            </PokemonImage>
                        </CardContent>
                        <CardFooter>
                            <PokemonTypes>
                                <PokemonType>
                                    {pokemon.types[0].type.name}
                                </PokemonType>
                            </PokemonTypes>
                        </CardFooter>
                    </CardContainer>
                </Card>
            </Link>
        </>
    )
}


export default Pokemon
