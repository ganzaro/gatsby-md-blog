// import React from "react"
// import SEO from "../components/seo"
// import tw from "twin.macro"
// import styled from "@emotion/styled"

// import { Navbar } from "../components/navbar"
// import HeroImage from "../images/hero_image.jpg"

// export default () => (
//   <Wrapper>
//     <SEO title="Home" />
//     <Navbar />
//     <Main>
//       <Title>Bullionaire</Title>
//       <Description>
//         reviews and educational videos about precious metals.
//       </Description>
//       <Social>
//         <a
//           href="https://www.youtube.com/IndianBullionaire"
//           target="_blank"
//           title="Youtube"
//           rel="noopener noreferrer"
//         >
//           <Youtube />
//         </a>
//         <a
//           href="
//                https://www.instagram.com/indianbullionaire/"
//           target="_blank"
//           title="Instagram"
//           rel="noopener noreferrer"
//         >
//           <Instagram />
//         </a>
//         <a
//           href="https://twitter.com/INDBullionaire"
//           target="_blank"
//           title="Twitter"
//           rel="noopener noreferrer"
//         >
//           <Twitter />
//         </a>
//       </Social>
//     </Main>
//   </Wrapper>
// )

// const Twitter = ({ size = 18 }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width={size}
//     height={size}
//     viewBox="0 0 24 24"
//     fill="#fff"
//   >
//     <path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z" />
//   </svg>
// )

// const Youtube = ({ size = 18 }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width={size}
//     height={size}
//     viewBox="0 0 24 24"
//     fill="#fff"
//   >
//     <path d="M12.04 3.5c.59 0 7.54.02 9.34.5a3.02 3.02 0 0 1 2.12 2.15C24 8.05 24 12 24 12v.04c0 .43-.03 4.03-.5 5.8A3.02 3.02 0 0 1 21.38 20c-1.76.48-8.45.5-9.3.51h-.17c-.85 0-7.54-.03-9.29-.5A3.02 3.02 0 0 1 .5 17.84c-.42-1.61-.49-4.7-.5-5.6v-.5c.01-.9.08-3.99.5-5.6a3.02 3.02 0 0 1 2.12-2.14c1.8-.49 8.75-.51 9.34-.51zM9.54 8.4v7.18L15.82 12 9.54 8.41z" />
//   </svg>
// )

// const Instagram = ({ size = 18 }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width={size}
//     height={size}
//     viewBox="0 0 24 24"
//     fill="#fff"
//   >
//     <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
//   </svg>
// )

// const Wrapper = styled.div`
//   height: 100vh;
//   width: 100vw;
//   background-size: cover;
//   background-position: center center;
//   background-image: url(${HeroImage});
// `
// // background-image: url(${HeroImage});

// const Main = styled.main`
//   max-width: 720px;
//   padding-left: 64px;
//   width: calc(100vw - 40px);
//   height: calc(100vh - 240px);
//   ${tw`flex justify-center flex-col`}
//   @media (max-width: 720px) {
//     padding-left: 24px;
//     height: calc(100vh - 120px);
//   }
// `

// const Title = styled.h1`
//   ${tw`text-5xl text-white`}
//   @media (max-width: 720px) {
//     ${tw`text-3xl`}
//   }
// `

// const Description = styled.p`
//   ${tw`text-2xl font-light text-white`}
//   @media (max-width: 720px) {
//     ${tw`text-xl`}
//   }
// `

// const Social = styled.section`
//   width: 144px;
//   display: grid;
//   margin-top: 16px;
//   grid-template-rows: 48px;
//   grid-template-columns: repeat(3, 1fr);
//   a {
//     border-radius: 4px;
//     ${tw`flex items-center justify-center`};
//     :hover {
//       background: rgba(255, 255, 255, 0.1);
//     }
//   }
// `
