import { graphql, Link } from "gatsby"
import React from "react"

import Layout from "../components/layout"

export default function Home({ data }) {
  const { title, description } = data.site.siteMetadata

  return (
    <div>
      <Layout>
      <h1>{title}</h1>
      <p>{description}</p>
      <Link to="/blog">Read our blog</Link>

      <img alt="Cute" src={data.image.publicURL} />
      </Layout>
    </div>
  )
}

export const pageQuery = graphql`
  query MetadataQuery {
    site {
      siteMetadata {
        title
        description
      }
    }

    image: file(base: { eq: "bsg_logo_long.png" }) {
      publicURL
    }
  }
`
