import React, { createContext, useReducer, useContext } from "react"

const initialState = {
  counter: 0,
}

function reducer(state, action) {
  switch (action.type) {
    case "COUNTER_INC":
      return { counter: state.counter + 1 }
    case "COUNTER_DEC":
      return { counter: state.counter - 1 }
    case "COUNTER_RESET":
      return { counter: 0 }
    default:
      throw new Error()
  }
}

const DispatchContext = createContext()
const StoreContext = createContext()

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider

export const useDispatch = () => useContext(DispatchContext)
export const useStore = () => useContext(StoreContext)
