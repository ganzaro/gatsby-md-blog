import React from 'react';
import { Link } from 'gatsby';
import tw from "twin.macro"
import styled from "@emotion/styled"

import Logo from "../images/bsg_logo.png"
// import Logo from "../images/bsg_logo_long.png"

const Header = () => {
  return (
  <NavBar>
    <NavContainer>
      <a href="/"><Icon src={Logo} alt={`${name} Logo`} /></a>
      <Heading>BLOCKCHAIN SOCIETY GHANA</Heading>
    </NavContainer>

  <LinkSection>
    {/* <span>Tailwind CSS</span> */}
    {/* <NavLink><a href="#">Blog</a></NavLink> */}
    <NavLink><Link to="/blog">Blog</Link></NavLink>
    <NavLink><Link to="/events">Events</Link></NavLink>
    <NavLink><Link to="/about">About</Link></NavLink>
    <NavLink><Link to="/contact">Contact</Link></NavLink>

  </LinkSection>

</NavBar>
  );
};

export default Header;

const Icon = tw.img`
  h-20 mr-4
`

const NavBar = tw.nav`
  flex items-center justify-between flex-wrap bg-black p-12
`

const NavContainer = tw.div`
  flex items-center flex-shrink-0 text-white mr-6
`

const NavLink = tw.li`
  block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-4
`
const Heading = tw.h1`
  text-2xl text-white uppercase
`

const LinkSection = styled.section`
  width: 244px;
  display: grid;
  margin-top: 16px;
  grid-template-rows: 48px;
  grid-template-columns: repeat(4, 1fr);
  a {
    border-radius: 4px;
    ${tw`flex items-center justify-center`};
    :hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }
`
