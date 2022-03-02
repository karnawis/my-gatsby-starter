import { graphql } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../components/Layout'

const ProjectDetailsStyles = styled.div`
  h2 {
    font-size: 3.5em;
    margin-top: 80px;
  }
  h3 {
    font-size: 2em;
    font-weight: 400;
    margin-bottom: 40px;
  }
  .featured {
    margin-bottom: 40px;
  }
  .inner-html {
    margin-top: 40px;
  }
`
export default function ProjectDetails({ data }) {
  console.log(data)
  const { html } = data.markdownRemark
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <ProjectDetailsStyles>
        <h1>{title}</h1>
        <h3>{stack}</h3>
        <div className="featured">
          <Img fluid={featuredImg.childImageSharp.fluid} />
        </div>
        <div className="inner-htm" dangerouslySetInnerHTML={{ __html: html }} />
      </ProjectDetailsStyles>
    </Layout>
  )
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
