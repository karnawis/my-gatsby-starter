import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import banner from '../images/banner.jpeg'

// import Img from 'gatsby-image'

const MainContainerStyle = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  align-items: center;
  h2 {
    font-size: 4em;
  }
  h3 {
    font-size: 3em;
    font-weight: 400;
    margin-bottom: 20px;
  }
  a {
    display: inline-block;
    background: #f74b2d;
    padding: 10px 16px;
    border-radius: 10px;
    margin-top: 20px;
    font-weight: 500;
  }
`

export default function Home({ data }) {
  // console.log(data)
  return (
    <>
      <MainContainerStyle>
        <img src={banner} width="100%" alt="test" />
        <h3>a software engineer, artist and activist</h3>
        <p>
          Hi my name is Sura. My passion for art, technology and human rights
          have defined my career and education goals and daily decision making.
          I would like to influence the design and engineering industry and
          shift culture so we have more parents, women, diversity and hopefully
          it can be more inclusive. Living and working in middle east, north
          America and Europe, all over the world has taught me many valuable
          lessons including being very adaptive, compassionate and resilient. I
          have also learnt to always bring up the best in others and make the
          best out of circumstances to meet an end goal.
        </p>
        <Link to="http://sura.me" className="test">
          Sura.me
        </Link>
        <div />
      </MainContainerStyle>
    </>
  )
}

export const query = graphql`
  query MyQuery {
    site {
      host
      port
      siteMetadata {
        contact
        description
        title
      }
    }
  }
`

// query Banner {
//   file(relativePath: {eq: "abstract-art-red-green-painting"}) {
//     childImageSharp {
//       fluid {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// }
