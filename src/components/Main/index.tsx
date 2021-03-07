import React, { useState, useEffect } from 'react'

import { MainC, MainContainer, MainGrid, Loading } from './styles'


export default function Main({ loader, children }) {
    return (
        <>
            <MainC>
                <MainContainer>
                    {loader ? (
                        <Loading>Loading</Loading>
                    ) : (
                            <MainGrid>
                                {children}
                            </MainGrid>
                        )}
                </MainContainer>
            </MainC>
        </>
    )
}
