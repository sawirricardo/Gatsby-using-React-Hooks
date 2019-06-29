import React from "react"
import { useStore } from "../../store-provider"

const ResultCounter = () => {
  const { state } = useStore()
  return (
    <React.Fragment>
      <div>{state.counter}</div>
    </React.Fragment>
  )
}

export default ResultCounter
