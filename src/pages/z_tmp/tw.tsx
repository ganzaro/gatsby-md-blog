// import React from "react"
// import { Link } from "gatsby"

// import tw from "twin.macro"
// import styled from "@emotion/styled"

// import SEO from "../components/seo"

// const Heading = tw.h1`
//   text-2xl text-blue-500 uppercase
// `

// const Text = tw.p`
//   text-xl text-pink-700 font-sans 
// `

// // mix tw + emo
// const EmoH1 = styled.h1`
//   color: red;
//   ${tw`
//     text-xl font-mono
//   `}
// `
// const Button = styled.button`
//   ${tw`bg-blue-500 hover:bg-blue-800 text-white p-2 rounded`}
// `

// const IndexPage = () => (
//   <div>
//     <SEO title="Home" />
//     <Heading>Hello, world!</Heading>
//     <EmoH1>Emo H1</EmoH1>

//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>

//     <Text>Welcome to your new Gatsby site.</Text>
//     <Text>Now go build something great.</Text>

//     <Button>Click this </Button>

//     {/* using utility class - does not seem working*/}
//     <Link
//       className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
//       to="/p1/"> Go to page p1
//     </Link>
//   </div>
// )

// export default IndexPage;