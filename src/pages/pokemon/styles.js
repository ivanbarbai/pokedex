import styled from 'styled-components'

export const AppWrapper = styled.div`
    display: flex;
    flex-direction: row;

    @media screen and (max-width:768px){
        flex-direction: column;
    }
`

export const MainWrapper = styled.div`
    background: linear-gradient(#F2F4FF #FBFCFF)
    display: flex;
    flex-direction: column;
    width: 100%;
`