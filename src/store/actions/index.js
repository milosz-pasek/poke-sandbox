import { FETCH_POKES } from "../actionTypes"

export const fetchPokes = () => {
  return {
    type: FETCH_POKES,
    payload: {
      dummy: "asdadsa"
    }
  }
}

// const [selectedPokeInfo, setSelectedPokeInfo] = useState([])

//   const pokeInfoGet = pokeApiPokeInfo.get(`1`)
//   const pokeSpecsGet = pokeApiPokeSpecs.get(`1`)

//   const pokeInfoTest = async () => {
//     try {
//       const [{ data: pokeInfo }, { data: pokeSpecs }] = await Promise.all([
//         pokeInfoGet,
//         pokeSpecsGet
//       ])
//       setSelectedPokeInfo({ ...pokeInfo, ...pokeSpecs })
//     } catch (err) {
//       console.log(`pokeInfoTest error: ${err.message}`)
//     }
//   }

//   pokeInfoTest()
