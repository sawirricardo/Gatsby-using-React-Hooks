import React from "react"
import StoreProvider, { useStore } from "../../store-provider"

const Layout = ({ children }) => {
  return <StoreProvider>{children}</StoreProvider>
}

export default Layout
