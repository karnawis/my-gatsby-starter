import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'

export default function Home() {
  
  return (
      <Layout>
        <section className={styles.header}>
          {/* <h1> { title } </h1>
          <h2> { description } </h2> */}
          <img src="/spiderwoman-banner.jpeg" alt="banner of sura" width="100%"/>
          <h3>a software engineer, artist and activist</h3>
          <p>Hi my name is Sura. My passion for art, technology and human rights have defined my career and education goals and daily decision making. I would like to influence the design and engineering industry and shift culture so we have more parents, women, diversity and hopefully it can be more inclusive. Living and working in middle east, north America and Europe, all over the world has taught me many valuable lessons including being very adaptive, compassionate and resilient. I have also learnt to always bring up the best in others and make the best out of circumstances to meet an end goal.</p>
          <Link to="http://sura.me" className={styles.btn}>Sura.me</Link>
        </section>
      </Layout>
    )
}

