import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'
import Img from 'gatsby-image'

export default function Home( {data}) {

  return (
      <Layout>
        <section className={styles.header}>
          <img src="/spiderwoman-banner.jpeg" alt="banner of sura" width="100%"/>
          <h3>a software engineer, artist and activist</h3>
          <p>Hi my name is Sura. My passion for art, technology and human rights have defined my career and education goals and daily decision making. I would like to influence the design and engineering industry and shift culture so we have more parents, women, diversity and hopefully it can be more inclusive. Living and working in middle east, north America and Europe, all over the world has taught me many valuable lessons including being very adaptive, compassionate and resilient. I have also learnt to always bring up the best in others and make the best out of circumstances to meet an end goal.</p>
          <Link to="http://sura.me" className={styles.btn}>Sura.me</Link>
          <Img fluid={data.file.childImageSharp.fluid } />
        </section>
      </Layout>
    )
}

export const query = graphql`
  query Banner {
    file(relativePath: {eq: "banner.jpeg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`