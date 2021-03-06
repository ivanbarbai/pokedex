import styled from 'styled-components'


export const MainC = styled.div`
    padding: 40px 40px;
    justify-content: center;
    align-items: center;
    display : flex;
    @media screen and (max-width: 768px){
        padding: 20px 20px;
    }

`
export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const MainGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
    grid-gap: 24px;
    width: 100%;
    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 480px){
        grid-template-columns: 1fr;
    }
`
export const Loading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height:80vh;
`




