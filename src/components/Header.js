import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { Jumbotron } from 'react-bootstrap'
import SEO from './SEO'
import Navigation from './Navigation'
import logo from '../assets/images/sura-logo.svg'

export default function Header() {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          description
          title
        }
      }
    }
  `)
  const { title, description } = data.site.siteMetadata
  return (
    <header>
      <SEO title="gatsby starter" />
      <div>
        <Link to="/">
          <img
            title="https://sura.me"
            src={logo}
            alt="sura karnawi website logo"
          />
        </Link>
      </div>
      <Navigation />
      <Jumbotron>
        <img
          alt="abstract art"
          src="/abstract-art-red-green-painting.jpeg"
          width="100%"
        />
        <h1>{title}</h1>
        <p>{description}</p>
      </Jumbotron>
    </header>
  )
}
