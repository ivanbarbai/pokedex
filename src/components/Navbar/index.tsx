import React from 'react'
import Search from '../Search'

import Image from 'next/image'
import Link from 'next/link'

//Styled components
import { Nav, NavbarContanier, SearchWrapper } from './styles'

const Navbar = ({ searchTerm, searchHandle, children, isFlexed}) => {
    return (
        <>
            <Nav>
                <NavbarContanier isFlexed={isFlexed}>
                    {children}
                    <SearchWrapper>
                        <Search searchTerm={searchTerm} searchHandle={searchHandle} />
                    </SearchWrapper>
                </NavbarContanier>
            </Nav>
        </>
    )
}

export default Navbar
