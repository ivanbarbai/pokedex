import React, { useState, useEffect } from 'react'

import Head from 'next/head'

import Navbar from '../components/Navbar'
import SideBar from '../components/Sidebar'
import Main from '../components/Main'
import MobileMenu from '../components/Mobile'
import Pokemons from '../components/Pokemons'

import { AppWrapper, MainWrapper } from '../styles/styles'

export default function Home() {

  const [isOpen, setIsOpen] = useState(false)
  const [isFlexed, setIsFlexed] = useState(false)

  const [data, setData] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [loader, setLoader] = useState(true);

  const [searchTerm, setSearchTerm] = useState('');
  const [search, setSearch] = useState([])

  const searchHandle = (e) => {
    e.preventDefault();

    setSearchTerm(e.target.value.toLowerCase())
  }

  const arr = [];

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then((response) => response.json())
      .then((data) => setData(
        data.results.map((item) => {
          fetch(item.url)
            .then((response) => response.json())
            .then((allpokemon) => arr.push(allpokemon));
          setSearch(arr)
          setPokemons(arr)
        }),
      ))
  }, []);

  setTimeout(() => {
    setLoader(false);
  }, 1000);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <AppWrapper>
        <MobileMenu isOpen={isOpen} toggle={toggle} />
        <SideBar toggle={toggle} isFlexed={true} />
        <MainWrapper>
          <Navbar isFlexed={isFlexed} searchTerm={searchTerm} searchHandle={searchHandle}/>
          <Main loader={loader}>
            <Pokemons pokemons={pokemons} />
          </Main>
        </MainWrapper>
      </AppWrapper>
    </>
  )
}

