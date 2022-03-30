import { FETCH_POKES } from "./types"

export const fetchPokes = () => {
  return {
    type: FETCH_POKES,
    payload: {
      dummy: "asdadsa"
    }
  }
}
