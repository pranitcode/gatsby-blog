import React from 'react'
import Layout from '../components/layout.js'
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogStyles from './blog.module.scss'
import Head from '../components/head.js'

const BlogPage = (props) => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date
              }
              fields {
                slug
              }
              
            }
          }
        }
      }
    `)
  console.log(data)
    return (
      

        <Layout>
        <Head title='Blog'/>
        <h1>Blog</h1>
        <ol  className={blogStyles.posts}>
          {data.allMarkdownRemark.edges.map(edge => (
          
            <li className={blogStyles.post}>
              <Link to={`/blog/${edge.node.fields.slug}`}>
              <h3>{edge.node.frontmatter.title}</h3>
              <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
           )
          )
          }
        
        </ol>
           
    
       </Layout>


    );
}

export default BlogPage
