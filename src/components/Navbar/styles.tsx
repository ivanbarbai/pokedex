import styled from 'styled-components'
import Link from 'next/link'

export const Nav = styled.nav`
    height: 80px;
    display: flex;
    top: 0;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    @media screen and (max-width:768px){
        position: flex;
        width: 100%;
    }

`
export const NavbarContanier = styled.div`
   display: flex;
   justify-content: ${({ isFlexed }) => (isFlexed ? 'space-between' : 'flex-end')};
   align-items: center;
   width: 100%;
   padding: 0 40px;
   @media screen and (max-width:768px){
       padding 0 20px;
   }
`

export const SearchWrapper = styled.div`
   width: 100%;
   max-width: 30vw;

   @media screen and (max-width:780px){
    max-width: 100%;
   }
`
