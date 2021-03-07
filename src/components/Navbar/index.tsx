import React from 'react'
import Search from '../Search'

import Image from 'next/image'
import Link from 'next/link'

//Styled components
import { Nav, NavbarContanier, BackButtonWrapper, BackButton, SearchWrapper } from './styles'

const Navbar = ({ searchTerm, searchHandle }) => {
    return (
        <>
            <Nav>
                <NavbarContanier>
                    <Link href='/' >
                        <BackButtonWrapper>
                            <BackButton>
                                <Image src='/assets/Icons/Back.svg' width={24} height={24} />
                            </BackButton>
                        </BackButtonWrapper>
                    </Link>
                    <SearchWrapper>
                        <Search searchTerm={searchTerm} searchHandle={searchHandle} />
                    </SearchWrapper>
                </NavbarContanier>
            </Nav>
        </>
    )
}

export default Navbar
