import React from "react"
import { Link } from "gatsby"
import tw from "twin.macro"
import styled from "@emotion/styled"

import Logo from "../images/indian_b_logo.png"

export const Navbar = () => {
  return (
    <Header>
      <Brand to="/" title="Bullionaire">
        <img src={Logo} alt="Bullionaire" title="Bullionaire" />
      {/* <SVG width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/>
      </SVG> */}
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


const SVG = tw.svg`
  fill-current h-8 w-8 mr-2
`
