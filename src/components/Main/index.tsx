import React, { useState, useEffect } from 'react'

import { MainC, MainContainer, MainGrid, Loading } from './styles'

import Pokemons from '../Pokemons'

export default function Main({pokemons, loader}) {
    return (
        <>
            <MainC>
                <MainContainer>
                    {loader ? (
                        <Loading>Loading</Loading>
                    ) : (
                            <MainGrid>
                                <Pokemons pokemons={pokemons} />
                            </MainGrid>
                        )}
                </MainContainer>
            </MainC>
        </>
    )
}
