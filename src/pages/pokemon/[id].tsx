const Pokemon = () => {

}

export default Pokemon

export const getServerSideProps = async ({ params }) => {
    const rest = await fetch(
        `https://https://pokeapi.co/api/v2/pokemon/${params.id}`
    )
}