import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Counter from "../components/counter"
import ResultCounter from "../components/resultCounter"

const IndexPage = () => (
  <Layout>
    <h1>This is an example Counter App using Gatsby + UseReactHook</h1>
    <ResultCounter />
    <Counter />
  </Layout>
)

export default IndexPage
