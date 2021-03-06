import styled from 'styled-components'

export const SearchContainer = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
    width: 100%;
    border-radius 30px;
    border: 0.5 solid #566CD6;
    margin:0;
    padding:0;
    box-shadow: 1px 1px 4px 4px #566CD615;
    background: white;
    @media and screen (max-width:780px;){
        width: 100%
    }
    @media and screen (max-width:480px;){
        width: 100%
    }
`
export const SearchInputWrapper = styled.div`
    width: 100%;
    padding: 0 10px;
`
export const SearchInput = styled.input`
    width:100%;
    border: none;
    outline: none;
`
export const SearchIconWrapper = styled.div`
    background: #566CD6;
    display: flex;
    border-radius: 20px;
    padding: 10px 20px;
    margin:0;
`





