import styled from 'styled-components'
import Link from 'next/link'

export const Nav = styled.nav`
    height: 80px;
    display: flex;
    top: 0;
    width: 100%;

    @media screen and (max-width:768px){
        position: flex;
        width: 100%;
    }

`
export const NavbarContanier = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   padding: 0 40px;

   @media screen and (max-width:768px){
       padding 0 20px;
   }
`

export const BackButtonWrapper = styled.div`
    background: #566CD6;
    display: flex;
    border-radius: 20px;
    padding: 10px 20px;
    max-width: 20vw;
    margin-right: 10px;
    justify-content:center;
    align-items:center;
`
export const BackButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const SearchWrapper = styled.div`
   width: 100%;
   max-width: 30vw;

   @media screen and (max-width:780px){
    max-width: 60vw;
   }
`
