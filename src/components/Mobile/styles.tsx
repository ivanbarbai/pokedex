import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa';

export const MobileContainer = styled.div`
    position: fixed;    
    width: 60%;
    height: 100%;
    background: #566CD6;
    display:flex;
    flex-direction: column;
    align-items: center;
`
export const MobileHeader = styled.div`
    height:80px;
    width:100%;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    padding: 0 20px;
`
export const Icon = styled.div`
    display:flex;
    background: transparent;
    font-size: 24px;
    cursor: pointer;
    outline: none;
`
export const CloseIcon = styled(FaTimes)`
    color: #fff;
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding:  0;
    align-items: center;
    justify-content:space-around;
    `
export const MobileWrapper = styled.div`
    position: fixed;
    height: 100%;
    background: rgba(0,0,0, 0.5);
    width: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    z-index: ${({ isOpen }) => (isOpen ? '999' : '1')};
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
`

export const MobileContent = styled.div`
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`
export const MobileFooter = styled.div`
    width: 100%;
    padding: 0 20px;
    margin: 0;
`

export const MobileAvatar = styled.div`
    max-width: 12rem;
`
export const MobileUser = styled.h2`
color: white;
margin-bottom: 0.2rem;
`
export const MobileLevel = styled.h3`
    color: rgba(255, 255, 255, 0.5) ;
    margin-top: 0;
    margin-bottom: 1.8rem;
`
export const MobileLegend = styled.div`
    color: rgba(255, 255, 255, 0.8) ;
`




