import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import blogStyles from "./blog.module.css"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (
        sort: {
          fields:publishedDate,
          order:DESC
        }
      ) {
        edges {
          node {
            title
            slug
            publishedDate(formatString:"MMMM Do, YYYY")
          }
        }
      }
    }
  `)


  return (
    <Layout>
      <div className="container" style={{ maxWidth: "94%", paddingTop: "80px" }}>
        <h1 style={{ color: "black" }}>Sketch Blog</h1>
        <ol className={blogStyles.posts}>
          {data.allContentfulBlogPost.edges.map((blog) => {
            return (
              <li className={blogStyles.post} style={{ color: "black" }}>
                <Link to={`/blog/${blog.node.slug}`}>
                  <h2 style={{ color: "black" }}>{blog.node.title}</h2>
                  <p style={{ color: "black" }}>{blog.node.publishedDate}</p>
                </Link>
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export default BlogPage
