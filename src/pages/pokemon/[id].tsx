import Head from 'next/head'

import Pokemon from '../../components/Pokemons/Pokemon'
import Navbar from '../../components/Navbar'
import SideBar from '../../components/Sidebar'
import Main from '../../components/Main'
import PokemonDetails from '../../components/Pokemons/PokemonDetails'

import { AppWrapper, MainWrapper } from '../../styles/styles'

const Details = ({ pokemon, loader, searchTerm, searchHandle, toggle }) => {
    console.log(pokemon)
    return (
        <>
            <Head>
                <title> {pokemon.name} | Pokedex</title>
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <AppWrapper>
                <SideBar toggle={toggle} />
                <MainWrapper>
                    <Navbar searchTerm={searchTerm} searchHandle={searchHandle} />
                    <Main loader={loader}>
                        <Pokemon pokemon={pokemon} />
                        <PokemonDetails pokemon={pokemon} />
                    </Main>
                </MainWrapper>
            </AppWrapper>
        </>
    )
}

export default Details

export const getServerSideProps = async ({ params }) => {
    const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${params.id}`
    )

    const pokemon = await res.json();

    return {
        props: {
            pokemon,
        },
    }
}


