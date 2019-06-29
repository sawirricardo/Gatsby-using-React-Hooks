import React from "react"
import { useStore } from "../../store-provider"

const Counter = () => {
  const { state, dispatch } = useStore()
  return (
    <React.Fragment>
      <button onClick={() => dispatch({ type: "COUNTER_INC" })}>Add 1</button>
      <button onClick={() => dispatch({ type: "COUNTER_DEC" })}>Minus 1</button>
      <button onClick={() => dispatch({ type: "COUNTER_RESET" })}>Reset</button>
    </React.Fragment>
  )
}

export default Counter
