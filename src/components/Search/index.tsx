import Image from 'next/image'

import { SearchContainer, SearchInputWrapper, SearchInput, SearchIconWrapper } from './styles'


export function Search({ searchTerm, searchHandle }) {

    return (
        <>
            <SearchContainer>
                <SearchInputWrapper>
                    <SearchInput id='search' type='search' placeholder='Search' value={searchTerm} onChange={searchHandle} />
                </SearchInputWrapper>
                <SearchIconWrapper>
                    <Image src='/assets/Icons/Search.svg' width={24} height={24} />
                </SearchIconWrapper>
            </SearchContainer>
        </>
    )
}

export default Search
