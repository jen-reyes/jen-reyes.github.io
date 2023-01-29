import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
        references {
          ...on ContentfulAsset {
            contentful_id
            fixed(width: 1600) {
              width
              height
              src
              srcSet
            }
          }
        }
      }
    }
  }
`

const Blog = (props) => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = ""
        const url = ""
        return <img alt={alt} src={url} />
      }
    }
  }
  return (
    <Layout>
      <div className="container" style={{ maxWidth: "91%", paddingTop: "80px" }}>
        <h1 style={{ color: "#000" }}>{props.data.contentfulBlogPost.title}</h1>
        <p style={{ color: "#000" }}>{props.data.contentfulBlogPost.publishedDate}</p>
        {documentToReactComponents(JSON.parse(props.data.contentfulBlogPost.body.raw, options))}
        {console.log(documentToReactComponents(JSON.parse(props.data.contentfulBlogPost.body.raw)))}
      </div>
    </Layout>
  )
}

export default Blog


