import { FETCH_POKES } from "../actionTypes"

export const fetchPokes = () => {
  return {
    type: FETCH_POKES,
    payload: {
      dummy: "asdadsa"
    }
  }
}
