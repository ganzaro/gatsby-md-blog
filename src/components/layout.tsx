import React from "react"
// import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"

import Header from "./header"
import Footer from "./footer"

const Wrapper = styled("div")`
  border: 2px solid white;
  padding: 10px;
`

export default function Layout({ children }) {
  return (
    <Wrapper>
      <Header></Header>

      {children}
      <Footer></Footer>
    </Wrapper>
  )
}
