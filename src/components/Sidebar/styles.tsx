import styled from 'styled-components'
import Link from 'next/link'

export const SideBar = styled.div`
    background: #566CD6;
    display: flex;
    max-width: 25vw;
    width: 25vw;
    height: 100vh;
    position: sticky;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    @media screen and (max-width: 768px){
        width:100%;
        max-width: 100%;
        height: 80px;
    }
`
export const SideBarContainer = styled.section`
    margin: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 768px){
        flex-direction: row;
    }
    
`

export const SidebarLogoWrapper = styled.div`
    justify-content: center;
    align-items: center;
    max-width: 10rem;
    display:flex;
    padding-bottom: 2rem;

    @media screen and (max-width: 768px){
        padding: 0;
    }

`

export const SideBarLogo = styled(Link)`
    cursor: pointer;
`
export const SideBarContent = styled.div`
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;

`
export const SideBarAvatar = styled.div`
    max-width: 12rem;

    @media screen and (max-width: 768px){
        display: none;
    }
`
export const SideBarUser = styled.h2`
    color: white;
    margin-bottom: 0.2rem;

    @media screen and (max-width: 768px){
        display: none;
    }
`
export const SideBarLevel = styled.h3`
    color: rgba(255, 255, 255, 0.5) ;
    margin-top: 0;
    margin-bottom: 1.8rem;

    @media screen and (max-width: 768px){
        display: none;
    }
`
export const SideBarLegend = styled.div`
    color: rgba(255, 255, 255, 0.8) ;

    @media screen and (max-width: 768px){
        display: none;
    }
`
export const SideBarFooter = styled.div`
    width: 100%;
    padding: 0;
    margin: 0;

    @media screen and (max-width: 768px){
        display: none;   
       }
`
export const LogOutButton = styled.div`
    background: rgb(118, 139, 220) ;
    padding: 16px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-transform: uppercase;
    cursor:pointer;
    color: white;
    font-weight: 600;
    align-selft: center;

    
`

export const TextButton = styled.p`
    margin: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 1000px){
        font-size:12px;
    }
`

export const SideBarMobile = styled.div`
    display:none;

    @media screen and (max-width:768px){
        display: flex;
    }

`













