// import React from "react"
// import { Global, css } from "@emotion/core"
// import styled from "@emotion/styled"

// import Header from "../components/header_4"

// const Wrapper = styled("div")`
//   border: 2px solid black;
//   padding: 10px;
// `

// export default function Layout({ children }) {
//   return (
//     <Wrapper>
//       <Header></Header>
//       <Global
        
//         styles={css`
//           div {
//             background: white;
//             color: gray;
//           }
//         `}
//       />
//       {children}
//     </Wrapper>
//   )
// }

// /**
//  * Layout component that queries for data
//  * with Gatsby's useStaticQuery component
//  *
//  * See: https://www.gatsbyjs.org/docs/use-static-query/


// import React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
// import "./layout.css"

// const Layout = ({ children }) => {
//   const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)

//   return (
//     <>
//       <Header siteTitle={data.site.siteMetadata.title} />
//       <div
//         style={{
//           margin: `0 auto`,
//           maxWidth: 960,
//           padding: `0 1.0875rem 1.45rem`,
//         }}
//       >
//         <main>{children}</main>
//         <footer>
//           © {new Date().getFullYear()}, Built with
//           {` `}
//           <a href="https://www.gatsbyjs.org">Gatsby</a>
//         </footer>
//       </div>
//     </>
//   )
// }

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export default Layout
// */
