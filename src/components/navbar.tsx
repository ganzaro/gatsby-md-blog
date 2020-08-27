import React from "react"
import { Link } from "gatsby"
import tw from "twin.macro"
import styled from "@emotion/styled"

import Logo from "../images/indian_b_logo.png"

export const Navbar = () => {
  return (
    <Header>
      <Brand to="/" title="Indian Bullionaire">
        <img src={Logo} alt="Indian Bullionaire" title="Indian Bullionaire" />
      </Brand>
    </Header>
  )
}

const Header = styled.header`
  height: 64px;
  ${tw`flex items-center text-white`}
  border-bottom: 1px solid rgba(144, 144, 140, 0.33);
`

const Brand = styled(Link)`
  cursor: pointer;
  ${tw`h-full px-6 flex items-center`};
  border-right: 1px solid rgba(144, 144, 140, 0.33);
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  img {
    ${tw`h-12`}
  }
`

