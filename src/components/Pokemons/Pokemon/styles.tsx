import styled from 'styled-components'


export const Card = styled.div`
    width:  100%;
    max-width: 22rem;
    border-radius: 16px;
    box-shadow: 1px 1px 4px 4px #566CD615;
    background: white;
    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor:pointer;
    }
`
export const CardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 20px;
    height: 100%;
`

export const CardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
`
export const CardContent = styled.div`
    width: 100%;
    height: 14rem;
    display: flex; 
    align-items:center;
    justify-content: center;
    margin: 0;
    padding: 40px 0;
`
export const CardFooter = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PokemonName = styled.p`
    display: flex;
    margin-bottom: 0rem;
    padding-bottom: 0.2rem;
    font-size: 24px;
    font-weight: bold;
    text-transform: capitalize;
    color: #40415E;
`

export const PokemonNumber = styled.p`
    display: flex;
    margin: 0;
    color: #40415E;
`

export const PokemonImage = styled.div`
    max-width: 12rem;
    height: 100%;
`

export const PokemonTypes = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const PokemonType = styled.div`
    background: orange;
    margin: 0 4px;
    padding: 4px 12px;
    font-size: 14px;
    border-radius: 16px;
    color: white;
    text-transform:capitalize;
`



