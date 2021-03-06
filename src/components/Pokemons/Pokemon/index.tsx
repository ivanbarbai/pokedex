import React from 'react'
import { Card, CardContainer, CardHeader, CardContent, CardFooter, PokemonName, PokemonNumber, PokemonImage, PokemonTypes, PokemonType } from './styles'

import Image from 'next/image'

const Pokemon = ({ pokemon }) => {
    return (
        <>
            <Card>
                <CardContainer>
                    <CardHeader>
                        <PokemonName>{pokemon.name}</PokemonName>
                        <PokemonNumber>{pokemon.id}</PokemonNumber>
                    </CardHeader>
                    <CardContent>
                        <PokemonImage>
                            <img src={pokemon.sprites.other.dream_world.front_default} width='100%' />
                        </PokemonImage>
                    </CardContent>
                    <CardFooter>
                        <PokemonTypes>
                            <PokemonType>
                                Grass
                            </PokemonType>
                            <PokemonType>
                                Poison
                            </PokemonType>
                        </PokemonTypes>
                    </CardFooter>
                </CardContainer>
            </Card>
        </>
    )
}


export default Pokemon
