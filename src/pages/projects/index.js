import { graphql, Link } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

const PortfolioStyles = styled.div`
  text-align: center;
  }
  h2 {
    font-size: 3em;
    margin-top: 80px;
  }
  h3 {
    font-size: 2em;
    font-weight: 400;
  }
`

const ProjectsStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 80px;
  margin: 80px 20px;
  h3 {
    text-align: center;
    margin: 20px auto 0px;
    font-weight: 500;
  }
  p {
    color: #ccc;
    margin-top: 4px;
  }
`

function Projects({ data }) {
  const projects = data.allMarkdownRemark.nodes
  return (
    <>
      <PortfolioStyles>
        <h2>Portfolio</h2>
        <h3>Projects & website </h3>
        <ProjectsStyles>
          {projects.map(project => (
            <Link to={`/projects/${project.frontmatter.slug}`} key={project.id}>
              <span>
                <h3> {project.frontmatter.title} </h3>
                <p> {project.frontmatter.stack} </p>
                <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
              </span>
            </Link>
          ))}
        </ProjectsStyles>
      </PortfolioStyles>
    </>
  )
}

export default Projects

export const query = graphql`
  query ProjectsPage {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
  }
`
