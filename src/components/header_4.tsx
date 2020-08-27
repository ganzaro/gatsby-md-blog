import React from 'react';
// import { Link } from 'gatsby';
import tw from "twin.macro"
import styled from "@emotion/styled"

const Header = () => {
  return (
  <NavBar>
    <NavContainer>
      <SVG width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/>
      </SVG>
      <span>Tailwind CSS</span>
    </NavContainer>



  <Social>
    {/* <span>Tailwind CSS</span> */}
    <NavLink><a href="#">Docs</a></NavLink>
    <NavLink><a href="#">Examples</a></NavLink>
    <NavLink><a href="#">Blog</a></NavLink>

  </Social>

</NavBar>
  );
};

export default Header;

const SVG = tw.svg`
  fill-current h-8 w-8 mr-2

`

const NavBar = tw.nav`
  flex items-center justify-between flex-wrap bg-teal-500 p-6
`

const NavContainer = tw.div`
  flex items-center flex-shrink-0 text-white mr-6
`

const NavLink = tw.li`
  block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-blue-500 mr-4
`

const Social = styled.section`
  width: 244px;
  display: grid;
  margin-top: 16px;
  grid-template-rows: 48px;
  grid-template-columns: repeat(3, 1fr);
  a {
    border-radius: 4px;
    ${tw`flex items-center justify-center`};
    :hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }
`
