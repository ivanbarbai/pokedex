import React from 'react'

import { DetailsContainer, DetailsWrapper, DetailsHeader, DetailsName, DetailsTypes, DetailsType, DetailsContent, DetailsContentBlock, DetailsTitle, DetailsData, DetailsFooter, DetailsFooterBlock, DetailsShiny } from './styles'

const PokemonDetails = ({ pokemon }) => {
    return (
        <>
            <DetailsContainer>
                <DetailsWrapper>
                    <DetailsHeader>
                        <DetailsName>{pokemon.name}</DetailsName>
                        <DetailsTypes>
                            <DetailsType>{pokemon.types[0].type.name}</DetailsType>
                        </DetailsTypes>
                    </DetailsHeader>
                    <DetailsContent>
                        <DetailsContentBlock>
                            <DetailsTitle>Pokedex Number</DetailsTitle>
                            <DetailsData>{pokemon.id}</DetailsData>
                        </DetailsContentBlock>
                        <DetailsContentBlock>
                            <DetailsTitle>Pokedex Number</DetailsTitle>
                            <DetailsData>{pokemon.height}</DetailsData>
                        </DetailsContentBlock>
                        <DetailsContentBlock>
                            <DetailsTitle>Pokedex Number</DetailsTitle>
                            <DetailsData>{pokemon.weight}</DetailsData>
                        </DetailsContentBlock>
                    </DetailsContent>
                    <DetailsFooter>
                        <DetailsFooterBlock>
                            <DetailsTitle>Shiny</DetailsTitle>
                            <DetailsShiny>
                                <img src={pokemon.sprites.front_shiny} />
                                <img src={pokemon.sprites.back_shiny} />
                            </DetailsShiny>
                        </DetailsFooterBlock>
                    </DetailsFooter>
                </DetailsWrapper>
            </DetailsContainer>
        </>
    )
}

export default PokemonDetails
