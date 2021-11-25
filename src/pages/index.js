import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import banner from '../images/banner.jpeg'
import * as styles from '../styles/home.module.css'



//import Img from 'gatsby-image'

export default function Home( {data}) {
//console.log(data)
  return (
      <Layout>
        <section className={styles.main}>
          <img src={banner} width="100%"/>
          <h3>a software engineer, artist and activist</h3>
          <p>Hi my name is Sura. My passion for art, technology and human rights have defined my career and education goals and daily decision making. I would like to influence the design and engineering industry and shift culture so we have more parents, women, diversity and hopefully it can be more inclusive. Living and working in middle east, north America and Europe, all over the world has taught me many valuable lessons including being very adaptive, compassionate and resilient. I have also learnt to always bring up the best in others and make the best out of circumstances to meet an end goal.</p>
          <Link to="http://sura.me" className={styles.btn}>Sura.me</Link>
          <div>

        </div>
        </section>
      </Layout>
    )
}

export const query = graphql`
query MyQuery {
  site {
    host
    port
    siteMetadata {
      copyright
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